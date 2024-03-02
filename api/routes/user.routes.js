import express from 'express'
import User from '../models/user.model.js'

const router = express.Router()

router.get('/about',(req,res)=>{
    res.status(200).json({msg:'hello user'})
})

router.post('/create',async(req,res)=>{
    const {username} = req.body
    const newUser = await User.create({username})
    
    res.status(200).json({msg:'hello test_1'})
})

export { router as userRoutes}