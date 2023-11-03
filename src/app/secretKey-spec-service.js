const SecretKeyService = require('./SecretKeyService');

describe('SecretKeyService', () => {
  const secretKeyService = new SecretKeyService();

  it('debería generar una clave secreta', () => {
    const secretKey = secretKeyService.generateSecretKey();
    expect(secretKey).toBeDefined();
    expect(typeof secretKey).toBe('string');
    expect(secretKey.length).toBeGreaterThan(0);
  });
});
