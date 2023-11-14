import express from 'express'
import { createNewUser, login } from '../controllers/user.js'
import authentication from '../middlewares/index.js'
const routerUser = express.Router()


routerUser.post('/register', createNewUser)
routerUser.post('/login', login)
routerUser.get('/check', authentication)
// routerUser.get('/check', authentication)





export default routerUser