import User from "../../../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dbConnect from "../../../utils/db";
import cookie from "cookie";

dbConnect();

const CrearUsuario = async (req, res) => {
  if (req.method !== "POST")
    return res
      .status(400)
      .json({ status: 400, descripcion: "Método incorrecto" });

  const { email, password } = req.body;

  if (!email || !password)
    return res.status(401).json({ status: 401, descripcion: "Faltan datos" });

  const userExistent = await User.findOne({ email });

  if (userExistent)
    return res.status(401).json({
      status: 401,
      descripcion: "Ya existe un usuario con este email",
    });

  const salt = await bcrypt.genSalt();

  const passwordHash = await bcrypt.hash(password, salt);

  const newUser = await new User({ email, passwordHash });

  const savedUser = await newUser.save();

  const auth = jwt.sign(
    {
      user: savedUser._id,
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

  res.send();
};

export default CrearUsuario;
