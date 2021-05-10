const emojis = [
    '😀',
    '🥳',
    '😎',
    '😍',
    '😭'
]

const obterEmojiAleatorio = () => {
    const emoji = Math.floor(Math.random() * 5) + 0
    return emojis[emoji]
}

module.exports = {
    obterEmojiAleatorio
}