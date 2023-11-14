import order from '../models/order.js'

export const createOrder = async (req, res) => {
    try {
        const item = req.body.item;
        const price = req.body.price;
        const quantity = req.body.quantity
        const data = await order.create({
            item: item,
            price: price,
            quantity: quantity
        })
        return res.status(200).json({
            message: 'Tao order moi thanh cong',
            data
        })

    } catch (error) {
        return res.status(400).json({
            message: error.message,
            name: error.name,
        })
    }
}