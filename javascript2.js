//Javascript:   array de objetos literales y metodos sobre los mismos 

let arrayDeObjetos = [
    {nombre:"Conrado",edad:18},
{nombre:"Steve",edad:25},
{nombre:"Esteban",edad:31},
]

console.table(arrayDeObjetos)

function aumentarEdad(array){
    for (let i = 0; i < array.length;i++){
        array[i].edad += 1
    }

}

function filtrarViejos (array){
    let filtrados = []
    for(let i = 0;i<array.length;i++){
        if(array[i].edad >= 25){
            filtrados.push(array[i])
        }
    }
    return filtrados
}

aumentarEdad(arrayDeObjetos)

console.table(arrayDeObjetos)

let listaFiltrada = filtrarViejos(arrayDeObjetos)
console.table(listaFiltrada)

// localstorage

//dato = document.getElementById("inputNombre").value

//localStorage.setItem("nombreJugador", dato)

//let nombre = localStorage.getItem("nombreJugador")


//prompt (`Hola ${nombre}, ${aumentarEdad(arrayDeObjetos)}, ${2+2}`)//back tick

//localStorage.removeItem("nombreJugador")
//localStorage.clear()


// formsubmitter  / librerias 






//JSON y API

let mejorProfesor = {
    nombre: "Steve",
    apellido: "Piazza"
}

console.log(mejorProfesor)
let mejorProfesorJSON = JSON.stringify(mejorProfesor)
console.log(mejorProfesorJSON)
console.log(mejorProfesorJSON.nombre)




/* 
let dolarHoy = JSON.parse("https://pokeapi.co/api/v2/pokemon/ditto")
console.log(dolarHoy) */
fetch("https://dolarapi.com/v1/dolares/blue")
  .then(response => response.json())
  .then(data => console.log(data));
/*



*/