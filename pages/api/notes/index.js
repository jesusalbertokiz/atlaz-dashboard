import { dbConnect } from "../../../db/db";
import Notes from "../../../models/notes";

dbConnect()
export default async function handler(req, res)
{
    const {method, body} = req
    switch(method){
        case "GET":
            const note = await Notes.find
            console.log(note);
            return res.status(200).json(note);
        default:
            return res.status(400).json("Ruta no encontrada");
    }

    }
    