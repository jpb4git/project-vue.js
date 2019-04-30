//1.1 Types simples

const name = 'Jacques'
let age = 80
let useless = 'something'

console.log(name, age, useless)

age += 1
useless = 14

console.log(name, age, useless)

//----------------------//
//1.2 Tableaux

let fruits = ['apple', 'pear', 'cherry']
let vegetables = ['potato', 'curlyflower', 'tomato']

console.log(fruits, vegetables)

fruits.push('banana')
vegetables.pop()

console.log(fruits, vegetables)

//----------------------//
//1.2 Objets

let settings = {
    sound: true,
    music: false,
    graphics: 'high',
    resolution: [1920, 1080]
}

let savedGame = {
    time: 384,
    score: 47,
    opponent: 'Lolo'
}

console.log(settings, savedGame)

savedGame = {}
settings.music = true
settings.resolution = [3840, 2160]

console.log(settings, savedGame)