import express from 'express'
import { createPost,deletePost,getAllPosts,updatePost } from '../controllers/post.controller.js'
import { auth } from '../utils/auth.js'

const router = express.Router()

router.get('/',getAllPosts)
router.post('/create',auth,createPost)
router.put('/update/:id',auth,updatePost)
router.delete('/delete/:id',auth,deletePost)


export {router as postRoutes}