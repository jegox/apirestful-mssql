const { User } = require('./model')
const { encrypt, compare } = require('../../lib/bcrypt')
const { sign } = require('../../lib/jsonwebtoken')

async function create(data){
  try{
    data.clave_usuario = await encrypt(data.clave_usuario)
    const res = await User.create(data)
    return { status: true, message: res }
  }catch(e){
    if(e.errors) return { status: false, message: e.errors.map(item => item.message.replace('user.', '')) }

    return { status: false, message: e.message }
  }
}

async function read(){ 
  return await User.findAll({ attributes: { exclude: ['clave_usuario'] } })
}

async function update(id_usuario, fields){
  try{
    const res = User.update({ ...fields }, { where: { id_usuario }})
    return { status: true, message: res }
  }catch(e){
    return { status: false, message: e }
  }
}

async function destroy(id_usuario){
  try{
    const res = User.destroy({ where: { id_usuario }})
    return { status: true, message: res }
  }catch(e){
    return { status: false, message: e }
  }
}

async function login(nombre_usuario, clave_usuario){
  try{
    const user = await User.findOne({ where: { nombre_usuario }})
    if(!user) throw 'Usuario y/o contraseña incorrectos'

    const res = await compare(clave_usuario, user.clave_usuario)
    if(!res) throw 'Usuario y/o contraseña incorrectos'

    const data = {
      user: user.nombre_usuario,
      id: user.id_usuario
    }
    const token = await sign(data)

    return { status: true, message: { token } }
  }catch(e){
    return { status: false, message: e }
  }
}

module.exports = {
  create,
  read,
  update,
  destroy,
  login
}