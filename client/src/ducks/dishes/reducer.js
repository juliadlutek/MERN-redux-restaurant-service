import { DISH_ADD, DISH_DELETE, DISH_EDIT } from "./types";

export const dishReducer = (state = [], action) => {
    switch (action.type) {
        case DISH_ADD:
            return [...state,
                 {
                id: action.payload._id,
                name: action.payload.name,
                description: action.payload.description,
                image: action.payload.image,
                cuisine: action.payload.cuisine,
                type: action.payload.type,
                vegetarian: action.payload.vegetarian,
                dairyFree: action.payload.dairyFree,
                glutenFree: action.payload.glutenFree,
                price: action.payload.price
            }
        ]
        case DISH_DELETE:
            return state.filter(el => el.id !== action.payload.id)
        case DISH_EDIT:
            return state.map((el) => {
                if (el.id === action.payload.id) return {...action.payload}
                else return el
            })
        default:
            return state
    }
} 