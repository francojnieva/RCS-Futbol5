const jwt = require("jsonwebtoken");

module.exports = (rolRuta) => (req, res, next) => {
  const token = req.header("auth");
  const verificarToken = jwt.verify(token, process.env.JWT_SECRET);
  if (rolRuta === verificarToken.rol) {
    req.idUsuario = verificarToken.idUsuario;
    next();
  } else {
    res.status(403).json({ msg: "No estas autorizado" });
  }
};
