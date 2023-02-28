let numero1 = parseInt(prompt("Ingrese el primer número:"));
let numero2 = parseInt(prompt("Ingrese el segundo numero:"));
let numero3 = parseInt(prompt("Ingrese el tercer numero:"));

if
(numero1 > numero2 && numero1 > numero3){
    document.write("El numero mayor es: " + numero1);
}
else if
(numero2 > numero1 && numero2 > numero3){
    document.write("El numero mayor es: " + numero2);
}
else if
(numero3 > numero1 && numero3 > numero2){
    document.write("El numero mayor es: " + numero3);
}
else{
    document.write("Los numeros son iguales")
}