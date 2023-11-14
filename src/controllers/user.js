import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import user from '../models/user.js'



export const createNewUser = async (req, res) => {
    try {
        const username = req.body.username
        const password = req.body.password

        const checkUser = await user.findOne({
            username: username
        })
        if (checkUser) {
            return res.status(400).json({
                message: 'User already exist'
            })
        }
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt)
        const data = await user.create({
            username: username,
            password: hashPassword
        })
        return res.status(200).json({
            message: 'Create new user success',
            data
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message,
            name: error.name,
        })
    }
}

export const login = async (req, res) => {
    const key = 'matkhaukho'
    try {
        const userFind = await user.findOne({ username: req.body.username })
        if (!userFind) {
            return res.status(404).json({
                message: "Tên đăng nhập không đúng"
            })
        }
        const passwordMatch = await bcrypt.compare(String(req.body.password), String(userFind.password))
        if (passwordMatch) {
            const token = jwt.sign({ username: userFind._id }, key)
            return res.status(200).json({
                message: 'Đăng nhập thành công',
                token: token
            })
        }
        if (!passwordMatch) {
            return res.status(401).json({
                message: "Mật khẩu không đúng"
            });

        }
    } catch (error) {
        return res.status(400).json({
            message: error.message,
            name: error.name,
        });
    }
}

