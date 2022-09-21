import getTipoTriangulo from '../src/index';

describe('verificar si el triangulo puede ser equilatero, escaleno, isoceles o si no es un triangulo', function () {

  test('verificar si el triangulo es Equilatero', function () {
    expect(getTipoTriangulo(5,5,5)).toBe(1);
  });

  test('verificar si el triangulo es Escaleno', function () {
    expect(getTipoTriangulo(4,5,6)).toBe(3);
  });

  test('verificar si el triangulo es Isoceles', function () {
    expect(getTipoTriangulo(4,7,7)).toBe(2);
  });

  test('verificar si el triangulo es Isoceles', function () {
    expect(getTipoTriangulo(7,7,5)).toBe(2);
  });

  test('verificar si el triangulo no existe', function () {
    expect(getTipoTriangulo(1,1,2)).toBe(0);
  });

});
