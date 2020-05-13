const jwt = require('jsonwebtoken')
const privateKey = 'S3cr3tK3y'

async function sign(data){
  return new Promise((resolve, reject) => {
    jwt.sign(data, privateKey, { expiresIn: '1d' }, (err, token) => {
      if(!err) resolve(token)
      else reject(err)
    })
  })
}

module.exports = {
  sign
}