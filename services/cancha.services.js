const CanchaModel = require("../models/canchaSchema.js");
const cloudinary = require("../helpers/cloudinary.js");

const obtenerCanchas = async () => {
  const canchas = await CanchaModel.find();
  return {
    canchas,
    statusCode: 200,
  };
};

const obtenerCancha = async (idCancha) => {
  const cancha = await CanchaModel.findOne({ _id: idCancha });
  return {
    cancha,
    statusCode: 200,
  };
};

const crearCancha = async (body, file) => {
  const { secure_url } = await cloudinary.uploader.upload(file.path)
  const nuevaCancha = new CanchaModel({
    ...body,
    Imagen: secure_url
  });
  await nuevaCancha.save();

  return {
    msg: "Cancha creada con exito",
    statusCode: 201,
  };
};

const actualizarCancha = async (body, idCancha, file) => {
  const { secure_url } = await cloudinary.uploader.upload(file.path)
  await CanchaModel.findByIdAndUpdate({ _id: idCancha }, { ...body, Imagen: secure_url});
  const canchas = await CanchaModel.find();
  return {
    msg: "Cancha actualizada",
    canchas,
    statusCode: 200,
  };
};

const borrarCancha = async (idCancha) => {
  await CanchaModel.findByIdAndDelete({ _id: idCancha });

  return {
    msg: "Cancha eliminada",
    statusCode: 200,
  };
};

module.exports = {
  obtenerCanchas,
  obtenerCancha,
  crearCancha,
  actualizarCancha,
  borrarCancha,
};
