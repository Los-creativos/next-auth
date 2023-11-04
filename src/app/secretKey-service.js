const bcrypt = require('bcrypt');

class SecretKeyService {
  constructor() {
  }

  async generateSecretKey(password) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  }

  async comparePasswordWithSecretKey(password, secretKey) {
    return await bcrypt.compare(password, secretKey);
  }
}

module.exports = SecretKeyService;
