const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../../config')

// AUTHENTICATION
const restricted = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) { // No token provided
    next({ status: 401, message: 'wat? no token' });
  } else {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) { // Token is invalid
        next({ status: 401, message: `token bad: ${err.message}` });
      } else { // Token is valid
        req.decodedJwt = decoded;
        next();
      }
    });
  }
};


// AUTHORIZATION
const checkRole = role => (req, res, next) => {
  if (req.decodedJwt && req.decodedJwt.role === role) {
    next()
  } else {
    next({ status: 403, message: 'you have no power here!' })
  }
}

module.exports = {
  restricted,
  checkRole,
}
