const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const criarQuestaoERetornarResposta = (questao) => {
    return new Promise((resolve, reject) => {
        rl.question(questao, (resposta) => {
            try {
                return resolve(resposta)
            } catch (erro) {
                return reject(erro)
            }
        })  
    })
}

const limparTela = () => {
    console.clear()
}

const mostrarNaTela = (...params) => {
    console.log(...params)
}

module.exports = {
    limparTela,
    mostrarNaTela,
    criarQuestaoERetornarResposta
}