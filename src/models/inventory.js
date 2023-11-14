import mongoose from "mongoose"

const inventorySchema = new mongoose.Schema({
    sku: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    instock: {
        type: Number,
        required: true
    }
})

export default mongoose.model("inventory", inventorySchema)