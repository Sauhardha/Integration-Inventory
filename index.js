document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:5100/getAll')
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
    
});

const addBtn = document.querySelector('#submit-btn');

addBtn.onclick = function () {
    const grnIn = document.querySelector('#grn');
    const grn = grnIn.value;

    const desktopsIn = document.querySelector('#desktops');
    const desktops = desktopsIn.value;

    const notebooksIn = document.querySelector('#notebooks');
    const notebooks = notebooksIn.value;

    const monitorsIn = document.querySelector('#monitors');
    const monitors = monitorsIn.value;

    const printersIn = document.querySelector('#printers');
    const printers = printersIn.value;

    const serversIn = document.querySelector('#servers');
    const servers = serversIn.value;

    const switchesIn = document.querySelector('#switches');
    const switches = switchesIn.value;

    const tvsIn = document.querySelector('#tvs');
    const tvs = tvsIn.value;

    const scannersIn = document.querySelector('#scanners');
    const scanners = scannersIn.value;

    const tabletsIn = document.querySelector('#tablets');
    const tablets = tabletsIn.value;

    const phonesIn = document.querySelector('#phones');
    const phones = phonesIn.value;

    const mobilesIn = document.querySelector('#mobiles');
    const mobiles = mobilesIn.value;

    const docksIn = document.querySelector('#docks');
    const docks = docksIn.value;

    const eboxIn = document.querySelector('#ebox');
    const ebox = eboxIn.value;

    if(grn == "" || desktops == "" || notebooks == "" || monitors == "" || printers == "" || servers == "" || switches == "" || tvs == "" || scanners == "" || tablets == "" || phones == "" || mobiles == "" || docks == "" || ebox == "") {
        alert('Please fill in all fields');
    }else{
        fetch('http://localhost:5100/insert' , {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({grn : grn, desktops : desktops, notebooks : notebooks, monitors : monitors, printers : printers, servers : servers, switches : switches, tvs : tvs, scanners : scanners, tablets : tablets, phones : phones, mobiles : mobiles, docks : docks, ebox : ebox})
    })
    .then(response => response.json())
    .then(data => insertRowIntoTable(data['data']));
    }

    grnIn.value = "";
    desktopsIn.value = "";
    notebooksIn.value = "";
    monitorsIn.value = "";
    printersIn.value = "";
    serversIn.value = "";
    switchesIn.value = "";
    tvsIn.value = "";
    scannersIn.value = "";
    tabletsIn.value = "";
    phonesIn.value = "";
    mobilesIn.value = "";
    docksIn.value = "";
    eboxIn.value = "";
}

function insertRowIntoTable(data) {

} 

function loadHTMLTable(data) {
    const table = document.querySelector('table tbody');

    console.log(data);

    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
    }

    data.forEach(function ({grn, }) {

    });
}