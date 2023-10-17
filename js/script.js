'use strict'

function padString (word, length, symb, bool = true) {
    if (typeof word !== 'string') {
        return 'error: no word argument'
    } else if (typeof length !== 'number') {
        return 'error: no length argument'
    } else if (typeof symb !== 'string' || symb.length !== 1) {
        return 'error: no symb argument'
    } else if (typeof bool !== 'boolean') {
        return "error: no bool argument"
    } else if (word.length > length) {
        word =  word.substring(0, length)
    } else {
        word = Array.from(word)
        for (let i = word.length; i < length; i++) {
            if (bool === false) {
                word.unshift(symb)
            } else {
                word.push(symb)
            }
        }
        word = word.join('')
    }
    return word
}

console.log(padString('hello', 6,'*', true))