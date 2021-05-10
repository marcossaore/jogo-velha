const { 
    DIAGONAL_1X9,
    DIAGONAL_3X7,
    PRIMEIRA_FILEIRA_HORIZONTAL,
    SEGUNDA_FILEIRA_HORIZONTAL,
    TERCEIRA_FILEIRA_HORIZONTAL,
    PRIMEIRA_FILEIRA_VERTICAL,
    SEGUNDA_FILEIRA_VERTICAL,
    TERCEIRA_FILEIRA_VERTICAL
} = require("./jogadas-possiveis")

class ValidarJogadasVencedoras {

    constructor () {
        this.jogadasParaValidar = [
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

    validar (simbolo, posicoesDoQuadro) {
        for (const jogadaParaValidar of this.jogadasParaValidar) {
            const posicao1 = jogadaParaValidar[0]
            const posicao2 = jogadaParaValidar[1]
            const posicao3 = jogadaParaValidar[2]
            const jogadaValidar = [posicoesDoQuadro[posicao1], posicoesDoQuadro[posicao2], posicoesDoQuadro[posicao3]]
            if (this.jogadaEhVencedora(simbolo, jogadaValidar)) {
                return true
            }
        }
    }

    jogadaEhVencedora (simbolo, jogada) {
        const jogoVerificado = jogada.filter((jogada) => {
            return jogada === simbolo
        })
        return jogoVerificado.length === 3
    }
}

module.exports = ValidarJogadasVencedoras