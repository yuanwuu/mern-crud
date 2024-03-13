import express from 'express'
// import User from '../models/user.model.js'

import {getUsers,registerUser,deleteUser, loginUser,logout} from '../controllers/user.controller.js'

const router = express.Router()

router.get('/',getUsers)
router.post('/signup',registerUser)
router.post('/login',loginUser)
router.post('/logout',logout)
router.delete('/delete/:id',deleteUser)


export { router as userRoutes}