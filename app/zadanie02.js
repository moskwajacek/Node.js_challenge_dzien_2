//Twój kod

const fs = require('fs');

fs.readdir('./data/zadanie02/', (err, files) => {
    if (err === null) {
        console.log("Lista plikow");
        files.forEach(file => {
            console.log(file)
            fs.readFile(`./data/zadanie02/${file}`, 'utf8', (err, data) => {
                if (err === null) {
                    console.log(data);
                } else {
                    console.log(err);
                }
            })
        })
    } else {
        console.log(err)
    }
})