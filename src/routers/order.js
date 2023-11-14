import express from 'express'

import authentication from '../middlewares/index.js'
import { createOrder } from '../controllers/orders.js'
const routerOrder = express.Router()


routerOrder.post('/create-order', authentication, createOrder)





export default routerOrder