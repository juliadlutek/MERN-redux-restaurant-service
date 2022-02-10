import { ORDER_ADD, ORDER_EDIT, ORDER_DELETE, ORDER_SWITCH_REALISED } from "./types";

 
export const orderReducer = (state = [], action) => {
    switch (action.type) {
        case ORDER_ADD:
            return [...state,
                 {
                id: action.payload._id,
                number: state.length + 1,
                table: action.payload.table,
                customers: action.payload.customers,
                note: action.payload.note,
                realised: action.payload.realised,
                dishes: action.payload.dishes
            }
        ]
        case ORDER_EDIT:
            return state.map((el) => {
                if (el.id === action.payload.id) return {...action.payload}
                else return el
            })
        case ORDER_SWITCH_REALISED:
            return state.map((el) => {
                if (el.id === action.payload.id) return {...el, realised: !el.realised}
                else return el
            })
        case ORDER_DELETE:
            return state.filter(el => el.id !== action.payload.id)
        default:
            return state
    }
}