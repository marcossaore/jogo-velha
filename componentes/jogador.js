const { criarQuestaoERetornarResposta } = require('../utils/index')
class Jogador {

    constructor (nome, simbolo) {
        this.nome = nome
        this.simbolo = simbolo
        this.tipo = 'humano'
    }

    async fazerJogada (campoJogo) {

        let jogada = await criarQuestaoERetornarResposta('')
            
        while (!jogada.match(/\b[1-9]{1}\b/)) {
            jogada = await criarQuestaoERetornarResposta(`${this.nome} Você deve digitar um numero de 1 a 9:\n`)
        }

        let jogadaJaMarcadoNoCampo =  campoJogo.jogadaJaMarcadoNoCampo(jogada)
    
        while (!jogadaJaMarcadoNoCampo) {
            jogada = await criarQuestaoERetornarResposta(`${this.nome} digite um numero de 1 a 9 (que não esteja marcado):\n`)
            jogadaJaMarcadoNoCampo = campoJogo.jogadaJaMarcadoNoCampo(jogada)
        }

        return jogada
    }

    getNome () {
        return this.nome
    }

    getSimbolo () {
        return this.simbolo
    }
}

module.exports = Jogador