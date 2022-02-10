import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    table: { 
        type: Number, 
        required: true, 
        positive: true, 
    },
    customers: { 
        type: Number, 
        required: true, 
        positive: true, 
    },
    note: { 
        type: String,  
    },
    realised: { 
        type: Boolean, 
        default: false, 
    },
    dishes: [
        {
            type: mongoose.ObjectId, 
            ref: "Dish",
        }
    ],
})


export default mongoose.model("Order", orderSchema);