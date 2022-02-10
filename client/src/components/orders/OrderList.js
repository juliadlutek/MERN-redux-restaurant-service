import React from 'react'
import {connect} from 'react-redux'; 
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import deleteIcon from '../../images/delete.png'
import { deleteOrder, switchOrderRealised } from '../../ducks/orders/operations'
import tick from '../../images/tick.png'
import cross from '../../images/cross.png'
 
const OrderList = ({orders, deleteOrder, switchOrderRealised}) => {
 
    const [currentOrders, setCurrentOrders] = useState([])
    const [sorting, setSorting] = useState("id asc")
    const [currentPage, setCurrentPage] = useState(1)
    const [ordersPerPage, setOrdersPerPage] = useState(5)
    const [pagesAmount, setPagesAmount] = useState(1)
    const ordersPerPageOptions = [3, 5, 10]
    const sortingOptions = ["Number asc", "Number desc", "Dishes amount asc", "Dishes amount desc", "Table number asc", "Table number desc"]
    const [pages, setPages] = useState([1])
    const [customersAmount, setCustomersAmount] = useState("")
    const [table, setTable] = useState("")
    const [minBill, setMinBill] = useState("")
    const [maxBill, setMaxBill] = useState("")
    const lastOrderId = currentPage * ordersPerPage
    const firstOrderId = lastOrderId - ordersPerPage

    useEffect(() => {
        setCurrentOrders(
            orders
                .sort((a, b) => {
                    switch(sorting) {
                        case 'Number asc':
                            return (a.number > b.number) ? 1 : -1
                        case 'Number desc':
                            return (a.number < b.number) ? 1 : -1
                        case 'Dishes amount asc':
                            return (a.dishes.length > b.dishes.length) ? 1 : -1
                        case 'Dishes amount desc':
                            return (a.dishes.length < b.dishes.length) ? 1 : -1
                        case 'Table number asc':
                            return (a.table > b.table) ? 1 : -1
                        case 'Table number desc':
                            return (a.table < b.table) ? 1 : -1
                        default:
                            return (a, b)
                    }
                })
                .filter((order) => {
                    return customersAmount ? order.customers == customersAmount : order
                })
                .filter((order) => {
                    return table ? order.table == table : order
                })
                )
        setPagesAmount(Math.ceil(currentOrders.length / ordersPerPage))
        setPages(Array.from({length: pagesAmount}, (_, i) => i + 1))       
    }, [sorting, orders, currentOrders.length, ordersPerPage, pagesAmount, customersAmount, table])

    return (
        <div className="orderList mainContent">
            <div className="filters">
                <div className="sort">
                    <p className="heading">Sort orders by:</p>
                    <select name="sorting" onChange={(e) => setSorting(e.target.value)}>
                        {sortingOptions.map((option, index) => (
                            <option value={option} key={index}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className="sort">
                    <p className="heading">Table:</p>
                    <select defaultValue="" onChange={(e) => setTable(e.target.value)}>
                        <option value="">-</option>
                        {Array.from({length: 10}, (_, i) => i + 1).map((option, index) => (
                            <option value={option} key={index}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className="sort">
                    <p className="heading">Customers amount:</p>
                    <select defaultValue="" onChange={(e) => setCustomersAmount(e.target.value)}>
                        <option value="">-</option>
                        {Array.from({length: 6}, (_, i) => i + 1).map((option, index) => (
                            <option value={option} key={index}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className="perPage">
                    <p>Orders per page:</p>
                    <select name="page" value={ordersPerPage} onChange={(e) => setOrdersPerPage(e.target.value)}>
                        {ordersPerPageOptions.map((option, index) => (
                                <option value={option} key={index}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>
            <h3>Order List</h3>
            <div className="orders">
                {currentOrders.length !== 0 ? (
                    currentOrders
                    .slice(firstOrderId, lastOrderId)
                    .map((order) => (
                        <div key={order.id}>
                            <div className="order">
                                <div className="order-title">
                                    {order.realised ? (
                                        <img onClick={() => switchOrderRealised(order)} src={tick} alt="" />
                                    ) : (
                                        <img onClick={() => switchOrderRealised(order)} src={cross} alt="" />
                                    ) }
                                    <Link to={`/orders/${order.id}`} className="order-link">
                                        <p>Order #{order.number}</p>
                                    </Link>
                                </div>
                                <img src={deleteIcon} className="deleteIcon" onClick={() => {
                                    if (window.confirm(`Are you sure you want to delete order #${order.number}?`)) {
                                    deleteOrder(order)
                                }
                                }} alt="" />
                            </div>
                        </div>
                        ))
                )
                :
                (<p>Any orders to display...</p>)
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
        orders: state.orders
    }
}

const mapDispatchToProps = {
    deleteOrder,
    switchOrderRealised
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList)
