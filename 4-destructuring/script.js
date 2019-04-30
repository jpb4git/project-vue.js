"use strict";
//4.1 Découverte
// création de deux constantes a et b auquelles on affecte respectivement  
//les valeurs contenues dans le tableau affecté pour chaque indice (a est dans un tableau à l'indice 0 et prendra la valeur placée au même indice 
// dans le tableau d'affectation ) 
const [a, b] = [1, 2, 3, 4]
//console.log(a)
//console.log(b)

// même histoire mais avec des objets
const {first, last,age} = {first: 'Paul', last: 'Henta', age: 35}
console.log(first)
console.log(last)

console.log(age)

//4.2 Application

Object.values(data).forEach(function(element){

    console.log(element.texte + ' ' + element.dateDebut +' '+ element.dateFin)

});

/*
Object.keys(data).forEach(function (element){
    Object.entries(data[element]).forEach(function (el){
        if (el[0] === "texte" || el[0] === "dateDebut" ||  el[0] === "dateFin"){  
            console.log(el[0] + " = " + el[1]);  
        }
    });
});
*/




