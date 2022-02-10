import DishForm from './DishForm'
import { connect } from 'react-redux'
import { editDish } from '../../ducks/dishes/operations'
import { useHistory, useParams } from "react-router-dom";

const DishEdit = ({dishes, editDish}) => {

    let history = useHistory()
    let { id } = useParams()
    const thisDish = dishes.find(dish => dish.id === id)
    
    return (
        <DishForm
            title={`Edit dish ${thisDish.name}:`}
            onSubmit={(values) => {
                editDish({
                    id: values.id,
                    name: values.name,
                    description: values.description,
                    image: values.image,
                    price: parseFloat(values.price),
                    type: values.type,
                    cuisine: values.cuisine,
                    vegetarian: (values.vegetarian === "true"),
                    dairyFree: (values.dairyFree === "true"),
                    glutenFree: (values.glutenFree === "true")
                })
                history.goBack()
            } }
            initialValues={{
                id: thisDish.id,
                name: thisDish.name,
                description: thisDish.description,
                image: thisDish.image,
                price: thisDish.price,
                type: thisDish.type,
                cuisine: thisDish.cuisine,
                vegetarian: thisDish.vegetarian.toString(),
                dairyFree: thisDish.dairyFree.toString(),
                glutenFree: thisDish.glutenFree.toString()
            }}
        />
    )
}

const mapStateToProps = (state) => ({
        dishes: state.dishes
    })

const mapDispatchToProps = {
    editDish
}


export default connect(mapStateToProps, mapDispatchToProps)(DishEdit)