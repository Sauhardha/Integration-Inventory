const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const dbService = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));



// create
app.post('/insert', (request, response) => {
    console.log(request.body);
});


// read
app.get('/getAll', (request, response) => {

    console.log('test');
    const db = dbService.getDbServiceInstance();

    const result = db.getAllData();

    

    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
    
})

// update


// delete


// running

app.listen(process.env.PORT, () => console.log('app is running'));
