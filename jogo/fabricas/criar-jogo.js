const Jogo = require('../../componentes/jogo')
const CampoJogo = require('../../componentes/campo-jogo')

let jogo = null

const criarJogo = (jogador1, jogador2) => {
    jogo = new Jogo(jogador1, jogador2, CampoJogo)
    return jogo
}

const reiniciarJogo = () => {
    if (jogo) {
        while (true) {
            if(jogo.voltarAoMenuPrincipal()) {
                jogo.menuPrincipal = false
                return true
            }
            return false
        }
    }

    return false
}

module.exports = {
    criarJogo,
    reiniciarJogo
}