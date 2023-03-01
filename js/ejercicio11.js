let numero = parseInt(prompt("Ingrese un numero"));

if (numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0 || numero % 7 == 0){

}

if (numero % 2 == 0){
    document.write("El numero es divisible por 2");
}
if (numero % 3 == 0){
    document.write("El numero es divisible por 3");
}
if (numero % 5 == 0){
    document.write("El numero es divisible por 5");
}
if (numero % 7 == 0){
    document.write("El numero es divisible por 7");
}
else{
    document.write("El numero no es divisible ni por 2, ni 3, ni 5 ni 7")
}