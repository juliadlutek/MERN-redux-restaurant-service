import Order from '../models/orders.js'


export const getOrders = async (req, res) => {
    try {
        const result = await Order.find()
        res.status(200).json(result)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const createOrder = async (req, res) => {
    console.log(req.body);
    const newOrder = new Order(req.body)
    try {
        await newOrder.save()
        res.status(200).json(newOrder)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const deleteOrder = async (req, res) => {
    const _id = req.params.id;
    try {
        const result = await Order.findByIdAndDelete({_id})
        res.status(200).json(result)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const editOrder = async (req, res) => {
    const order = req.body
    try {
        const result = await Order.findByIdAndUpdate({_id: order.id}, order)
        res.status(200).json(result)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const switchOrderRealised = async (req, res) => {
    const _id = req.params.id;
    const realised = !req.body.realised
    try {
        const result = await Order.findByIdAndUpdate({_id}, { realised })
        res.status(200).json(result)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}