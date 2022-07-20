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
    //console.log(request.body);
    
    let grnItem = [request.body.grn, request.body.desktops, request.body.notebooks, request.body.monitors, request.body.printers, request.body.servers, request.body.switches, request.body.tvs, request.body.scanners, request.body.tablets, request.body.phones, request.body.mobiles, request.body.docks, request.body.ebox];
    const db = dbService.getDbServiceInstance();

    const result = db.insertNewGrn(grnItem);
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
    console.log(grnItem);
});


// read
app.get('/getAll', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.getAllData();

    result.then(data => response.json({data : data}))
    .catch(err => console.log(err));
    
})

// update


// delete


// running

app.listen(process.env.PORT, () => console.log('app is running'));
