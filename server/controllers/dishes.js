import Dish from '../models/dishes.js'


export const getDishes = async (req, res) => {
    try {
        const result = await Dish.find()
        res.status(200).json(result)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}
 
export const createDish = async (req, res) => {
    const newDish = new Dish(req.body)  
    try {
        await newDish.save()
        res.status(200).json(newDish)
    } catch (err) {
        res.status(404).json({ message: err.message })
    } 
}


export const deleteDish = async (req, res) => {
    const _id = req.params.id;
    try {
        const result = await Dish.findByIdAndDelete({_id})
        res.status(200).json(result)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const editDish = async (req, res) => {
    const dish = req.body
    try {
        const result = await Dish.findByIdAndUpdate({_id: dish.id}, dish)
        res.status(200).json(result)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}