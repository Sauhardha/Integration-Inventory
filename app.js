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
app.patch('/update', (request, response) => {
    const {id, grnU, desktopsU, notebooksU, monitorsU, printersU, serversU, switchesU, tvsU, scannersU, tabletsU, phonesU, mobilesU, docksU, eboxU } = request.body;

    console.log({id, grnU, desktopsU, desktopsU, notebooksU, monitorsU, printersU, serversU, switchesU, tvsU, scannersU, tabletsU, phonesU, mobilesU, docksU, eboxU});
    const db = dbService.getDbServiceInstance();

    const result = db.updateById(id, grnU, desktopsU, notebooksU, monitorsU, printersU, serversU, switchesU, tvsU, scannersU, tabletsU, phonesU, mobilesU, docksU, eboxU);

    result.then(data => response.json({success : data}))
    .catch(err => console.log(err));
});

// delete

app.delete('/delete/:id', (request, response) => {
    console.log(request.params);
    const { id } = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.deleteRowById(id);

    result.then(data => response.json({success : data}))
    .catch(err => console.log(err));
})

// running

app.listen(process.env.PORT, () => console.log('app is running'));
