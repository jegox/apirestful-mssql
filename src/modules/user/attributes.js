const Sequelize = require('sequelize')

exports.attr = {
  name: { type: Sequelize.STRING, allowNull: false },
  lastname: { type: Sequelize.STRING },
  username: { type: Sequelize.STRING, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false }
}