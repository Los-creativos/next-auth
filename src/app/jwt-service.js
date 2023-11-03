const jwt = require('jsonwebtoken');

class JwtService {
  constructor(secretKey) {
    this.secretKey = secretKey;
  }

  generateToken(payload) {
    return jwt.sign(payload, this.secretKey);
  }

  verifyToken(token) {
    try {
      const decoded = jwt.verify(token, this.secretKey);
      return decoded;
    } catch (error) {
      throw new Error('Token inválido');
    }
  }
}

module.exports = JwtService;
