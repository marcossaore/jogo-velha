class ValidadorPossibilidadesDefesa {

    validar (posicoesJaJogadas, campoJogo, simbolo, jogada) {

        this.campoJogo = campoJogo

        this.todasAsPosicoesDoQuadro = this.campoJogo.obterTodasPosicoes()

        let possibilidadeDeVitoriaAdversario = 0

        for (const posicaoJaJogada of posicoesJaJogadas) {

            if ( 
                posicaoJaJogada === jogada[0] ||
                posicaoJaJogada === jogada[1] ||
                posicaoJaJogada === jogada[2]
            ) {

                if (possibilidadeDeVitoriaAdversario === 2) {
                    break;
                }

                possibilidadeDeVitoriaAdversario++
            }
        }

        if (possibilidadeDeVitoriaAdversario < 2) {
            return false;
        }

        const status = {
            jogadasParaGanhar: 3,
            jogadasAdversario: 0,
            jogadas: []
        }

        for (const posicao of jogada) {
            const posicaoQuadro = this.todasAsPosicoesDoQuadro[posicao]

            if ( posicaoQuadro && posicaoQuadro !== simbolo) {

                status.jogadasParaGanhar--
        
                status.jogadas.push({
                    posicao: posicao,
                    simboloPosicao: this.todasAsPosicoesDoQuadro[posicao]
                })
            }else {

                if (posicaoQuadro === simbolo) {
                    status.jogadasAdversario++

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

module.exports = ValidadorPossibilidadesDefesa