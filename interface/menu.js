const { criarJogo, reiniciarJogo, criarJogador, criarCpuNivel1, criarCpuNivel2 } = require('../jogo/fabricas')
const { criarQuestaoERetornarResposta, limparTela } = require('../utils/index')

class Menu {
    static async iniciar () {
        const selecaoJogo = await this.exibirEObterOpcoesDoJogo()
        const jogadores = await this.selecionarJogadores(selecaoJogo)
        const jogo = criarJogo(jogadores[0], jogadores[1])
        await jogo.iniciar()

        if (reiniciarJogo()) {
            await this.iniciar()
        }
    }

    static async exibirEObterOpcoesDoJogo () {
        let selecaoJogo = await criarQuestaoERetornarResposta(
            `Digite as opções:
            1 - Modo Dois Jogadores
            2 - Contra a máquina: Fácil
            3 - Contra a máquina: Difícil: `,
        )

        while (!selecaoJogo.match(/\b[1-3]{1}\b/)) {
            console.clear()
            selecaoJogo = await criarQuestaoERetornarResposta(
                `As opções válidas são somente:
                1 - Modo Dois Jogadores
                2 - Contra a máquina: Fácil
                3 - Contra a máquina: Difícil: `
            )
        }

        return selecaoJogo
    }

    static async selecionarJogadores (selecaoJogo) {
        if (selecaoJogo == '1') {
            const nomeJogador1 = await criarQuestaoERetornarResposta('Insira o nome do primeiro jogador: ')
            limparTela()
    
            const jogador1 = criarJogador(nomeJogador1, 'X')
            
            const nomeJogador2 = await criarQuestaoERetornarResposta('Insira o nome do segundo jogador: ')
            limparTela()
            
            const jogador2 = criarJogador(nomeJogador2, 'O')

            return [
                jogador1,
                jogador2
            ]
        }
    
        if (selecaoJogo == '2') {
            const nomeJogador = await criarQuestaoERetornarResposta('Insira seu nome: ')
            
            const jogador1 = criarJogador(nomeJogador, 'X')
            const  jogador2 = criarCpuNivel1()

            return [
                jogador1,
                jogador2
            ]
        }
    
        const nomeJogador = await criarQuestaoERetornarResposta('Insira seu nome: ')
        const jogador1 = criarJogador(nomeJogador, 'X')
        const jogador2 = criarCpuNivel2()
    
        return [
            jogador1,
            jogador2
        ]
    }
} 

module.exports = Menu