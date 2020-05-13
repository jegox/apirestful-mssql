const { create, read, update, destroy, login } = require('../modules/user')

module.exports = router => {
  router.route('/user')
    .all((req, res, next) => {
      next()
    })
    .get(async (req, res) => { 
      const users = await read()
      if(!users) throw `Error al intentar ejecutar query ${users.message}`
      res.status(200).json({users})
    })
    .post(async (req, res) => {
      const { status, message } = await create(req.body)
      res.status(200).json({ status, message })
    })
    .put(async (req, res) => { 
      console.log(req.body)
      const { nombre, nombre_usuario, clave_usuario, id_usuario } = req.body
      const fields = { nombre, nombre_usuario, clave_usuario }
      const { status, message } = await update(id_usuario, fields)
      res.status(200).json({ status, message })
    })
    .delete(async (req, res) => {
      console.log(req.body)
      const { id_usuario } = req.body
      const { status, message } = await destroy(id_usuario)
      res.status(200).json({ status, message })
    })

  router.route('/login')
    .post(async (req, res) => {
      const { nombre_usuario, clave_usuario } = req.body
      const { status, message } = await login(nombre_usuario, clave_usuario)
      res.status(200).json({ status, message })
    })
}