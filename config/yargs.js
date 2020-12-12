//?El tercer argumento es un objeto en el cual vamos a poner la configuracion de parametros(flags) que el usuario va a escribir por consola

const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', options)

    .command('crear', 'Crea la tabla de multiplicar especificada', options)

    .help()
    .argv

module.exports = {
    argv: argv
}