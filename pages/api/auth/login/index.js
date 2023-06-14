export default function handler(req, res){
    const {method, body} = req
    const {email, password} = body
    console.log('body', body)
    res.status(200).json("hola te estas logueando");
}