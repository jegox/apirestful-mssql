const Sequelize =  require('sequelize')

let sequelize = null
const dialectOptions = { options: { useUTC: false, dateFirst: 1 } }

const Database = (setup) => {
  const { host, user, pass, db } = setup
  return !sequelize ? sequelize = new Sequelize(db, user, pass, { host, dialect: 'mssql', dialectOptions, logging: false }) : sequelize
}

exports.database = Database