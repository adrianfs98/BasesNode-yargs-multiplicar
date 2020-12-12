//*este tipo de modulo importado es de tipo core, es un fichero(libreria) que viene preinstalado en node
const {
    error
} = require('console')
const fs = require('fs')
const {
    resolve
} = require('path')



let crearArchivo = (base, lim) => {
    return new Promise((resolve, reject) => {
        //sino es un numero lo que nos pasan por parametro
        if (!Number(base)) {
            //?podemos usar throw en vez de reject y asi nos ahorramos el return?
            throw ('Error, el parametro intruducido no es un numero')
            //*hay que recordar que despues del reject sigue el flujo de la app, asi que debemos hacer un return
        }

        //? en caso de que el usuario no introduzca un  limite en el yargs esta controlado para que si el usuario no define un limite por defecto sea 10 POR ESO NO HACEMOS COMPROBACION 
        let data = ""

        for (let i = 0; i <= lim; i++) {
            data += `${base}*${i} = ${base * i}\n`
        }
        //*fs hace referencia al nombre de la variable que holds el paquete fs importado
        //*podemos especificar el path donde quieremos que se guarde el archivo creado
        fs.writeFile(`tablas/tabla del ${base} con limite ${lim}`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla del ${base} con limite ${lim} creada`);
            }
        });
    })
}

let listarTabla = (base, limite) => {
    console.log(`el limite es ${limite}`)
    //*la base ya comprueba si se ha introducido el yargs

    //*? no hacia falta jugar con promesas y escribir el resuktado en una variable ya que console logs hubiera estado ok, pero queria probar las promesas
    return new Promise((resolve, reject) => {
        let data = ''
        for (let i = 0; i <= limite; i++) {

            data = data + `${base}*${i} = ${base * i}\n`
        }
        if (data != undefined) {
            resolve(data)
        } else {
            reject(error)
        }
    })


}

//*el exports espera un objeto con nuestras funcionalidades y podemos exportrlas de varias formas
module.exports = {

    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}