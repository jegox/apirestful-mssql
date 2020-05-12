const { database } = require('./src/config/mssql')
const { app } = require('./src/config/express')
const { db } = require('./src/config/env')

app.listen(3000, async () => {
  console.log('Running express...')
  /* const conexion = database(db)
  await conexion.authenticate() */
})