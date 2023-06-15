import { dbConnect } from "../../../../db/db"
import User from "../../../../models/user"
import bcrypt from "bcryptjs"
import { serialize } from "cookie";
import { createAccessToken } from "../../../../utils/jwt"


dbConnect()

export default async function registerHandler(req, res){

    const {method, body} = req
    switch(method){
        case "POST":
            const {name, lastName, email, password} = body

            try {
                
                //Crear contraseña cifrada
                const hash = await bcrypt.hash(password, 10)

                //Crear y guardar usuario
                const newUser = new User({
                    name,
                    lastName,
                    email,
                    password: hash
                })
                
                await newUser.save()

                //Crear token
                const token = await createAccessToken({
                    id: newUser._id,
                });

                //Serializar token
                const serialized = serialize("tokenAccess", token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    sameSite: "strict",
                    path: "/",
                  });

                //Enviar token con respuesta
                res.setHeader("Set-Cookie", serialized);
    
                res.status(200).json({
                    id: newUser._id,
                    name: newUser.name,
                    lastName: newUser.lastName,
                    email: newUser.email
                });
                return

            } catch (error) {
                res.status(500).json({ message: error.message });
            }

        default:
            res.status(400).json("Peticion no soportada");
            return
    }

    


}