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
    year:{
        type:Number,
        required:true
    },
    time:{
        type:Number,
        required:true
    },
    vedio:{
        type:String,
       // required:true
    },
    rate:{
        type:Number,
        required:true,
        default:0
    },
    numberOfReviews:{
        type:Number,
        required:true,
        default:0

    },
    reviews:[

    ],
    casts:[
        {
        name:{type:String,required:true},
        image:{type:String,required:true},
    }
]


},
{
    timestamps:true,
})