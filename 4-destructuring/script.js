//4.1 Découverte
// création de deux constantes a et b auquelles on affecte respectivement  
//les valeurs contenues dans le tableau affecté pour chaque indice (a est dans un tableau à l'indice 0 et prendra la valeur placée au même indice 
// dans le tableau d'affectation ) 
const [a, b] = [1, 2, 3, 4]
//console.log(a)
//console.log(b)

// même histoire mais avec des objets
const {first, last} = {first: 'Paul', last: 'Henta', age: 35}
console.log(first)
console.log(last)

//4.2 Application

console.log(getThird(data,3))
//let dat = data;
//console.log(dat);


function getThird(data,indice){
  let count = 0;
  let tempEl
    Object.keys(data).forEach(function (element) {
        if (count === (indice-1)){   
            tempEl = element   
        }
        count++
    });
    return tempEl;
}