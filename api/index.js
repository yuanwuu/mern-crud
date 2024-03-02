import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import { userRoutes } from './routes/user.routes.js'

const app = express()
const PORT = 3000 || process.env.PORT
const dbConn = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        app.listen(PORT,()=>{
            console.log(`connected to MongoDB via Mongoose, PORT:${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

dbConn()

app.use(express.json())

app.use('/api/user',userRoutes)