const JwtService = require('./JwtService');

describe('JwtService', () => {
  const secretKey = 'secreto';
  const jwtService = new JwtService(secretKey);

  it('debería generar y verificar un token correctamente', () => {
    const payload = { userId: 1, email: 'usuario@example.com' };
    const token = jwtService.generateToken(payload);
    expect(token).toBeDefined();

    const decodedPayload = jwtService.verifyToken(token);
    expect(decodedPayload.userId).toBe(payload.userId);
    expect(decodedPayload.email).toBe(payload.email);
  });

  it('debería lanzar un error al verificar un token inválido', () => {
    const token = 'tokenInvalido';
    expect(() => jwtService.verifyToken(token)).toThrowError('Token inválido');
  });
});
