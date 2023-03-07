document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:5100/getAll')
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));

    fetch('http://localhost:5100/sumAll')
            .then(response => response.json())
            .then(data => loadItemCount(data));
});

AOS.init();

const addBtn = document.querySelector('#submit-btn');

const updateBtn = document.querySelector('#update-row-btn');

const deleteBtn = document.querySelector('table tbody').addEventListener('click', function(event) {
    if (event.target.className === "delete-row-btn"){
        deleteRowById(event.target.dataset.id);
    
    }
    if (event.target.className === "edit-row-btn"){
        handleEditRow(event.target.dataset.id)
    }
});



function deleteRowById(id){
    fetch('http://localhost:5100/delete/' + id, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        if (data.success){
            location.reload();
        }
    });
}

function handleEditRow(id) {
    const updateSection = document.querySelector('#update-row');
    updateSection.hidden = false;
    document.querySelector('#grn-up').dataset.id = id;
    console.log(id);
}



updateBtn.onclick = function () {
    const updateGrnInput = document.querySelector('#grn-up');
    const updateDesktopInput = document.querySelector('#desktops-up');
    const updateNotebookInput = document.querySelector('#notebooks-up');
    const updateMonitorInput = document.querySelector('#monitors-up');
    const updatePrinterInput = document.querySelector('#printers-up');
    const updateServerInput = document.querySelector('#servers-up');
    const updateSwitchesInput = document.querySelector('#switches-up');
    const updateTvInput = document.querySelector('#tvs-up');
    const updateScannerInput = document.querySelector('#scanners-up');
    const updateTabletInput = document.querySelector('#tablets-up');
    const updatePhoneInput = document.querySelector('#phones-up');
    const updateMobileInput = document.querySelector('#mobiles-up');
    const updateDockInput = document.querySelector('#docks-up');
    const updateEboxInput = document.querySelector('#ebox-up');

    if(updateGrnInput.value == "" || updateDesktopInput.value == "" || updateNotebookInput.value == "" || updateMonitorInput.value == "" || updatePrinterInput.value == "" || updateServerInput.value == "" || updateSwitchesInput.value == "" || updateTvInput.value == "" || updateScannerInput.value == "" || updateTabletInput.value == "" || updatePhoneInput.value == "" || updateMobileInput.value == "" || updateDockInput.value == "" || updateEboxInput.value == "") {
        alert('Please fill in all fields');
    }else{
    fetch('http://localhost:5100/update/', {
        method: 'PATCH',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            id: updateGrnInput.dataset.id,
            grnU: updateGrnInput.value,
            desktopsU: updateDesktopInput.value,
            notebooksU: updateNotebookInput.value,
            monitorsU: updateMonitorInput.value,
            printersU: updatePrinterInput.value,
            serversU: updateServerInput.value,
            switchesU: updateSwitchesInput.value,
            tvsU: updateTvInput.value,
            scannersU: updateScannerInput.value,
            tabletsU: updateTabletInput.value,
            phonesU: updatePhoneInput.value,
            mobilesU: updateMobileInput.value,
            docksU: updateDockInput.value,
            eboxU: updateEboxInput.value

        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.reload();
        }
    })
    }
}

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
    const table = document.querySelector('table tbody');
    const isTableData = table.querySelector('.no-data');

    let tableHtml = "<tr>";

    for (var key in data) {
        if(data.hasOwnProperty(key)) {
            tableHtml += `<td>${data[key]}</td>`;
        }
    }

    tableHtml += `<td><button class="delete-row-btn" data-id=${data.id}>Delete</td>`;
    tableHtml += `<td><button class="edit-row-btn" data-id=${data.id}>Edit</td>`;

    tableHtml += "</tr>"; 
    

    if (isTableData) {
        table.innerHTML = tableHtml;
    } else {
        const newRow = table.insertRow();
        newRow.innerHTML = tableHtml;
    }


} 

function loadHTMLTable(data) {
    const table = document.querySelector('table tbody');

    console.log(data);

    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
    }

    let tableHtml = "";

    data.forEach(function ({id, GRN, Desktops, Notebooks, Monitors, Printers, Servers, Switches, TVs, Scanners, Tablets, Phones, Mobiles, DockStations, Ebox}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${id}</td>`;
        tableHtml += `<td>${GRN}</td>`;
        tableHtml += `<td>${Desktops}</td>`;
        tableHtml += `<td>${Notebooks}</td>`;
        tableHtml += `<td>${Monitors}</td>`;
        tableHtml += `<td>${Printers}</td>`;
        tableHtml += `<td>${Servers}</td>`;
        tableHtml += `<td>${Switches}</td>`;
        tableHtml += `<td>${TVs}</td>`;
        tableHtml += `<td>${Scanners}</td>`;
        tableHtml += `<td>${Tablets}</td>`;
        tableHtml += `<td>${Phones}</td>`;
        tableHtml += `<td>${Mobiles}</td>`;
        tableHtml += `<td>${DockStations}</td>`;
        tableHtml += `<td>${Ebox}</td>`;
        tableHtml += `<td><button class="delete-row-btn" data-id=${id}>Delete</td>`;
        tableHtml += `<td><button class="edit-row-btn" data-id=${id}>Edit</td>`;
        tableHtml += "</tr>"; 
    });

    table.innerHTML = tableHtml;
}

