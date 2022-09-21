export default function getTipoTriangulo(a: number, b:number, c:number):number {
  if(a + b > c && b + c > a && a + c > b) {
    // Equilatero
    if (a == b && b == c && a == c) return 1;
    // Isoceles
    if (a == b || b == c || a == c) return 2;
    // Escaleno
    return 3;
  }
  // No es triangulo
  return 0;
}

console.log(getTipoTriangulo(5,5,5));
