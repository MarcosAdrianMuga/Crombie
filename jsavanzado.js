const productos = [{nombre: "producto1", inventario: 3, marca: "cunington",precio: 54},{nombre: "producto2", inventario: 70, marca: "ACME",precio: 23123123},{nombre: "producto3", inventario: 0, marca: "tiktok",precio: 1},{nombre: "producto4", inventario: 100, marca: "china",precio: 34}, {nombre: "producto5", inventario: 3, marca: "ACME",precio: 54},]

const productDeLaMarca = (marca) => {
    const filtrado = productos.filter((p) => p.marca === marca)
    return filtrado
}

//console.log(productDeLaMarca("ACME"));

const preciosMasAltos = (precio) => {
    const filtrado = productos.filter((p) => p.precio > precio)
    return filtrado
}

//console.log(preciosMasAltos(20));

const cambiaMarca = (marca, nuevaMarca) => {
    productos.forEach((p) => {
        if(p.marca === marca) {
            p.marca = nuevaMarca;
        }
    })
    console.log(productos);
}

//console.log(cambiaMarca("ACME","milanesa"));

const promMayMen = (array) => {
    var suma = 0
    var promedio = 0

    for (let i = 0; i < array.length; i++) {
        suma+=1
        promedio+=array[i].precio 
    }

    var mayor = array[0]
    var menor = array[0]

    array.forEach((p) => {
        if(p.precio > mayor) {
            mayor = p
        }
        if(p.precio < menor) {
            menor = p
        }
    })

    return console.log("1)" + promedio/suma, "2)" + menor,"3)" + mayor);
}

console.log(promMayMen(productos));