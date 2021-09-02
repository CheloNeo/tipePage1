import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";

export const userPOST = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ status: 400, descripcion: "Faltan datos" });

  const existingUser = await User.findOne({ email });

  if (!existingUser)
    return res
      .status(401)
      .json({ status: 401, descripcion: "Usuario no existe" });

  const passwordCorrect = await bcrypt.compare(
    password,
    existingUser.passwordHash
  );

  if (!passwordCorrect)
    return res
      .status(401)
      .json({ status: 401, descripcion: "Contraseña incorrecta" });

  const auth = jwt.sign(
    {
      user: existingUser._id,
    },
    process.env.JWT_SECRET
  );

  res.setHeader(
    "Set-Cookie",
    cookie.serialize("auth", auth, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60,
      path: "/",
    })
  );

  res.send({ status: 200, descripcion: "Inicio de sesión exitoso" });
};

export const userGET = (req, res) => {
  try {
    const auth = req.cookies.auth;

    jwt.verify(auth, process.env.JWT_SECRET);

    res.json(true);
  } catch (err) {
    res.json(false);
  }
};
