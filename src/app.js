import express from 'express'
import mongoose from "mongoose"
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routers/index.js'
dotenv.config()
const port = 8989


const app = express()
app.use(
    cors({
        origin: "*",
    })
);
app.use(express.json());
app.use("/", router)

mongoose.connect('mongodb+srv://muacp1:D5hWHnHb98UpNkE2@clusterformindx.1kenhbr.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connected with MongoDB!'));
app.listen(port, () => {
    console.log(`Server listening on ${port}`);
})
