const jwt = require('jsonwebtoken')
const privateKey = 'S3cr3tK3y'

async function sign(data){
  console.log({data})
  const token = jwt.sign(data, privateKey, { algorithm: 'RS256', expiresIn: '1d' })
  console.log({data, token})
  return token
}

module.exports = {
  sign
}