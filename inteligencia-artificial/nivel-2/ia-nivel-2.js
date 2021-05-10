const { fabricaValidadorJogadasDefesa, fabricaValidadorJogadasVitoria } = require('./validadores-possibilidades-jogada-fabrica')

class IANivel2 {

    constructor () {
        this.validadorJogadasDefesa = fabricaValidadorJogadasDefesa()
        this.validadorJogadasVitoria = fabricaValidadorJogadasVitoria()
        this.campoJogo = null
    }

    async fazerJogada (campoJogo, simbolo) {
        this.campoJogo = campoJogo
        const cpu = this.obterDadosPossibilidadeVitoriaCPU(simbolo)
        const adversario = this.obterDadosPossibilidadeVitoriaAdversario(simbolo)
        const jogadaCPU = this.obterCalculoJogadaCPU(cpu, adversario)
        return jogadaCPU
    }

    obterDadosPossibilidadeVitoriaCPU (simbolo) {
        const jaForamFeitasJogadasNoJogo = this.campoJogo .jaForamFeitasJogadasNoJogo()
        const minhasPosicoesDeJogadasFeitas = this.campoJogo .obterPosicoesDeJogadasFeitasPorSimbolo(simbolo)
        
        if (!jaForamFeitasJogadasNoJogo || minhasPosicoesDeJogadasFeitas.length === 0) {
            return {
                jogadasParaGanhar: 0
            }
        }

        const possibilidadeDeVitoria = this.validadorJogadasVitoria .validar(minhasPosicoesDeJogadasFeitas, simbolo, this.campoJogo )
        
        if (!possibilidadeDeVitoria) {
            return {
                jogadasParaGanhar: 0
            }
        }
        
        return possibilidadeDeVitoria
    }

    obterDadosPossibilidadeVitoriaAdversario (simbolo) {
        const jaForamFeitasJogadasNoJogo = this.campoJogo.jaForamFeitasJogadasNoJogo()
        const posicoesDeJogadasFeitasPeloAdversário = this.campoJogo.obterPosicoesDeJogadasFeitasDiferenteDeSimbolo(simbolo)

        if (!jaForamFeitasJogadasNoJogo || posicoesDeJogadasFeitasPeloAdversário.length === 0) {
            return {
                jogadasParaGanhar: 0
            }
        }

        const possibilidadeDeVitoriaDoOponente = this.validadorJogadasDefesa.validar(posicoesDeJogadasFeitasPeloAdversário, simbolo, this.campoJogo)

        if (!possibilidadeDeVitoriaDoOponente) {
            return {
                jogadasParaGanhar: 0
            }
        }
        
        return possibilidadeDeVitoriaDoOponente
    }

    obterCalculoJogadaCPU = (cpu, adversario) => {
        const posicoesDisponiveis = this.campoJogo.obterPosicoesDisponiveis()

        if (cpu.jogadasParaGanhar === 0 && adversario.jogadasParaGanhar === 0) {
            return this.campoJogo.fazerJogadaAleatoria()
        }

        if (cpu.jogadasParaGanhar === 1) {
            const posicoesVazias = cpu.jogadas.filter((jogada) => !jogada.simboloPosicao)
            const posicaoDamesa = posicoesDisponiveis.filter(posicaoDisponivel => posicaoDisponivel === (posicoesVazias[0].posicao + 1))
            return posicaoDamesa[0]
        }

        if (adversario.jogadasParaGanhar === 1) {
            const posicoesVazias = adversario.jogadas.filter(jogada => !jogada.simboloPosicao)
            const posicaoDamesa = posicoesDisponiveis.filter(posicaoDisponivel => posicaoDisponivel === (posicoesVazias[0].posicao + 1))
            return posicaoDamesa[0]
        }

        if (cpu.jogadasParaGanhar === 2) {
            const posicoesVazias = cpu.jogadas.filter((jogada) => !jogada.simboloPosicao)
            const posicaoDamesa = posicoesDisponiveis.filter(posicaoDisponivel => posicaoDisponivel === (posicoesVazias[0].posicao + 1))
            return posicaoDamesa[0]
        }
    }


}

module.exports = IANivel2