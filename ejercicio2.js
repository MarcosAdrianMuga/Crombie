const alumnos = [{nombre: "hola", nota: 3},{nombre: "hola2", nota: 10},{nombre: "hola3", nota: 10},{nombre: "hola4", nota: 0}]

var menor = alumnos[0]
var mayor = alumnos.filter(a => a.nota===10)

alumnos.forEach((e) => {
    if (e.nota < menor.nota) {
        menor = e
    }
})

console.log(mayor, menor);

var mayusculas = []
var string = "LaCrOmbiNeTa"

for(let i = 0; i < string.length; i++) {
    if(string[i] === string[i].toUpperCase()) {
        mayusculas.push(string[i])
    }
}
    

console.log(mayusculas);
