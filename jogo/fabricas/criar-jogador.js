const Jogador = require('../../componentes/jogador')
const { obterEmojiAleatorio } = require('../../utils/')

const criarJogador = (nome, simbolo) => {
    return new Jogador(`${obterEmojiAleatorio()} ${nome}`, simbolo)
}

module.exports = {
    criarJogador
}