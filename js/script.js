'use strict'

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'

function generateKey(length, characters) {
    let result = ''
    for (let i = 0; i < length; i++) {
        const randomValue = Math.floor(Math.random() * characters.length)
        result += characters[randomValue]
    }
    return result
}

const key = generateKey(16, characters)
console.log(key)
