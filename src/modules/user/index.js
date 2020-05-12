const { User } = require('./model')
const sequelize = require('sequelize')

module.exports = {
  create: async (data) => { 
    data.createdAt = sequelize.fn('GETDATE')
    data.updatedAt = sequelize.fn('GETDATE')
    return await User.create(data)
  },
  read: async () => { 
    return await User.findAll()
  }
}
