const ValidadorJogadas = require('./validador-jogadas/validador-jogadas-composicao')
const ValidadorPossibilidadesDefesa = require('./validador-jogadas/validador-possibilidades-defesa')
const ValidadorPossibilidadesVitoria = require('./validador-jogadas/validador-possibilidades-vitoria')

const fabricaValidadorJogadasDefesa = () => {
    const validadorPossibilidadesDefesa = new ValidadorPossibilidadesDefesa()
    return new ValidadorJogadas(validadorPossibilidadesDefesa)
}


const fabricaValidadorJogadasVitoria = () => {
    const validadorPossibilidadesVitoria = new ValidadorPossibilidadesVitoria()
    return new ValidadorJogadas(validadorPossibilidadesVitoria)
}


module.exports = {
    fabricaValidadorJogadasDefesa,
    fabricaValidadorJogadasVitoria
}