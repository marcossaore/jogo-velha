const nomeRobos = [
    '🤖 Malaquias Robô',
    '🦾  Jeremias Robô ',
    '🦿 Tobias Robô',
    '🤖 Avelino Robô',
    '🤖 Nelson Robô'
]

const obterRoboAleatorio = () => {
    const robo = Math.floor(Math.random() * 5) + 0
    return nomeRobos[robo]
}

module.exports = {
    obterRoboAleatorio
}