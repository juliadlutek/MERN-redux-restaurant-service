import mongoose from 'mongoose';
   
const dishSchema = mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
    },
    description: { 
        type: String, 
        required: true, 
    },
    image: {
        type: String, 
        required: true,
    },
    price: { 
        type: Number, 
        required: true, 
    },
    type: { 
        type: String, 
        required: true, 
    },
    cuisine: { 
        type: String, 
        required: true, 
    },
    vegetarian: { 
        type: Boolean, 
        default: false, 
    },
    dairyFree: { 
        type: Boolean, 
        default: false, 
    },
    glutenFree: { 
        type: Boolean, 
        default: false, 
    },
})


export default mongoose.model("Dish", dishSchema);