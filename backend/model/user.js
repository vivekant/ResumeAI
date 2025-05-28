import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email:{
    type : String,
  },
  phone:{
    type :Number,
  },
  fullname:{
    type:String
  },
  clerkid:{
    type:String,
    required:true,
    unique:true
  }

  
 



})

export const User = mongoose.model("User", userSchema);