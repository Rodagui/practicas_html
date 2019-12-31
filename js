no se necesita declarar tipos de variables

palabra reservada var:

var nombre; //asi se declara

js no diferencia entre enteros y flotantes

nuevas variables sin usar var --> mala practica 


/----- primer programa ------/

var nombre;
nombre="Kathia";

var edad=22;
document.querySelector("body").innerHTML = "Hola "+ nombre;

console.log(edad);


/_______________________________________________________/
funciones

console.log(esPar(3));

function esPar(numero){
  if(numero % 2 ==0){
    return true;
  }
  return false;
}


_______ biblioteca Math

console.log(Math.round(0.9));
console.log(Math.pow(2,3));

/________________________/
cadenas

console.log(cadena.length); /*tamaño*/
}
