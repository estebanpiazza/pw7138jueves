/*Javascript: variables, tipos de datos (variable, constante, array, objeto), operadores logicos y matematicos, funciones*/

// Variable: espacio reservado en memoria con un identificador
// nombre = "Esteban"
// deprecada / obsoleta  ( var ) - alcance (scope)
let nombre = "Esteban";
// C int edad = 18 , str nombre = "esteban", bool verdadero = True
let edad = 18; let verdadero = true; let pi = 3.1415;
//declaro
let a,b,c;
// doy valor
a = 1;

const pi2 = 3.14

console.log("Hola mundo")

const ARRAY1 = [1,"Esteban",true];
ARRAY1.push(2)
console.log(ARRAY1)
console.log(ARRAY1[5])


let estudiante1 = {
    nombre:"Lucia", // propiedad
    edad: 23,
    adeuda:false,
//medotos
    cumplirAnios : function(){
        diaymes = "20/07"
        estudiante1.edad = estudiante1.edad + 1
    }
}
console.log(estudiante1.nombre)
estudiante1.cumplirAnios()
/********************************************************/
//operadores logicos y matematicos
//operadores matematicos
console.log(1+1) //suma
console.log("esteban"+"piazza") //concatena
console.log("esteban"+1)
console.log("1"+1)
console.log("1"-1)
console.log("esteban"-1)
console.log(1*2)
console.log(10/2)//5
console.log(10%2)//0
console.log(11%2)//1
console.log(2**3)//potencia

// < > <= >= == != && ||
console.log(10<=10)
console.log(10==10)
//comparacion debil
console.log("10"==10) // valor
//comparacion estricta
console.log("10"===10) // valor y tipo de dato
console.log("10"!= 10)
console.log("10"!==10)
console.log("perro" && "gato")
console.log("perro" || "gato")

// funciones

//declarando la función
function saludar(){
    console.log("Hola mundo")
}
//invocar
saludar()

function duplicar(n){ //parametro
    let resultado = n*2
    return resultado
    //return n*2
}
console.log(duplicar(4))


let dividirPor2 = function (n){ return n/2}
console.log(dividirPor2(10))

//funcion flecha
let tripilicar = n => n*3 // flecha =>
console.log(tripilicar(3))
function mostrarResultado (funcion){
    console.log(funcion)
}
mostrarResultado(duplicar(5))

