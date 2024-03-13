import mongoose from 'mongoose'
import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import 'dotenv/config.js'
import jwt from 'jsonwebtoken'

//----------------------------------------- JWT -----------------------------------------
const createToken = (_id) =>{
    return jwt.sign({_id},process.env.JWT_SECRET,{expiresIn:'1d'})
}

//----------------------------------------- GET: GET ALL USERS -----------------------------------------

export const getUsers = async (req,res)=>{  
    try {
        const users = await User.find()
        
        res.status(200).json({users})
        
    } catch (error) {
        console.log(error.message)
    }
}

//----------------------------------------- POST: REGISTER A USER -----------------------------------------
export const registerUser = async(req,res)=>{
    const {username, email, password} = req.body

    if(!email || !password || !username){
        return res.status(400).json({error:'all fields are required'})
    }
    
    const existUser = await User.findOne({email})
    if(existUser){
        return res.status(400).json({error:'email is taken'})
    }

    // hashed password
    const salt = await bcrypt.genSalt()
    const hashedPwd = await bcrypt.hash(password,salt)

    try {
        const user = await User.create({username,email,password: hashedPwd})
        const token = createToken(user._id)
        res.status(200).json({email,token})

    } catch (error) {
        res.status(500).json({error:error.message})
    }

     
}

//----------------------------------------- DELETE: DELETE A USER -----------------------------------------
export const deleteUser = async(req,res) =>{
    // res.send(req.params)
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(400).json({msg:'wrong id'})
    } 

    const user = await User.findById(req.params.id)
    if(!user) {
        return res.status(400).json({error:'no user found'})
    }
    try {
        await user.deleteOne()
        res.status(200).json({success:'user deleted'})
    } catch (error) {
        console.log(error.message)
    }
}

//----------------------------------------- PUT: UPDATE A USER -----------------------------------------
export const updateUser = async(req,res) =>{

}


//----------------------------------------- POST: LOGIN -----------------------------------------
export const loginUser = async(req,res) =>{
    const {email,password,username} = req.body
    if(!email || !password || !username){
        return res.status(400).json({error:'all fields are required'})
    }
    
    const user = await User.findOne({ email })
    // console.log(user.password);
    if(!user){
        return res.status(400).json({error:'incorrect email'})
    }

    const matchPwd = await bcrypt.compare(password,user.password)
    console.log(matchPwd)
    if(!matchPwd){
        return res.status(400).json({error:'incorrect password'})
    }
    
    try {
        const token = createToken(user._id)
        res.status(200).json({email,token})
        console.log(token)
    } catch (error) {
        console.log(error.message)
    }

}

//----------------------------------------- POST: LOGOUT -----------------------------------------
export const logout = () =>{
    return res.send('logout')
}