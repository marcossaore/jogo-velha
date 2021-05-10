const { criarJogador } = require('./criar-jogador')
const { criarCpuNivel1, criarCpuNivel2 } = require('./criar-cpu')
const { criarJogo, reiniciarJogo } = require("./criar-jogo")

module.exports = {
    criarJogador,
    criarCpuNivel1,
    criarCpuNivel2,
    criarJogo,
    reiniciarJogo
}