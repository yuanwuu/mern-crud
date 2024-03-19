import mongoose from 'mongoose'
import Post from '../models/post.model.js'
import User from '../models/user.model.js'
import {errorHandler} from '../utils/error.js'
import {useLocation} from 'react-router-dom'

//----------------------------------------- GET: INDEX ALL POSTS-----------------------------------------
export const getAllPosts = async(req,res) =>{
    
    try {
        const posts = await Post.find().sort({createdAt:'desc'})
        res.status(200).json({posts})
    
    } catch (error) {
        console.log(error)
    }
}


//----------------------------------------- GET: INDEX USER POSTS-----------------------------------------
export const getUserPosts = async(req,res) =>{
    const user = await User.findById(req.user._id)

    try {
        const userPosts = await Post.find({user:user._id}).sort({createdAt:'desc'})
        res.status(200).json({userPosts})
    
    } catch (error) {
        console.log(error)
    }
}


//----------------------------------------- POST: CREATE -----------------------------------------

export const createPost = async(req,res) =>{
    const {title,content} = req.body
    if (!title || !content){
        res.status(400).json({error:'All fields are required'})
    }

    const user = await User.findById(req.user._id)

    try {
        const newPost = await Post.create({title,content,user:user._id})
        // console.log(newPost)
        
        res.status(200).json({success:"Post created",title,content})
        
    } catch (error) {
        console.log(error)
    }
}

//----------------------------------------- PUT: UPDATE -----------------------------------------
export const updatePost = async(req,res)=>{
    
    const {title,content} = req.body

    if (!title || !content){
        res.status(400).json({error:'All fields are required'})
    }

    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(400).json({error:'incorrect id type'})
    }

    const post = await Post.findById(req.params.id)
    if(!post){
        return res.status(400).json({error:'post not found'})
    }

    const user = await User.findById(req.user._id)
    if(!post.user.equals(user._id)){
        return res.status(400).json({error:'Not authorized'})
    }


    try {
        await post.updateOne({title,content})
        res.status(200).json({message:'post updated'})
    } catch (error) {
        return res.status(500).json({error:'cant update'})
    }
}


//----------------------------------------- DELETE: DELETE -----------------------------------------
export const deletePost = async(req,res) =>{
   
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(400).json({error:'incorrect id type'})
    }


    const post = await Post.findById(req.params.id)
    if(!post){
        return res.status(400).json({error:'post not found'})
    }

    const user = await User.findById(req.user._id)
    if(!post.user.equals(user._id)){
        return res.status(400).json({error:'Not authorized'})
    }

    try {
        await post.deleteOne()
        res.status(200).json({success:"Post deleted"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

