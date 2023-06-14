import { Schema, model, models } from "mongoose";
 
const noteSchema = new Schema({
    title:{
        type: String,
        required: [true, "Titulo requerido."],
        unique: true,
        trim: true
    },
    description:{
        type: String,
        required: true
    }
}, {
    timestamps:true,
    versionKey:false
})

export default models.Notes || model('Notes', noteSchema)