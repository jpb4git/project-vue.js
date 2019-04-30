//2.1 Fonctions simples
const sayHello = () => {
    console.log('Hello')
}
// arrow function var = (parameters) => {implementation}
const sayMyName = (first, last) => {
    console.log(first, last)
}


const sayMyAge = (age) =>  {
    console.log('You are ' + age + ' years old')
}

sayHello()
sayMyName('Odile', 'Crok')
sayMyAge(23)




//----------------------//
//2.2 this

const object = {
    color: 'red',
    shape: 'circle',
    
    threeDimensions: false,
    // ici "this" fait reference  à la function showthis
    showThis: () => {
        console.log(this)
    }
}

object.showThis()

//----------------------//
//2.3 Application

const odile = {
    name: {
        first: 'Odile',
        last: 'Crok'
    },
    age: 23,
    sayHello:() => {
        console.log('Hello')
    },

    sayMyName: function(){
        console.log(this.name.first + " " + this.name.last)
    },
   sayMyAge: function(){
        console.log(this.age)
   }
}

odile.sayHello()
odile.sayMyName()
odile.sayMyAge()