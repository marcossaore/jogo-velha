const ValidarJogadasVencedoras = require('../regras/validar-jogadas-vencedoras')

const mapaCampo = `
    1 | 2 | 3
  –––––––––––––
    4 | 5 | 6
  –––––––––––––
    7 | 8 | 9
`
let campo = mapaCampo
let posicoesDoCampo = []

const exibirCampo = () => {
    let campoParaExibir = campo
    campoParaExibir = campoParaExibir.replace(/\b[1-9]{1}\b/g, ' ')
    console.log(campoParaExibir)
}

const limparCampo = () => {
    campo = mapaCampo
    posicoesDoCampo = []
}

const deuVelha = () => {
    const todasAsposicoesJaJogadas = (posicoesDoCampo.filter(posicao => posicao != '' || posicao != null)).length
    return todasAsposicoesJaJogadas === 9
}

const conferirJogoParaSimbolo = (simbolo) => {
    const validarJogadasVencedoras = new ValidarJogadasVencedoras()
    const jogoGanho = validarJogadasVencedoras.validar(simbolo, posicoesDoCampo)
    return jogoGanho
}

const atualizarCampo = (jogada, simbolo) => {
    campo = campo.replace(jogada, simbolo)
    posicoesDoCampo[Number(jogada) - 1] = simbolo
}

const jogadaJaMarcadoNoCampo = (jogada) => {
    return campo.match(jogada)
}

const obterPosicoesDisponiveis = () => {
    let posicoesDisponiveis = []
    
    for (let index = 0; index < 9; index++) {
        if(!posicoesDoCampo[index]) {
            posicoesDisponiveis.push(index + 1)
        }
    }

    if (posicoesDisponiveis.length  === 0) {
        for (let index = 0; index < 9; index++) {
            posicoesDisponiveis.push(index + 1)
        }
    }
    
    return posicoesDisponiveis
}

const obterTodasPosicoes = () => { 
    return posicoesDoCampo
}

const jaForamFeitasJogadasNoJogo = () => {
    const foramFeitasJogadasNoJogo = (posicoesDoCampo.filter(posicao => posicao != ''))
    return foramFeitasJogadasNoJogo.length >= 0
}

const obterPosicoesDeJogadasFeitasDiferenteDeSimbolo = (simbolo)  => {
    const mapaDePosicoes = []

    let posicoes = obterTodasPosicoes()

    for (let index = 0; index < 9; index++) {
        if (posicoes[index] && posicoes[index] !== simbolo) {
            mapaDePosicoes.push(index)
        }
    }

    return mapaDePosicoes
}

const obterPosicoesDeJogadasFeitasPorSimbolo = (simbolo)  => { 
    const mapaDePosicoes = []

    let posicoes = obterTodasPosicoes()

    for (let index = 0; index < 9; index++) {
        if (posicoes[index] && posicoes[index] === simbolo) {
            mapaDePosicoes.push(index)
        }
    }

    return mapaDePosicoes;
}

const fazerJogadaAleatoria = () => {
    let posicoesDisponiveis = obterPosicoesDisponiveis()
    const posicaoJogadaAleatoria = (Math.floor(Math.random() * ( posicoesDisponiveis.length - 1 ) ) + 0)
    const jogada = posicoesDisponiveis[posicaoJogadaAleatoria]
    return jogada
}



const CampoJogo = {
    exibirCampo,
    limparCampo,
    atualizarCampo,
    jogadaJaMarcadoNoCampo,
    conferirJogoParaSimbolo,
    deuVelha,
    obterTodasPosicoes,
    obterPosicoesDisponiveis,
    jaForamFeitasJogadasNoJogo,
    obterPosicoesDeJogadasFeitasDiferenteDeSimbolo,
    obterPosicoesDeJogadasFeitasPorSimbolo,
    fazerJogadaAleatoria
}

module.exports = CampoJogo
