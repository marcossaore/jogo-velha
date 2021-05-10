const { criarQuestaoERetornarResposta, limparTela, mostrarNaTela } = require('../utils/index')

class Jogo {
    constructor (jogador1, jogador2, campoJogo) {
        this.jogador1 = jogador1
        this.jogador2 = jogador2
        this.menuPrincipal = false
        this.campoJogo = campoJogo
    }

    async iniciar () {
        const embaralharJogadores = Math.floor(Math.random() * 10) % 2 == 0 ? [ this.jogador1, this.jogador2 ] : [ this.jogador2 , this.jogador1] 
        await this.proximaJogada(embaralharJogadores[0], embaralharJogadores[1])
    }

    async proximaJogada(jogadorJogando, proximoJogadorAjogar) {
        limparTela()
                
        mostrarNaTela(`${jogadorJogando.getNome()} é a sua vez, digite um numero de 1 a 9:\n`)
    
        this.campoJogo.exibirCampo()

        const jogada = await jogadorJogando.fazerJogada(this.campoJogo)

        this.campoJogo.atualizarCampo(jogada, jogadorJogando.getSimbolo())
    
        this.campoJogo.exibirCampo()
    
        if (this.campoJogo.conferirJogoParaSimbolo(jogadorJogando.getSimbolo())) {
            limparTela()
            this.campoJogo.exibirCampo()
            mostrarNaTela(jogadorJogando.getNome(), ' venceu!')
            await this.jogarOutraPartida()
            return
        }
    
        if (this.campoJogo.deuVelha()) {
            limparTela()
            mostrarNaTela('Vish deu velha!')
            await this.jogarOutraPartida()
            return
        }
    
        await this.proximaJogada(proximoJogadorAjogar, jogadorJogando)
    }

    async jogarOutraPartida ( ) {

        this.campoJogo.limparCampo()
        
        let outraPartida = await criarQuestaoERetornarResposta(
            `Digite :
            1 - Para Jogar outra partida com o mesmo oponente.
            2 - Para voltar ao menu principal
            3 - Para sair do jogo: `
        )
        
        while (!outraPartida.match(/\b[1-3]\b/)) {
            limparTela()
            outraPartida = await criarQuestaoERetornarResposta(
                `As opções válidas são:
                1 - Para Jogar outra partida com o mesmo oponente.
                2 - Para voltar ao menu principal
                3 - Para sair do jogo: `
            )
        }
        
        outraPartida = outraPartida.toLowerCase()
    
       limparTela()

       switch (outraPartida) {
        case '1':
            await this.iniciar()
            break;
        case '2':
            this.menuPrincipal = true
            break;
        case '3': 
            mostrarNaTela(':) até logo!')
            process.exit()
       }
    }

    voltarAoMenuPrincipal() {
        return this.menuPrincipal
    }
    
}

module.exports = Jogo