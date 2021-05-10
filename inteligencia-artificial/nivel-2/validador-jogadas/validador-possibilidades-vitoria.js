class ValidadorPossibilidadesVitoria {

    validar (posicoesJaJogadas, quadroVelha, simbolo, jogada) {

        this.quadroVelha = quadroVelha

        this.todasAsPosicoesDoQuadro = this.quadroVelha.obterTodasPosicoes()

        let possibilidadeDeVitoria = 0

        for (const posicaoJaJogada of posicoesJaJogadas) {
            if ( 
                posicaoJaJogada == jogada[0] ||
                posicaoJaJogada == jogada[1] ||
                posicaoJaJogada == jogada[2]
            ) {

                if (possibilidadeDeVitoria >= 1) {
                    break;
                }

                possibilidadeDeVitoria++
            }
        }

        if (possibilidadeDeVitoria === 0) {
            return false;
        }

        let status = {
            jogadasParaGanhar: 3,
            jogadasAdversario: 0,
            jogadas: []
        }

        for (const posicao of jogada) {
            const posicaoQuadro = this.todasAsPosicoesDoQuadro[posicao]

            if (posicaoQuadro && posicaoQuadro === simbolo) {
                status.jogadasParaGanhar -= 1

                status.jogadas.push({
                    posicao: posicao,
                    simboloPosicao: this.todasAsPosicoesDoQuadro[posicao]
                })
            }else {

                if (posicaoQuadro && posicaoQuadro !== simbolo){
                    status.jogadasAdversario += 1

                    status.jogadas.push({
                        posicao: posicao,
                        simboloPosicao: this.todasAsPosicoesDoQuadro[posicao]
                    })
                }else {
                    status.jogadas.push({
                        posicao: posicao,
                        simboloPosicao: this.todasAsPosicoesDoQuadro[posicao]
                    })
                }
            }
        }

        if (status.jogadasAdversario === 0) {
            return {
                jogadasParaGanhar: status.jogadasParaGanhar,
                jogadas: status.jogadas,
                jogadasAdversario: status.jogadasAdversario
            }
        }
    }
}

module.exports = ValidadorPossibilidadesVitoria