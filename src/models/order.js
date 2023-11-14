import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

export default mongoose.model("order", orderSchema)