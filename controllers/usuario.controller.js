import { Usuario } from "../models/Usuario.js";

export async function getUsuarios(req, res) {
  try {
    const usuarios = await Usuario.findAll({
      atributes: ["id", "nombre", "fechaNacimiento", "identificacion"],
    });
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createUsuario(req, res) {
  const { nombre, fechaNacimiento, identificacion } = req.body;
  try {
    let nuevoUsuario = await Usuario.create(
      {
        nombre, 
        fechaNacimiento, 
        identificacion
      },
      {
        fields: ["nombre", "fechaNacimiento", "identificacion"],
      }
    );
    return res.json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }

}

export async function getUsuario(req, res) {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findOne({
      where: {
        id,
      },
    });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, fechaNacimiento, identificacion} = req.body;

    const usuario = await Usuario.findByPk(id);
    usuario.nombre = nombre;
    usuario.fechaNacimiento = fechaNacimiento;
    usuario.identificacion = identificacion;
    await usuario.save();

    res.json(usuario);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteUsuario(req, res) {
  const { id } = req.params;
  try {
    await Usuario.destroy({
      where: {
        id,
      },
    });
    await Usuario.destroy({
      where: {
        id,
      },
    });
    return res.status(200).json({ message: 'Usuario eliminado' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

