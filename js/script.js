'use strict';

const userBirthday = prompt('What year were you born?');
const userCity = prompt('What city do you live in?');
const userSport = prompt('What is your favourite sport?');

let message = '';

if(userBirthday === null) {
  message += 'Shame you didnt write your birthday '
} else {
    message += `You are ${2023 - userBirthday} y.o. `
}

if(userCity === 'Kyiv') {
    message += 'You live in the capital of Ukraine '
} else if(userCity === 'Washington') {
    message +=  'You live in the capital of USA '
} else if (userCity === 'London') {
    message += 'You live in the capital of Great Britain '
} else if (userSport === null) {
    message += 'Shame you didnt write your city '
} else {
    message += `You live in the city of ${userCity} `
}

if(userSport === 'Swimming') {
    message += 'Cool! Do you want to become Michael Phelps? '
} else if(userSport === 'Basketball') {
    message += 'Cool! Do you want to become Michael Jordan? '
} else if (userSport === 'Football') {
    message += 'Cool! Do you want to become Cristiano Ronaldo? '
} else if (userSport === null) {
    message += 'Shame you didnt write your fav sport '
} else {
    message += `${userSport} is great! `
}

alert(message);