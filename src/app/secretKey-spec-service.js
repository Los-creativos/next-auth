const SecretKeyService = require('./secretKey-service');
const bcrypt = require('bcrypt');

describe('SecretKeyService', () => {
  const secretKeyService = new SecretKeyService();

  it('should securely generate a secret key', async () => {
    const password = 'contraseña123';
    const hashedPassword = await secretKeyService.generateSecretKey(password);

    expect(hashedPassword).not.toBe(password);

    expect(typeof hashedPassword).toBe('string');

    expect(hashedPassword.length).toBeGreaterThan(0);
  });

  it('you should compare a password with a secret key correctly', async () => {
    const password = 'contraseña123';
    const hashedPassword = await bcrypt.hash(password, 10);

    const isPasswordValid = await secretKeyService.comparePasswordWithSecretKey(password, hashedPassword);
    expect(isPasswordValid).toBe(true);

    const invalidPassword = 'contraseñaIncorrecta';
    const isInvalidPasswordValid = await secretKeyService.comparePasswordWithSecretKey(invalidPassword, hashedPassword);
    expect(isInvalidPasswordValid).toBe(false);
  });
});
