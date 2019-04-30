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
//console.log(data)


// itération pour toutes les clés presente dans l'object bus
Object.keys(bus).forEach(function (key) {
    //console.log('Key  :' + key + " | Value :" + bus[key] )
 });


//3.2 Object.values

// itération dans un un d'objet
for (var key in data) {
    var obj = data[key];
    for (var node in obj) {
        if (node === "texte")
        console.log(node + " = " + obj[node]);
    }
}







