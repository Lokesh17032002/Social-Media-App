import mongoose from "mongoose";


//Created schema
const userSchema= new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    fullName:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        reuired: true,
        unique: true,
    },
    followers:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: [],
        }
    ],
    following:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: [],
        }
    ],
    profileImg:{
        type: String,
        default:"",
    },
    coverImg:{
        type: String,
        default: "",
    },
    bio:{
        type: String,
        default: "",
    },
    link:{
        type: String,
        default: "",
    },
},
{timestamps:true}
);

//Creating Model
const User = mongoose.model("User",userSchema);

export default User;