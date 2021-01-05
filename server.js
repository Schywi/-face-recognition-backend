const express = require('express');
const app = express();



app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req,res) => { 
    console.log(req.query); 
    res.send("helloo")
});


app.post('/profile', (req,res) => { 

    const obj = { 
        "name": "Sally",
        "hobby": "anime"
    }
    res.send(obj)
});
app.listen(3000);

/**
 * ! Intead of using 
 * * app.use(bodyparser.urlencoded({extended: false}));
 * * app.use(bodyparser.json());
 * 
 * Todo: Use this 
 *  * app.use(express.urlencoded({extended: false}));
 *  * app.use(express.json());
 */