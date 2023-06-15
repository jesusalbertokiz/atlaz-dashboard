import { serialize } from "cookie";

export default function logoutHandler(req, res) {
  const { tokenAccess } = req.cookies;
  if (!tokenAccess) {
    return res.status(401).json({ error: "Not logged in" });
  }

  const serialized = serialize("tokenAccess", null, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0,
    path: "/",
  });

  res.setHeader("Set-Cookie", serialized);
  return res.status(200).json({
    message: "Logout successful",
  });
}