import {addDishAction, deleteDishAction, editDishAction} from './actions'
import axios from "axios";

const url = 'http://localhost:5000/dishes';

export const getDishesAPI = async () => await axios.get(url);
export const postDishAPI = async (dish) => await axios.post(url, dish);
export const deleteDishAPI = async (id) => await axios.delete(`${url}/${id}`);
export const editDishAPI = async (dish) => await axios.put(url, dish);

 
export const getAllDishes = () =>
    async (dispatch) => {
        const { data } = await getDishesAPI()
        data.map(dish => dispatch(addDishAction(dish)))
    } 

export const addDish = (dish) =>
    async (dispatch) => {
        const { data } = await postDishAPI(dish)
        dispatch(addDishAction(data))
} 

export const deleteDish = (dish) =>
    async (dispatch) => {
        await deleteDishAPI(dish.id)
        dispatch(deleteDishAction(dish))
} 

export const editDish = (dish) =>
    async (dispatch) => {
        await editDishAPI(dish)
        dispatch(editDishAction(dish))
} 

