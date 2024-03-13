import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'


export const auth = async(req,res,next)=>{
    const {authorization} = req.headers 
    if(!authorization){
        return res.status(401).json({error:'Authorization token not found'})
    }

    const token = authorization.split(" ")[1]
    console.log(token)
    try {
        const {_id} = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(_id).select('_id')

        next()
    } catch (error) {
        
        return res.status(401).json({error:error.message})
    }
}


  
  
