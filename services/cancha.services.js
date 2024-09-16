const CanchaModel = require("../models/canchaSchema");

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

  const nuevaCancha = async (body) => {
    const nuevaCancha = new CanchaModel(body);
    await nuevaCancha.save();
  
    return {
      msg: "Cancha creada con exito",
      statusCode: 201,
    };
  };
  