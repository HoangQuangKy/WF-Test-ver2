import express from 'express'

import authentication from '../middlewares/index.js'
import { check, createInventory } from '../controllers/inventory.js'
const routerInventory = express.Router()


routerInventory.post('/create-inventory', authentication, createInventory)
routerInventory.get('/check', check)

export default routerInventory