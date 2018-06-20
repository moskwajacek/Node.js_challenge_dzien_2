//Twój kod

const fs = require('fs');

fs.readFile(`${process.argv[2]}`, 'utf8', (err, data) => {
    if (err === null) {
        // console.log(data.split(''))
        let newText = data.split('').map((element, index) => index % 2 !== 0 ? element.toLowerCase() : element.toUpperCase()).join('');
        console.log(newText)
    } else {
        console.log(err);
    }
});