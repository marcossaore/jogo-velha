const nomeRobos = [
    '馃 Malaquias Rob么',
    '馃  Jeremias Rob么 ',
    '馃 Tobias Rob么',
    '馃 Avelino Rob么',
    '馃 Nelson Rob么'
]

const obterRoboAleatorio = () => {
    const robo = Math.floor(Math.random() * 5) + 0
    return nomeRobos[robo]
}

module.exports = {
    obterRoboAleatorio
}