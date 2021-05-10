class CPU {

    constructor (nome, simbolo, inteligenciaArtificial) {
        this.nome = nome
        this.simbolo = simbolo
        this.inteligenciaArtificial = inteligenciaArtificial
        this.tipo = 'robo'
    }

    getNome () {
        return this.nome
    }

    getSimbolo () {
        return this.simbolo
    }

    async fazerJogada (quadroVelha) {
        await this.simularPensamento()
        return this.inteligenciaArtificial.fazerJogada(quadroVelha, this.simbolo)
    }

    async simularPensamento () {

        console.log(`${this.nome} está pensando....`)
    
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve()
            }, 3000)
        })
    }
}

module.exports = CPU