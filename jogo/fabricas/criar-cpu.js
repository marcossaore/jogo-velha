const CPU = require('../../componentes/cpu')
const IANivel1 = require('../../inteligencia-artificial/nivel-1/ia-nivel-1')
const IANivel2 = require('../../inteligencia-artificial/nivel-2/ia-nivel-2')
const { obterRoboAleatorio } = require('../../utils')

const criarCpuNivel1 = () => {
    return new CPU(obterRoboAleatorio(), 'O', new IANivel1())
}

const criarCpuNivel2 = () => {
    return new CPU(obterRoboAleatorio(), 'O', new IANivel2())
}

module.exports = {
    criarCpuNivel1,
    criarCpuNivel2
}
