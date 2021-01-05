const fs = require('fs');

fs.readFile('./hello.txt', (err,data) => {
    if(err) {
        console.log('errrorrrrr');
    }
    console.log(data.toString('utf8'));
})

fs.appendFile('./hello.txt', 'This is cool', err => { 
    if(err){
        console.log(err)
    }
})