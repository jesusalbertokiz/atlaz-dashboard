import jwt from "jsonwebtoken";

export default function profileHandler(req, res) {
  const { tokenAccess } = req.cookies;
  
  if (!tokenAccess) {
    return res.status(401).json({ error: "Not logged in" });
  }

  const data = jwt.verify(tokenAccess, process.env.TOKEN_SECRET);
  return res.status(200).json(data);
}