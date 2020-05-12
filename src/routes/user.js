const { create, read } = require('../modules/user')


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
    .post(async(req, res) => { 
      console.log(req.body)
      const user = await create(req.body)
      res.status(200).json({user})
    })
    .put((req, res) => { })
    .delete((req, res) => { })
}