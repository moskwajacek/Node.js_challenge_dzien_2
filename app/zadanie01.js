//Twój kod

const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', 'utf8', (err, data) => {

    let result = 0

    if (err === null) { 
        console.log(JSON.parse(data));
        JSON.parse(data).forEach(element => result += element);
        fs.writeFile('./data/zadanie01/sum.txt', result, err => {
            if (err === null) {
                console.log("Zapisano")
            } else {
                console.log(err);
            }
        })
    } else {
        console.log(err);
    }
});


