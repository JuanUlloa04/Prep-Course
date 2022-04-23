// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:

  return array[0];
  //       la primera posicion comienza en 0
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:

  /* 
   A     B     C    D <= este es el ultimo elemento)
   0     1     2    3
   el elemento D esta en la posicion 3 */

  return array[array.length - 1];
  //               4          -1  = posicion 3
  //                                   D
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  /* 
     1    2    3    4   ELEMENTOS ANTES 
     2    3    4    5   ELEMENTOS DESPUES  */

  var nuevoArray = []
  for (var i = 0; i < array.length; i++) {
    nuevoArray[i] = array[i] + 1
    //          2         1    + 1
    //          3         2    + 1
    //          4         3    + 1
    //          5         4    + 1 
  }
  return nuevoArray

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  /* array[array.length]=elemento
  return array; */

  array.push(elemento)
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento)
  return array;

}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  return palabras.join(" ")

}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  /* la funcion hace esto, ejemplo:
     1           2         3         4     ¿ existe 3?
  eres 3?     eres 3?    eres 3?
   false       false       true */

  for (var i = 0; i < array.length; i++) {
    if (array[i] === elemento) return true
  }
  return false
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  /*  
   var array = numeros
   var resultado = 0
   for (var i = 0; i < array.length; i++){
     resultado = resultado + array[i]}
   return resultado
   } */

  var resultado = 0
  for (var i = 0; i < numeros.length; i++) {
    resultado = resultado + numeros[i]
  }
  //   1    25   3    18    ELEMENTOS
  //   0    1    2    3     POSICION
  //   1    26   29  "47"=> es LA SUMA de todos los enteros elementos
  return resultado
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  return agregarNumeros(resultadosTest) / resultadosTest.length
  //reutilize la funcion de arriba        / numero de elementos
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  var numeroMayor = numeros[0];
  for (var i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeroMayor) {
      numeroMayor = numeros[i];
    }
  }
  return numeroMayor
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  if (arguments.length === 0) {
    return 0
  }
  if (arguments.length === 1) {
    return arguments[0]
  }
  var producto = 1;
  for (var i = 0; i < arguments.length; i++) {
    producto = producto * arguments[i]
  }
  return producto;
}


function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  var cantidadElementos = 0;
  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18)
      cantidadElementos++;
  }
  return cantidadElementos;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   

  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  } else if (numeroDeDia > 1 || numeroDeDia < 7) {
    return "Es dia Laboral";
  }

}


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. 
  //Debe retornar true si el entero inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  if (n.toString()[0] == 9) {
    return true;
  }
  return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  for (var i = 1; i < arreglo.length; i++) {
    if (arreglo[0] !== arreglo[i]) {
      return false;
    }
  }
  return true;
}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  var nuevoArray = [];

  for (var i = 0; i < array.length; i++) {
    if (
      array[i] === "Enero" ||
      array[i] === "Marzo" ||
      array[i] === "Noviembre"
    ) {
      nuevoArray.push(array[i]);
    }
  }
  if (nuevoArray.length < 3) {
    return "No se encontraron los meses pedidos"
  }
  else {
    return nuevoArray;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  var arrayMayoresACien = [];
  // creé este nuevo array para pushear o mandar aquí los numeros > 100
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      arrayMayoresACien.push(array[i]);
    }
  }
  return arrayMayoresACien;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  var arrayValores = [];
  for (var i = 1; i < 11; i++) {
    numero = numero + 2;
    if (numero === i) { break }
    else { arrayValores.push(numero) }
  }

  if (i < 10) {
    return "Se interrumpió la ejecución";
  } else {
    return arrayValores;
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  var arrayValores = [];
  for (var i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    } else {
      numero = numero + 2;
      arrayValores.push(numero);
    }
  }
  return arrayValores;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
