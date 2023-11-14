import jwt from 'jsonwebtoken'
import user from '../models/user.js'

const authentication = async (req, res, next) => {
    const key = 'matkhaukho'
    const bearerToken = req.headers.authorization

    if (!bearerToken) {
        return res.status(401).json({ message: "Ban chua dang nhap1" })
    }

    const token = bearerToken.split(" ")[1]
    try {
        const checkToken = jwt.verify(token, key)
        console.log(checkToken);
        const userId = checkToken._id
        const userFind = await user.findById(userId)
        if (!user) {
            return res.status(401).json({ message: "Ban chua dang nhap" })
        }
        req.user = userFind
        req.userId = userId
        next()
    } catch (error) {
        console.log('Verify Token Error:', error.message);
        return res.status(401).json({ message: "Ban chua dang nhap2" })
    }
}

export default authentication