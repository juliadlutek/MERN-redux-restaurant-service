import { dishReducer } from "./dishes/reducer";
import { orderReducer } from "./orders/reducer";
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    dishes: dishReducer,
    orders: orderReducer
  })