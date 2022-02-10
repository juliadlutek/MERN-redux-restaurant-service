import OrderForm from './OrderForm'
import { connect } from 'react-redux'
import { addOrder } from "../../ducks/orders/operations"
import { useHistory } from 'react-router-dom'
const OrderCreate = ({dishes, addOrder}) => {

    const history = useHistory()

    return (
        <OrderForm
            title="Add new order!"
            onSubmit={(values) => {
                addOrder({
                    table: parseInt(values.table),
                    customers: parseInt(values.customers),
                    note: values.note,
                    realised: false,
                    dishes: values.dishes
                })
                history.goBack()
            }}
            initialValues={{
                table: '',
                customers: '',
                note: '',
                dishes: []
            }}
            dishes={dishes}
        />
    )
}

const mapStateToProps = (state, props) => ({
    dishes: state.dishes
})

const mapDispatchToProps = {
    addOrder
}



export default connect(mapStateToProps, mapDispatchToProps)(OrderCreate)
