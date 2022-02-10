import DishForm from './DishForm'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {addDish} from '../../ducks/dishes/operations'
const DishCreate = ({addDish}) => {

    const history = useHistory()

    return (
        <DishForm
            title="Add new dish!"
            onSubmit={(values) => {
                addDish({
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
            }}
            initialValues={{
                name: '',
                description: '',
                image: '',
                price: '',
                type: 'Main Course',
                cuisine: 'American',
                vegetarian: false,
                dairyFree: false,
                glutenFree: false
            }}
        />
    )
}

const mapDispatchToProps = {
    addDish
}

export default connect(null, mapDispatchToProps)(DishCreate)
