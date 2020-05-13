const Sequelize = require('sequelize')

exports.attr = {
  nombre: { type: Sequelize.STRING, allowNull: false },
  nombre_usuario: { type: Sequelize.STRING, allowNull: false },
  clave_usuario: { type: Sequelize.STRING, allowNull: false },
  id_tipo: { type: Sequelize.INTEGER, allowNull: false},
  id_usuario: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }
}