const { 
    DIAGONAL_1X9,
    DIAGONAL_3X7,
    PRIMEIRA_FILEIRA_HORIZONTAL,
    SEGUNDA_FILEIRA_HORIZONTAL,
    TERCEIRA_FILEIRA_HORIZONTAL,
    PRIMEIRA_FILEIRA_VERTICAL,
    SEGUNDA_FILEIRA_VERTICAL,
    TERCEIRA_FILEIRA_VERTICAL
} = require('../../../regras')

class ValidadorJogadas {

    constructor (validadorJogada) {
        this.validadorJogada = validadorJogada
        this.jogadas = [
            DIAGONAL_1X9,
            DIAGONAL_3X7,
            PRIMEIRA_FILEIRA_HORIZONTAL,
            SEGUNDA_FILEIRA_HORIZONTAL,
            TERCEIRA_FILEIRA_HORIZONTAL,
            PRIMEIRA_FILEIRA_VERTICAL,
            SEGUNDA_FILEIRA_VERTICAL,
            TERCEIRA_FILEIRA_VERTICAL
        ]
    }

    validar (posicoesJaJogadas, quadroVelha, simbolo)  {
        for (const jogada of this.jogadas) {
            const validacao = this.validadorJogada.validar(posicoesJaJogadas, simbolo, quadroVelha, jogada)
            if (validacao) {
                return validacao
            }
        }
    }
}

module.exports = ValidadorJogadas