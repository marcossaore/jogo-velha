const funcoesConsole = require('./funcoes-console')
const robo = require('./robo')
const emoji = require('./emoji')

module.exports = {
    ...funcoesConsole,
    ...robo,
    ...emoji
}