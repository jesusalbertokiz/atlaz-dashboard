import { dbConnect } from "../../../../db/db"
import User from "../../../../models/user"
import bcrypt from "bcryptjs"
import { serialize } from "cookie";
import { createAccessToken } from "../../../../utils/jwt"


dbConnect()

export default async function loginHandler(req, res){

    const {method, body} = req
    switch(method){
        case "POST":
            const { email, password} = body
            

            try {

                //Buscar usuario
                const userFound = await User.findOne({ email });

                //Verificamos si el email no existe
                if (!userFound){
                    return res.status(400).json({
                        message: ["The email does not exist"],
                    });
                }
                    
                //Verificamos si la contraseña es correcta
                const isMatch = await bcrypt.compare(password, userFound.password);

                //En caso de que no sea devolvemos un error
                if (!isMatch) {
                    return res.status(400).json({
                        message: ["The password is incorrect"],
                    });
                }

                //Crear token
                const token = await createAccessToken({
                    id: userFound._id,
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
                    id: userFound._id,
                    name: userFound.name,
                    lastName: userFound.lastName,
                    email: userFound.email
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