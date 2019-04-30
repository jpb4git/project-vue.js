//3.1 Object.keys

const bus = {
    vehicle: 'Urbanway CNG 12',
    id: 3221,
    line: 'C6',
    paint: 'chrono',
    garage: {
        name: 'Sassenage',
        place: '47'
    },
    equipments: ['sae', 'tft', 'speech']
}



// itération pour toutes les clés presente dans l'object bus
Object.keys(bus).forEach(function (key) {
   console.log('Key  :' + key + " | Value :" + bus[key] )
 });


//3.2 Object.values

Object.values(data).forEach(function (element){
    console.log(element);
    for (var node in element) {
        if (node === "texte" || node === "dateDebut" ||  node === "dateFin"){
            console.log(node + " = " + node[node]);
            }
    }
});

console.log('---------------------------------------------')
// itération dans un un d'objet
Object.keys(data).forEach(function (key) {
    // on récupere l'object 
    let obj = data[key];
   // console.log(obj)
   /*Object.keys(obj).forEach(function (node) {
   // for (var node in obj) {
        if (node === "texte" || node === "dateDebut" ||  node === "dateFin"){
        console.log(node + " = " + obj[node]);
        }
        
    });
    */
});








