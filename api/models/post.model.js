import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User' 
    },
    title:{
        type:String,
        required: true
    },
    content:{
        type:String,
        required: true
    },
    // like:[],
    // numberOfLike:{}
},
{timestamps:true})

const Post = mongoose.model('Post',PostSchema)
export default Post