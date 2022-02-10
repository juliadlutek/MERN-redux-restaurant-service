import {addOrderAction, deleteOrderAction, editOrderAction, switchOrderRealisedAction} from './actions'
import axios from "axios";

const url = 'http://localhost:5000/orders';

export const getOrdersAPI = async () => await axios.get(url);
export const postOrderAPI = async (order) => await axios.post(url, order);
export const deleteOrderAPI = async (id) => await axios.delete(`${url}/${id}`);
export const editOrderAPI = async (order) => await axios.put(url, order);
export const switchOrderRealisedAPI = async (order) => await axios.patch(`${url}/realised/${order.id}`, order);

 
export const getAllOrders = () =>
    async (dispatch) => {
        const { data } = await getOrdersAPI()
        data.map(order => dispatch(addOrderAction(order)))
    } 

export const addOrder = (order) =>
    async (dispatch) => {
        const { data } = await postOrderAPI(order)
        dispatch(addOrderAction(data))
} 

export const deleteOrder = (order) =>
    async (dispatch) => {
        await deleteOrderAPI(order.id)
        dispatch(deleteOrderAction(order))
} 

export const editOrder = (order) =>
    async (dispatch) => {
        await editOrderAPI(order)
        dispatch(editOrderAction(order))
} 

export const switchOrderRealised = (order) =>
    async (dispatch) => {
        await switchOrderRealisedAPI(order)
        dispatch(switchOrderRealisedAction(order))
} 

