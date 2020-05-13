const { verify } = require('./jsonwebtoken')

const extractToken = (authorization) => {
  return (authorization && authorization.split(' ')[0] === 'Bearer') ? authorization.split(' ')[1] : ''
}

async function verifyToken(headers, { req, res, next }){
  if(!headers.authorization) res.status(403).json({ status: false, message: 'Token is missed' })
  else{
    const token = extractToken(headers.authorization)
    const decode = await verify(token)
    return (typeof decode === 'object') ? next() : res.status(403).json({ status: false, message: decode })
  }
}

module.exports = {
  verifyToken
}