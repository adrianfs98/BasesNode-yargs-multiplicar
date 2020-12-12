//*normalmente al inicio ponemos todos los requires al inicio 
const {
    argv
} = require('./config/yargs')

//?esto que acabamos hacer del const {} se llama desestructuracion
const {
    crearArchivo,
    listarTabla
} = require('./multiplicar/mult.js')



//* Cuando subimos nuestra app a un hosting o  alguien no le pasamos la carpeta node modules, pero si el package.json ya que cuando reciba la app, si escribe en linea de comandos, dentro de la carpeta de la app claro, npm install gracias a que ve las depedencias que hay en el package.json se crea la carpeta node modules

//?tenemos varios tipos de require( mejor dicho tenemos distinitos tipos de modulos, de los cuales podemos hacer require). Ver los apuntes de Javier t1 para mas detalles i saber el nombre correcto, ademas de mas detalle, por ejemplo de los modulos de tipo libreria

//?requires
//*este tipo de modulo importado es de tipo core, es un fichero(libreria) que viene preinstalado en node
//const fs = require('fs')

//*modulo de tipo libreria, no es una libreria nativa de node, lo instalaremos(con npm normalmete) y lo importaremos asi-->Para mas detalles ver aputes de  Javier
//const express= require('express')

//*modulos de tipo fiuchero estos son ficheros nuestros de nuestra app, que queremos importarlo para usar algun metodo, por ejemplo
//const myjs=require('./myjs')



//*hay varios objetos que estan en node de forma nativa, como es el caso de process, argv muestra los paramentros que se han introducido como parametro
console.log(argv)
let pcomando = argv._[0]

console.log(pcomando)

switch (pcomando) {
    case 'listar':

        listarTabla(argv.base, argv.limite)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        break;
    case 'crear':


        crearArchivo(argv.base, argv.limite)
            .then(res => console.log(res))
            .catch(err => console.log(err))

        break

    default:
        console.log(`error el comando que ha introducido no es valido`)
        break;
}

//console.log(argv2)
// let paramUser = argv[2]
//*split nos separa un srtring por un caracter y los pone en un arreglo, para mas opciones ver documentacion
//let parambase = paramUser.split('=')[1]
//console.log(parambase)