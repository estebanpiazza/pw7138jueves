/*Javascript: variables, tipos de datos (variable, constante, array, objeto), operadores logicos y matematicos, funciones*/

// Variable: espacio reservado en memoria con un identificador
// nombre = "Esteban"
// deprecada / obsoleta  ( var ) - alcance (scope)
let nombre = "Esteban";
// C int edad = 18 , str nombre = "esteban", bool verdadero = True
let edad = 18; let verdadero = true; let pi = 3.1415;
//declaro
let a, b, c;
// doy valor
a = 1;

const pi2 = 3.14

console.log("Hola mundo")

const ARRAY1 = [1, "Esteban", true];
ARRAY1.push(2)
console.log(ARRAY1)
console.log(ARRAY1[5])


let estudiante1 = {
    nombre: "Lucia", // propiedad
    edad: 23,
    adeuda: false,
    //medotos
    cumplirAnios: function () {
        diaymes = "20/07"
        estudiante1.edad = estudiante1.edad + 1
    }
}
console.log(estudiante1.nombre)
estudiante1.cumplirAnios()
/********************************************************/
//operadores logicos y matematicos
//operadores matematicos
console.log(1 + 1) //suma
console.log("esteban" + "piazza") //concatena
console.log("esteban" + 1)
console.log("1" + 1)
console.log("1" - 1)
console.log("esteban" - 1)
console.log(1 * 2)
console.log(10 / 2)//5
console.log(10 % 2)//0
console.log(11 % 2)//1
console.log(2 ** 3)//potencia

// < > <= >= == != && ||
console.log(10 <= 10)
console.log(10 == 10)
//comparacion debil
console.log("10" == 10) // valor
//comparacion estricta
console.log("10" === 10) // valor y tipo de dato
console.log("10" != 10)
console.log("10" !== 10)
console.log("perro" && "gato")
console.log("perro" || "gato")

// funciones

//declarando la función
function saludar() {
    console.log("Hola mundo")
}
//invocar
saludar()

function duplicar(n) { //parametro
    let resultado = n * 2
    return resultado
    //return n*2
}
console.log(duplicar(4))


let dividirPor2 = function (n) { return n / 2 }
console.log(dividirPor2(10))

//funcion flecha
let tripilicar = n => n * 3 // flecha =>
console.log(tripilicar(3))
function mostrarResultado(funcion) {
    console.log(funcion)
}
mostrarResultado(duplicar(5))

/*
Javascript: estructura if, else if, 
estructura for, 
*/
function dejarPasar(edad) {
    if (edad >= 18) {
        console.log("dejar pasar")
    } else {
        console.log("no dejar pasar")
    }
}

dejarPasar(19)
dejarPasar(17)

function montaniaRusa(altura, acompaniado) {
    //si mide mas de 1.70 puede pasar, si mide menos de 1.70 no puede pasar, a menos que este acompañado
    if (altura >= 1.70) { 
        console.log("Puede pasar") 
    } else if (acompaniado) {
        console.log("Puede pasar")
    } else {
        console.log("no puede pasar")
    }
}


montaniaRusa(1.70, false)
montaniaRusa(1.69, true)
montaniaRusa(1.69, false)


// for 
function contarHasta10(){
    // for ( variable de iteracion; condicion; variación)
    for ( let i = 0; i<10; i++ ){
        console.log(i)
    }
}

contarHasta10()


notasParcialEstudiantes = [1,2,3,4,5,6]

//len(notasParcialEstudiantes)
function duplicarNotas(array){
    for ( let i = 0; i<array.length; i++ ){
        array[i] = array[i]*2
    }
return array
}

//console.log(duplicarNotas(notasParcialEstudiantes))


function duplicarNotas(array){
    let array2 =[]
    for ( let i = 0; i<array.length; i++ ){
        array2[i] = array[i]*2
    }
return array2
}

let notasDuplicadas = duplicarNotas(notasParcialEstudiantes)
console.log(notasParcialEstudiantes)
console.log(notasDuplicadas)


/*
metodos de arrays

*/

notasDuplicadas.push(45)
console.log(notasDuplicadas)
notasDuplicadas.pop()
console.log(notasDuplicadas)

notasDuplicadas.shift()
//notasDuplicadas.unshift(10)
console.log(notasDuplicadas)
console.log(notasDuplicadas.indexOf("Esteban"))

function indiceDe (array,elementoBuscado){
    for(let i = 0; i<array.length;i++){
        if(array[i] === elementoBuscado){
            return i
        }
    }
    return -1
}

console.log(indiceDe(notasDuplicadas,12))

let inflacion = [10,20,30,40,50]
let inflacionAcumulada = inflacion.reduce( (accumulator, currentValue) => accumulator + currentValue)
console.log(inflacionAcumulada)

function reducirSumando(array){
    let resultado;
    for (let i = 0; i<array.length;i++){
        resultado = resultado + array[i]
    }
    return resultado;
}

/************************************************** */

let estudiantes = [
    {nombre:"Conrado",
edad: 19,},
{nombre:"Santino",
edad:22},
]

console.table(estudiantes)
function cambiarEdadmas1(arrayDeObjetos){
    for (let i = 0; i<arrayDeObjetos.length;i++){
        arrayDeObjetos[i].edad += 1
    }
    return arrayDeObjetos
}

console.table(cambiarEdadmas1(estudiantes))


/********manejo de DOM **********/






