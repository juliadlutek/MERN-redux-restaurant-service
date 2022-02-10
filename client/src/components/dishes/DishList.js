import React from 'react'
import {connect} from 'react-redux'; 
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import deleteIcon from '../../images/delete.png'
import loupe from '../../images/loupe.png'
import { deleteDish } from '../../ducks/dishes/operations'

const DishList = ({dishes, deleteDish}) => {

    const [currentDishes, setCurrentDishes] = useState([])
    const [filterText, setFilterText] = useState("")
    const [sorting, setSorting] = useState("Alphabetically asc")
    const [currentPage, setCurrentPage] = useState(1)
    const [dishesPerPage, setDishesPerPage] = useState(8)
    const [pagesAmount, setPagesAmount] = useState(1)
    const [pages, setPages] = useState([1])
    const [currentCuisine, setCurrentCuisine] = useState("")
    const [currentType, setCurrentType] = useState("")
    const cuisineTypes = ["American", "Chinese", "French", "Greek", "Indian", "Italian", "Japanese", "Mexican", "Polish", "Thai"]
    const dishTypes = ["Starter", "Main Course", "Dessert", "Beverage"]
    const sortingOptions = ["Addition order asc", "Addition order desc", "Alphabetically asc", "Alphabetically desc", "Price asc", "Price desc"]
    const [isVegetarian, setIsVegetarian] = useState(false)
    const [isDairyFree, setIsDairyFree] = useState(false)
    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const lastDishId = currentPage * dishesPerPage
    const firstDishId = lastDishId - dishesPerPage
    
    useEffect(() => {
        setCurrentDishes(dishes
            .filter(dish => {
                return dish.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
            })
            .filter(dish => {
                return currentCuisine ?
                dish.cuisine === currentCuisine : dish
            })
            .filter(dish => {
                return currentType ?
                dish.type === currentType : dish
            })
            .filter(dish => {
                return isVegetarian ?
                dish.vegetarian === true : dish
            })
            .filter(dish => {
                return isDairyFree ?
                dish.dairyFree === true : dish
            })
            .filter(dish => {
                return isGlutenFree ?
                dish.glutenFree === true : dish
            })
            .sort((a, b) => {
                switch(sorting) {
                    case "Addition order asc":
                        return (a.id > b.id) ? 1 : -1
                    case "Addition order desc":
                        return (a.id < b.id) ? 1 : -1
                    case "Alphabetically asc":
                        return (a.name > b.name) ? 1 : -1
                    case "Alphabetically desc":
                        return (a.name < b.name) ? 1 : -1
                    case "Price asc":
                        return (a.price > b.price) ? 1 : -1
                    case "Price desc":
                        return (a.price < b.price) ? 1 : -1
                    default:
                        return (a, b)
                }
            })
            )
        setPagesAmount(Math.ceil(currentDishes.length / dishesPerPage))
        setPages(Array.from({length: pagesAmount}, (_, i) => i + 1))
    }, [filterText, currentCuisine, currentType, isVegetarian, isDairyFree, isGlutenFree, sorting, dishes, dishesPerPage, currentDishes.length, pagesAmount])

    return (
        <div className="dishList mainContent">
            <div className="filters">
                <div className="search">
                    <input type="text" placeholder="Search for dish..." onChange={(e) => setFilterText(e.target.value)} />
                    <img src={loupe} alt="" />
                </div>
                <p className="heading">Sorting:</p>
                <div className="sort">
                    <select defaultValue="Alphabetically asc" onChange={(e) => setSorting(e.target.value)}>
                        {sortingOptions.map((option, index) => (
                            <option value={option} key={index}>{option}</option>
                        ))}
                    </select>
                </div>
                <p className="heading">Cuisine:</p>
                <div className="categories">
                    {cuisineTypes.map((cuisine, index) => (
                        <button 
                            key={index}
                            onClick={() => {
                                currentCuisine === cuisine ?
                                setCurrentCuisine("") :
                                setCurrentCuisine(cuisine)
                            }}
                            style={{ backgroundColor: currentCuisine === cuisine ? 'lightgrey' : 'white'}}
                        >{cuisine}</button>
                    ))}
                </div>
                <p className="heading">Type:</p>
                <div className="categories">
                    {dishTypes.map((type, index) => (
                        <button 
                            key={index}
                            onClick={() => {
                                currentType === type ?
                                setCurrentType("") :
                                setCurrentType(type)
                            }}
                            style={{ backgroundColor: currentType === type ? 'lightgrey' : 'white'}}
                        >{type}</button>
                    ))}
                </div>
                <p className="heading">Qualities:</p>
                <div className="checkboxes">
                    <div>
                        <input type="checkbox" onChange={(e) => {
                            setIsVegetarian(e.target.checked)
                        }}></input>
                        <p className="heading">Vegetarian</p>
                    </div>
                    <div>
                        <input type="checkbox" onChange={(e) => {
                            setIsDairyFree(e.target.checked);
                        }}></input>
                        <p className="heading">Dairy Free</p>
                    </div>
                    <div>
                        <input type="checkbox" onChange={(e) => {
                            setIsGlutenFree(e.target.checked)
                        }}></input>
                        <p className="heading">Gluten Free</p>
                    </div>
                </div>
                <div className="perPage">
                    <p>Dishes per page:</p>
                    <select name="page" value={dishesPerPage} onChange={(e) => setDishesPerPage(e.target.value)}>
                        <option value={2}>2</option>
                        <option value={4}>4</option>
                        <option value={8}>8</option>
                        <option value={16}>16</option>
                    </select>
                </div>
            </div>
            <h3 id="dishlist">Dish List</h3>
            <div className="dishes">
                {currentDishes.length !== 0 ? (
                    currentDishes
                    .slice(firstDishId, lastDishId)
                    .map((dish) => (
                        <div key={dish.id}>
                            <div className="dish">
                            <img src={deleteIcon} className="deleteIcon" onClick={() => {
                                if (window.confirm(`Are you sure you want to delete dish '${dish.name}'?`)) {
                                    deleteDish(dish)
                                }
                                }} alt="" />
                            <Link to={`/dishes/${dish.id}`} className="dish-link">
                                <img src={dish.image} alt="" />
                                <p>{dish.name}</p>
                            </Link>
                            </div>
                        </div>
                        ))
                )
                :
                (<p>Any dishes to display...</p>)
            }
            </div>
            <div className="pagination">
                {pages.map(page => (
                    <p key={page}
                        onClick={() => setCurrentPage(page)}
                        style={{ backgroundColor: currentPage === page ? 'lightgrey' : 'white'}}
                    >{page}</p>
                ))}
            </div>
        </div>
    )
} 

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes
    }
}

const mapDispatchToProps = {
    deleteDish
}

export default connect(mapStateToProps, mapDispatchToProps)(DishList)
