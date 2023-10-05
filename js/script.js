'use strict';

const userBirthday = prompt('What year were you born?');
const userCity = prompt('What city do you live in?');
const userSport = prompt('What is your favourite sport?');

if(userBirthday!== null && !isNaN(userBirthday)) {
    if(userCity === 'Kyiv') {
        if(userSport === 'Swimming') {
            alert(`You are ${2023 - userBirthday} y.o.
You live in the capital of Ukraine
Cool you want to become Michael Phepls?`)
        } else if(userSport === 'Basketball') {
            alert(`You are ${2023 - userBirthday} y.o.
You live in the capital of Ukraine
Cool you want to become Michael Jordan?`)
        } else if(userSport === 'Football') {
            alert(`You are ${2023 - userBirthday} y.o.
You live in the capital of Ukraine
Cool you want to become Cristiano Ronaldo?`)
        } else if( userSport === null) {
            alert(`You are ${2023 - userBirthday} y.o.
You live in the capital of Ukraine`)
            alert('Shame you didnt write your fav sport')
        } else {
            alert(`You are ${2023 - userBirthday} y.o.
You live in the capital of Ukraine
${userSport} is great`)
        }
    } else if(userCity === 'Washington') {
        if(userSport === 'Swimming') {
            alert(`You are ${2023 - userBirthday} y.o.
You live in the capital of USA
Cool you want to become Michael Phepls?`)
        } else if(userSport === 'Basketball') {
            alert(`You are ${2023 - userBirthday} y.o.
You live in the capital of USA
Cool you want to become Michael Jordan?`)
        } else if(userSport === 'Football') {
            alert(`You are ${2023 - userBirthday} y.o.
You live in the capital of USA
Cool you want to become Cristiano Ronaldo?`)
        } else if( userSport === null) {
            alert(`You are ${2023 - userBirthday} y.o.
You live in the capital of USA`)
            alert('Shame you didnt write your fav sport')
        } else {
            alert(`You are ${2023 - userBirthday} y.o.
You live in the capital of USA
${userSport} is great`)
        }
    } else if(userCity === 'London') {
        if(userSport === 'Swimming') {
            alert(`You are ${2023 - userBirthday} y.o.
You live in the capital of Great Britain
Cool you want to become Michael Phepls?`)
        } else if(userSport === 'Basketball') {
            alert(`You are ${2023 - userBirthday} y.o.
You live in the capital of Great Britain
Cool you want to become Michael Jordan?`)
        } else if(userSport === 'Football') {
            alert(`You are ${2023 - userBirthday} y.o.
You live in the capital of Great Britain
Cool you want to become Cristiano Ronaldo?`)
        } else if( userSport === null) {
            alert(`You are ${2023 - userBirthday} y.o.
You live in the capital of Great Britain`)
            alert('Shame you didnt write your fav sport')
        } else {
            alert(`You are ${2023 - userBirthday} y.o.
You live in the capital of Great Britain
${userSport} is great`)
        }
    } else if(userCity === null) {
        if(userSport === 'Swimming') {
            alert(`You are ${2023 - userBirthday} y.o.
Cool you want to become Michael Phepls?`)
            alert('Shame you didnt write your city')
        } else if(userSport === 'Basketball') {
            alert(`You are ${2023 - userBirthday} y.o.
Cool you want to become Michael Jordan?`)
            alert('Shame you didnt write your city')
        } else if(userSport === 'Football') {
            alert(`You are ${2023 - userBirthday} y.o.
Cool you want to become Cristiano Ronaldo?`)
            alert('Shame you didnt write your city')
        } else if( userSport === null) {
            alert(`You are ${2023 - userBirthday} y.o.`)
            alert('Shame you didnt write your fav sport and your city')
        } else {
            alert(`You are ${2023 - userBirthday} y.o.
${userSport} is great`)
            alert('Shame you didnt write your city')
        }
    } else {
        if(userSport === 'Swimming') {
            alert(`You are ${2023 - userBirthday} y.o.
You live in the city of ${userCity}
Cool you want to become Michael Phepls?`)
        } else if(userSport === 'Basketball') {
            alert(`You are ${2023 - userBirthday} y.o.
You live in the city of ${userCity}
Cool you want to become Michael Jordan?`)
        } else if(userSport === 'Football') {
            alert(`You are ${2023 - userBirthday} y.o.
You live in the city of ${userCity}
Cool you want to become Cristiano Ronaldo?`)
        } else if( userSport === null) {
            alert(`You are ${2023 - userBirthday} y.o.
You live in the city of ${userCity}`)
            alert('Shame you didnt write your fav sport')
        } else {
            alert(`You are ${2023 - userBirthday} y.o.
You live in the city of ${userCity}
${userSport} is great`)
        }
    }
} else if(userBirthday === null) {
    if(userCity === 'Kyiv') {
        if(userSport === 'Swimming') {
            alert(`You live in the capital of Ukraine
Cool you want to become Michael Phepls?`)
            alert('Shame you didnt write your year of birthday')
        } else if(userSport === 'Basketball') {
            alert(`You live in the capital of Ukraine
Cool you want to become Michael Jordan?`)
            alert('Shame you didnt write your year of birthday')
        } else if(userSport === 'Football') {
            alert(`You live in the capital of Ukraine
Cool you want to become Cristiano Ronaldo?`)
            alert('Shame you didnt write your year of birthday')
        } else if( userSport === null) {
            alert(`You live in the capital of Ukraine`)
            alert('Shame you didnt write your year of birthday and fav sport')
        } else {
            alert(`You live in the capital of Ukraine
${userSport} is great`)
            alert('Shame you didnt write your year of birthday')
        }
    } else if(userCity === 'Washington') {
        if(userSport === 'Swimming') {
            alert(`You live in the capital of USA
Cool you want to become Michael Phepls?`)
            alert('Shame you didnt write your year of birthday')
        } else if(userSport === 'Basketball') {
            alert(`You live in the capital of USA
Cool you want to become Michael Jordan?`)
            alert('Shame you didnt write your year of birthday')
        } else if(userSport === 'Football') {
            alert(`You live in the capital of USA
Cool you want to become Cristiano Ronaldo?`)
            alert('Shame you didnt write your year of birthday')
        } else if( userSport === null) {
            alert(`You live in the capital of USA`)
            alert('Shame you didnt write your year of birthday fav sport')
        } else {
            alert(`You live in the capital of USA
${userSport} is great`)
            alert('Shame you didnt write your year of birthday')
        }
    } else if(userCity === 'London') {
        if(userSport === 'Swimming') {
            alert(`You live in the capital of Great Britain
Cool you want to become Michael Phepls?`)
            alert('Shame you didnt write your year of birthday')
        } else if(userSport === 'Basketball') {
            alert(`You live in the capital of Great Britain
Cool you want to become Michael Jordan?`)
            alert('Shame you didnt write your year of birthday')
        } else if(userSport === 'Football') {
            alert(`You live in the capital of Great Britain
Cool you want to become Cristiano Ronaldo?`)
            alert('Shame you didnt write your year of birthday')
        } else if( userSport === null) {
            alert(`You live in the capital of Great Britain`)
            alert('Shame you didnt write your year of birthday fav sport')
        } else {
            alert(`You live in the capital of Great Britain
${userSport} is great`)
            alert('Shame you didnt write your year of birthday')
        }
    } else if(userCity === null) {
        if(userSport === 'Swimming') {
            alert(`Cool you want to become Michael Phepls?`)
            alert('Shame you didnt write your year of birthday and city')
        } else if(userSport === 'Basketball') {
            alert(`Cool you want to become Michael Jordan?`)
            alert('Shame you didnt write your year of birthday and city')
        } else if(userSport === 'Football') {
            alert(`Cool you want to become Cristiano Ronaldo?`)
            alert('Shame you didnt write your year of birthday and city')
        } else if( userSport === null) {
            alert('Shame you didnt write your year of birthday, fav sport and your city')
        } else {
            alert(`${userSport} is great`)
            alert('Shame you didnt write your year of birthday and city')
        }
    } else {
        if(userSport === 'Swimming') {
            alert(`You live in the city of ${userCity}
Cool you want to become Michael Phepls?`)
            alert('Shame you didnt write your year of birthday')
        } else if(userSport === 'Basketball') {
            alert(`You live in the city of ${userCity}
Cool you want to become Michael Jordan?`)
            alert('Shame you didnt write your year of birthday')
        } else if(userSport === 'Football') {
            alert(`You live in the city of ${userCity}
Cool you want to become Cristiano Ronaldo?`)
            alert('Shame you didnt write your year of birthday')
        } else if( userSport === null) {
            alert(`You live in the city of ${userCity}`)
            alert('Shame you didnt write your year of birthday and fav sport')
        } else {
            alert(`You live in the city of ${userCity}
${userSport} is great`)
            alert('Shame you didnt write your year of birthday')
        }
    }
} else {
    alert('write a number')
}



// const userBirthdayEx2 = prompt('What year were you born?');
// const userCityEx2 = prompt('What city do you live in?');
// const userSportEx2 = prompt('What is your favourite sport?');
//
// let message = '';
//
// if(userBirthdayEx2 === null) {
//   message += 'Shame you didnt write your birthday '
// } else {
//     message += `You are ${2023 - userBirthdayEx2} y.o. `
// }
//
// if(userCityEx2 === 'Kyiv') {
//     message += 'and you live in the capital of Ukraine!'
// } else if(userCityEx2 === 'Washington') {
//     message +=  'and you live in the capital of USA!'
// } else if (userCityEx2 === 'London') {
//     message += 'and you live in the capital of Great Britain!'
// } else if (userSportEx2 === null) {
//     message += 'but shame you didnt write your city!'
// } else {
//     message += `and you live in the city of ${userCityEx2}!`
// }
//
// if(userSportEx2 === 'Swimming') {
//     message += ' Cool! Do you want to become Michael Phelps?'
// } else if(userSportEx2 === 'Basketball') {
//     message += ' Cool! Do you want to become Michael Jordan?'
// } else if (userSportEx2 === 'Football') {
//     message += ' Cool! Do you want to become Cristiano Ronaldo?'
// } else if (userSportEx2 === null) {
//     message += ' Shame you didnt write your fav sport'
// } else {
//     message += ` ${userSportEx2} is great!`
// }
//
// alert(message);