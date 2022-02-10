import { ORDER_ADD, ORDER_EDIT, ORDER_DELETE, ORDER_SWITCH_REALISED } from "./types";


export const addOrderAction = (payload) => ({
    type: ORDER_ADD,
    payload
})

export const editOrderAction = (payload) => ({
    type: ORDER_EDIT,
    payload
})

export const deleteOrderAction = (payload) => ({
    type: ORDER_DELETE,
    payload
})

export const switchOrderRealisedAction = (payload) => ({
    type: ORDER_SWITCH_REALISED,
    payload
})