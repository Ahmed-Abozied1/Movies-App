import mongoose from "mongoose";

const moviesSchema=mongoose.schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    name:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    
    },
    titleImage:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },

})