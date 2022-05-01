// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:

  //aqui usare .split para separar la primera letra del nombre en una

  var mayus = nombre.charAt(0).toUpperCase() + nombre.slice(1);
  return mayus;

  // otras formas:

  //var mayus = nombre[0].toUpperCase() + nombre.slice(1);
  //return mayus;

  //var mayuscula = nombre.split("") ...separa la primera letra
  //mayuscula[0] =mayuscula[0].toUpperCase() ... la vuelve mayuscula 
  //return mayuscula.join("")

  //var letraMayus = nombre[0].toUpperCase();   ...tome la primera letra del nombre y la volvi mayuscula
  //var restodelapalabra = nombre.slice(1);  ... "slice(1)" quiere decir que tome el resto del nombre desde la posicion 1 
  //return letraMayus + restodelapalabra;   
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:

  cb()

  //cb(cb);
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:

  var suma = numeros.reduce(function (ac, el) { return ac + el }, 0)
  cb(suma)
  // coloque 0 porque el "ac" o acumulador comenzara en 0 , 
  // "el" es el elemento
  //   numeros=[1,2,3,4]
  // el = 1  +  ac = 0 => 1
  // el = 2  +  ac = 1 => 3
  // el = 3  +  ac = 3 => 6
  // el = 4  +  ac = 6 => 10

  // tmb puede ser asi:
  /* 
   var suma = numeros.reduce((ac, el) => ac + el , 0);
   cb(suma)

   lo cual resume esto:

   var suma = 0
    for (var i = 0; i < numeros.length; i++) {
     suma = suma + numeros[i]}
   cb(suma)

  */
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:

  // [1,2,3,4,5]
  /* for (var i = 0; i < array.length; i++) {return }
  esto es lo mismo que forEach (es el resumen de lo de arriba osea del for) , 
  itera sobre los elementos sin devolverte nada 
  a menos que le mandes un return */

  array.forEach(function (elemento) { cb(elemento) })

  // o así:
  // array.forEach((elemento) => cb(elemento));

}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:

  return array.map(function (elemento) { return cb(elemento) })

  /* tmb puede ser asi:
  let newArray = array.map(function (elemento) { return cb(elemento) })
  return newArray */
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:

  return array.filter(function (element) { return element[0] === "a"; })

 /* tmb puede ser asi:
  let newArray2 = array.filter(function (element) { return element[0] === "a"; })
  return newArray2; */
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
