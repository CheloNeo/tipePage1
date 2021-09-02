import cookie from "cookie";

const Logout = async (req, res) => {
  if (req.method !== "GET")
    return res
      .status(401)
      .json({ status: 401, descripcion: "Método incorrecto" });

  res.setHeader(
    "Set-Cookie",
    cookie.serialize("auth", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      expires: new Date(0),
      maxAge: 0,
      path: "/",
    })
  );

  res.send(true);
};

export default Logout;
