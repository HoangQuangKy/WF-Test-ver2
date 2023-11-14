import inventory from '../models/inventory.js'
import order from '../models/order.js';
export const createInventory = async (req, res) => {
    try {
        const sku = req.body.sku;
        const description = req.body.description;
        const instock = req.body.instock
        const data = await inventory.create({
            sku: sku,
            description: description,
            instock: instock
        })
        return res.status(200).json({
            message: 'Tao inventory moi thanh cong',
            data
        })

    } catch (error) {
        return res.status(400).json({
            message: error.message,
            name: error.name,
        })
    }
}

export const check = async (req, res) => {
    try {
        // Lấy danh sách đơn hàng
        const orders = await order.find();

        // Duyệt qua mỗi đơn hàng và lấy mô tả sản phẩm
        const ordersWithDescriptions = await Promise.all(
            orders.map(async (order) => {
                const product = await inventory.findOne({ sku: order.item });
                return {
                    _id: order._id,
                    item: order.item,
                    price: order.price,
                    quantity: order.quantity,
                    productDescription: product ? product.description : 'N/A',
                };
            })
        );

        res.json(ordersWithDescriptions);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}