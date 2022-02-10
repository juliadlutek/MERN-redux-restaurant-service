import { connect } from 'react-redux'
import {useParams, useHistory, Link} from 'react-router-dom'
import deleteIcon from '../../images/delete.png'
import edit from '../../images/edit.png'
import back from '../../images/back.png'
import tick from '../../images/tick.png'
import cross from '../../images/cross.png'
import bill from '../../images/bill.png'
import table from '../../images/table.png'
import person from '../../images/person.png'
import { deleteOrder, switchOrderRealised } from '../../ducks/orders/operations'


const OrderDetails = ({orders, dishes, deleteOrder, switchOrderRealised}) => {

    const { id } = useParams()
    const thisOrder = orders.find(order => order.id === id)
    const history = useHistory()
    const thisDishes = dishes
    .filter(dish => {
        return thisOrder.dishes.includes(dish.id)
    })
    const finalBill = thisDishes.reduce((a, b) => a + b.price, 0)
    
    return (
        <>
        {thisOrder ?
        (
            <div className="details mainContent">
                <div className="icons">
                    <img src={back} onClick={() => history.goBack()} alt="" />
                    <div>
                        <Link to={`/orders/edit/${thisOrder.id}`}>
                            <img src={edit} alt="" />
                        </Link>
                        <img src={deleteIcon} onClick={() => {
                            if (window.confirm(`Are you sure you want to delete order #${thisOrder.number}?`)) {
                                deleteOrder(thisOrder)
                                history.goBack()
                            }
                        }} alt="" />
                    </div>
                </div> 
                <div className="main">
                <div className="info">
                    <div className="order-title">
                        {thisOrder.realised ? (
                            <img onClick={() => switchOrderRealised(thisOrder)} src={tick} alt="" />
                        ) : (
                            <img onClick={() => switchOrderRealised(thisOrder)} src={cross} alt="" />
                        ) }
                        <h3>Order #{thisOrder.number}</h3>

                    </div>
                    {thisOrder.note ? (
                        <div className="note">
                            <p>Waiter's note</p>
                            {thisOrder.note}
                        </div>
                    ) : (<></>)
                    }
                    <div className="order-info-icons">
                        <div>
                            <p>Table</p>
                            <div>
                                <img src={table} alt="" />
                                <p>{thisOrder.table}</p>
                            </div>
                        </div>
                        <div>
                            <p>Customers</p>
                            <div>
                                <img src={person} alt="" />
                                <p>{thisOrder.customers}</p>
                            </div>
                            </div>
                        <div>
                            <p>Bill</p>
                            <div>
                                <img src={bill} alt="" />
                                <p>{finalBill}$</p>
                            </div>
                        </div>
                    </div>

                    <div className="order-dishes">
                        {thisDishes
                        .map(dish => (
                            <Link to={`/dishes/${dish.id}`} className="order-dish" key={dish.id}>
                                <img src={dish.image} alt=""></img>
                            </Link>
                        ))}
                    </div>
                </div>
                </div>
            </div>
        ) : 
        (
            <p className="mainContent">No order with id {id}...</p>          
        )}

        </>
    )
}

const mapStateToProps = (state) => ({
    orders: state.orders,
    dishes: state.dishes
})

const mapDispatchToProps = {
    deleteOrder,
    switchOrderRealised
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails)
