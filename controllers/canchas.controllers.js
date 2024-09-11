let canchas = [
    {
        id: 1,
        nombre: 'Cancha 1',
        capacidad: 10,
        precio: 15000,
        estado: 'Disponible'
    },
    {
        id: 2,
        nombre: 'Cancha 2',
        capacidad: 10,
        precio: 15000,
        estado: 'Disponible'
    }
  ];
  
  // Controlador para obtener una cancha por id o todas
  const obtenerUnaCanchaPorIdOTodos = (req, res) => {
    try {
      const id = Number(req.query.id);  
  
      if (id) {
        const cancha = canchas.find((canchita) => canchita.id === id);
        if (cancha) {
          res.status(200).json(cancha);
        } else {
          res.status(404).json({ mensaje: "Cancha no encontrada" });
        }
      } else {
        res.status(200).json(canchas);
      }
  
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la cancha" });
    }
  };
  
  // Controlador para crear una nueva cancha
  const crearUnaCancha = (req, res) => {
    try {

      const nuevaCancha = {
        id: canchas.length > 0 ? canchas[canchas.length - 1].id + 1 : 1,
        ...req.body,
      };
      canchas.push(nuevaCancha);
      res.status(201).json(nuevaCancha);
    } catch (error) {
      res.status(500).json({ error: "Error al crear la cancha" });
    }
  };
  
  // Controlador para editar una cancha
  const editarUnaCancha = (req, res) => {
    try {
      const id = Number(req.params.idCancha);
      const posicionCancha = canchas.findIndex((cancha) => cancha.id === id);
  
      if (posicionCancha !== -1) {
        const canchaEditada = {
          id,
          ...req.body,
        };
        canchas[posicionCancha] = canchaEditada;
        res.status(200).json(canchas[posicionCancha]);
      } else {
        res.status(404).json({ mensaje: "Cancha no encontrada" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al editar la cancha" });
    }
  };
  
  // Controlador para borrar una cancha
  const borrarUnaCancha = (req, res) => {
    try {
      const id = Number(req.params.idCancha);
      const canchasNoBorradas = canchas.filter((cancha) => cancha.id !== id);
  
      if (canchasNoBorradas.length !== canchas.length) {
        canchas = canchasNoBorradas;
        res.status(200).json(canchas);
      } else {
        res.status(404).json({ mensaje: "Cancha no encontrada" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al borrar la cancha" });
    }
  };
  
  module.exports = {
    obtenerUnaCanchaPorIdOTodos,
    crearUnaCancha,
    editarUnaCancha,
    borrarUnaCancha
  };
  