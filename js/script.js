'use strict';

Boolean(Number('10')) + 1;
// Number('10') = 10, Boolean(10) = true, Number(true) = 1, true + 1 = 2
// Ответ: 2

'sub' + Number(false);
// Number(false) = 0, string + number = string, 'sub' + 0 = 'sub0'
// Ответ: 'sub0
// '
16 * '91'
// Number * string = Number, 16 * '91' = 1456
// Ответ: 1456

true - 70
// Number(true) = 1, true - 70 = -69
// Ответ: -69

Number(1 + String(1)) + 1
// 1 + String(1) = '11', Number('11') = 11, 11 + 1 = 12,
// Ответ: 12
