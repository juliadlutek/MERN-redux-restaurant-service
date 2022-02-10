import OrderForm from './OrderForm'
import { connect } from 'react-redux'
import { editOrder } from '../../ducks/orders/operations'
import { useHistory, useParams } from "react-router-dom";


const OrderEdit = ({orders, dishes, editOrder}) => {

    let history = useHistory()
    let { id } = useParams()
    const thisOrder = orders.find(order => order.id === id)
    
    return (
        <OrderForm
            title={`Edit order #${thisOrder.number}:`}
            onSubmit={(values) => {
                editOrder( {
                    id: values.id,
                    number: values.number,
                    table: parseInt(values.table),
                    customers: parseInt(values.customers),
                    note: values.note,
                    realised: false,
                    dishes: values.dishes
                })
                history.goBack()
            } }
            initialValues={{
                id: thisOrder.id,
                number: thisOrder.number,
                table: thisOrder.table,
                customers: thisOrder.customers,
                note: thisOrder.note,
                dishes: thisOrder.dishes.map((dish) => dish.toString())
            }}
            dishes={dishes}
        />
    )
}

const mapStateToProps = (state) => ({
        orders: state.orders,
        dishes: state.dishes
    })

const mapDispatchToProps = {
    editOrder
}


export default connect(mapStateToProps, mapDispatchToProps)(OrderEdit)