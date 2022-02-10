import { connect } from 'react-redux'
import {useParams, useHistory, Link} from 'react-router-dom'
import vegetarian from '../../images/vegetarian.png'
import dairyFree from '../../images/dairy-free.png'
import glutenFree from '../../images/gluten-free.png'
import deleteIcon from '../../images/delete.png'
import edit from '../../images/edit.png'
import back from '../../images/back.png'
import { deleteDish } from '../../ducks/dishes/operations'


const DishDetails = ({dishes, deleteDish}) => {

    const { id } = useParams()
    const thisDish = dishes.find(dish => dish.id === id)
    const history = useHistory()

    return (
        <>
        {thisDish ? (
            <div className="details mainContent">
                <div className="icons">
                    <img src={back} onClick={() => history.goBack()} alt="" />
                    <div>
                        <Link to={`/dishes/edit/${thisDish.id}`}>
                            <img src={edit} alt="" />
                        </Link>
                        <img src={deleteIcon} onClick={() => {
                            if (window.confirm(`Are you sure you want to delete dish '${thisDish.name}'?`)) {
                                deleteDish(thisDish)
                                history.goBack()
                            }
                        }} alt="" />
                    </div>
                </div> 
                <div className="main">
    
                <img className="photo" src={thisDish.image} alt="" />
                <div className="info">
                    <p className="name">{thisDish.name}</p>
                    <p className="description">{thisDish.description}</p>
                    <p className="price">Price: {thisDish.price}$</p>
                    <p className="type">Type: {thisDish.type}</p>
                    <p className="cuisine">Cuisine: {thisDish.cuisine}</p>
                    <div className="indicates">
                            {thisDish.vegetarian ? 
                                <img src={vegetarian} alt="" /> : <></>
                            }
                            {thisDish.dairyFree ? 
                                <img src={dairyFree} alt="" /> : <></>
                            }
                            {thisDish.glutenFree ? 
                                <img src={glutenFree} alt="" /> : <></>
                            }
                        </div>
                </div>
                </div>
            </div>
        ) : 
        (
            <p className="mainContent">No dish with id {id}...</p>          
        )}

        </>
    )
}

const mapStateToProps = (state) => ({
    dishes: state.dishes
})

const mapDispatchToProps = {
    deleteDish
}

export default connect(mapStateToProps, mapDispatchToProps)(DishDetails)
