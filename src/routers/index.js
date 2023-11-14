import express from 'express'
import routerUser from './user.js'
import routerOrder from './order.js'
import routerInventory from './inventory.js'
const router = express.Router()

router.use("/user", routerUser)
router.use("/order", routerOrder)
router.use("/inventory", routerInventory)
export default router