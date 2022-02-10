import { DISH_ADD, DISH_DELETE, DISH_EDIT } from "./types";


export const addDishAction = (payload) => ({
    type: DISH_ADD,
    payload
})

export const deleteDishAction = (payload) => ({
    type: DISH_DELETE,
    payload
})

export const editDishAction = (payload) => ({
    type: DISH_EDIT,
    payload
})