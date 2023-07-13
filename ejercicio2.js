//Ejercicio 1
const alumnos = [{nombre: "hola", nota: 3},{nombre: "hola2", nota: 10},{nombre: "hola3", nota: 10},{nombre: "hola4", nota: 0}]

var menor = alumnos[0]
var mayor = alumnos.filter(a => a.nota===10)

alumnos.forEach((e) => {
    if (e.nota < menor.nota) {
        menor = e
    }
})

// console.log(mayor, menor);

//Ejercicio 2 

const numeros = [5,3,7,1,6,9,8,2,4]

function ordenar(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }

//   console.log(ordenar(numeros));
  
//Ejercicio 3
var mayusculas = []
var string = "LaCrOmbiNeTa"

for(let i = 0; i < string.length; i++) {
    if(string[i] === string[i].toUpperCase()) {
        mayusculas.push(string[i])
    }
}
    
// console.log(mayusculas);

//Tarea extra 😭
//Ejercicio 1

function esEntero (num) {
    if(Number.isInteger(num)) {
        console.log("Es entero!!");
    } else {
        console.log("No es un numero entero :(");
    }
}

// console.log(esEntero(3), esEntero(5.3));

//Ejercicio 2

function multiplicArray (arr) {
    return arr.map((e) => e*5)
}

// console.log(multiplicArray([1,2,3,4,5,6]));

//Ejercicio 3

function promedio(arr,inicio,fin) {
    var suma = 0;
    for(let i = inicio-1 ; i < fin; i++) {
        console.log(arr[i]);
        suma += arr[i];
    }
    console.log(suma);
    return suma / (fin - inicio);
}

// console.log(promedio([1,2,3,4,5,6,7,8,9,10],5,10));

//Ejercicio 4

function palindromoCheck(str) {
    //1) normalize("NFD"): Se normaliza el string para descomponer los caracteres 
    //2) replace(/[\u0300-\u036f]/g, ""): Se eliminan los caracteres diacríticos (acentos) del string.
    //3) replace(/[^\w\s]/gi, ""): Se eliminan todos los caracteres que no son letras, números, ni espacios en blanco.
    //4) toLowerCase(): Se convierten todas las letras a minúsculas.
    //5) replace(/\s/g, ""): Se eliminan los espacios en blanco.
    var limpito = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s]/gi, "").toLowerCase().replace(/\s/g, "")

    //1) split(""): Se divide el string en un array de caracteres.
    //2) reverse(): Se invierte el orden de los elementos en el array.
    //3) join(""): Se unen los caracteres del array en un nuevo string.
    var alReves = limpito.split("").reverse().join("");
    return limpito === alReves

  }
  //Comento para no olvidarme lo que hace cada cosa porque estuve 3 horas

//   console.log(palindromoCheck("¿Acaso hubo búhos acá?"))

//Ejercicio 5 

function validator(email, password, description) {
    if(!email.includes("@") && !email.includes(".com")){
        console.log('Error: El email debe contener "@" y terminar en ".com"');
        return;
    }
    //!/[A-Z]/.test(password): Verifica si la contraseña no contiene al menos una letra mayúscula.
    //El método .test() es una función que se utiliza en JavaScript para evaluar una expresión regular en una cadena de texto y devuelve true o false dependiendo si la expresión regular encuentra una coincidencia o no.
    if(password.length < 8 || password.length > 16 || !/[A-Z]/.test(password)) {
        console.log('Error: La contraseña debe tener entre 8 y 16 caracteres y contener al menos una mayúscula');
        return
    }
    if (description.length > 400 || description.includes('-')) {
        console.log('Error: La descripción no puede tener más de 400 caracteres ni contener guiones (-)');
        return;
      }

    return console.log("Registro exitoso!!");
}

// console.log(validator("pepe@ad.com","aaaaaaAaa","chau"));