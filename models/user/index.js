import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
    }
}, {
    timestamps:true,
    versionKey:false
})

export default models.Users || model('Users', userSchema)