const { db } = require('../../config/env')
const { database } = require('../../config/mssql')
const { attr } = require('./attributes')

const sequelize = database(db)

exports.User = sequelize.define('user', attr, { tableName: 'usuario' })