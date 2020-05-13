const bcrypt = require('bcryptjs')

async function encrypt(pass){
  const salt = await bcrypt.genSalt(10)
  return await  bcrypt.hashSync(pass, salt)
}

async function compare(pass, hash){
  return bcrypt.compare(pass, hash)
}

module.exports = {
  encrypt,
  compare
}