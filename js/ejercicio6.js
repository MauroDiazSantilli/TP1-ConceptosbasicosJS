var numero1 = parseInt(prompt("Ingrese un número:"));
var numero2 = parseInt(prompt("Ingrese otro numero:"));

if (numero1 > numero2) {
  document.write("El numero mayor es: " + numero1);
} else if (numero2 > numero1) {
  document.write("El numero mayor es: " + numero2);
} else {
  document.write("Los numeros son iguales");
}
