import { dbConnect } from "../../../../db/db"
import User from "../../../../models/user"

export default function handler(req, res){

    const {method, body} = req
    switch(method){
        case "POST":
            const {name, lastName, email, password} = body
            const newUser = new User({
                name,
                lastName,
                email,
                password
            })
            console.log(newUser)
            res.status(200).json("Usuario registrado");
            return

        default:
            res.status(400).json("Peticion no soportada");
            return
    }

    


}