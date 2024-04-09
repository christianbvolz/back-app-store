const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const generateToken = (payload) => {
  const Token = jwt.sign(payload, secret, {
    algorithm: 'HS256',
  });
  return Token;
};

const verifyToken = (token) => {
  try {
    const result = jwt.verify(token, secret);
    return result;
  } catch (_error) {
    return false;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};