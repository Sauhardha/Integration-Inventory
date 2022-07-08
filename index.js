const { addAbortSignal } = require("stream");

document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:5100/getAll')
    .then(response => response.json())
    .then(data => console.log(data['data']));
    
});

const submitBtn = document.querySelector('#submit-input')

submitBtn.onclick = function () {
    console.log('button works!');
    const grnInput = document.querySelector('#grn');
    const grn = grnInput.value;
    nameInput.value = "";

    fetch('http://localhost:5100/insert' , {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({grn : grn})
    })
    .then(response => response.json())
    .then(data => insertRowIntoTable(data['data']));
    
}

function insertRowIntoTable(data) {

} 

function loadHTMLTable(data) {
    const table = document.querySelecter('table tbody');

    console.log(data);

    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
    }
}