//GRN Class:
class GRNclass {
    constructor(grn, desktops, notebooks, monitors, printers, servers, switches, tvs, scanners, tablets, phones, mobiles, docks, ebox)
    {
        this.grn = grn;
        this.desktops = desktops;
        this.notebooks = notebooks;
        this.monitors = monitors;
        this.printers = printers;
        this.servers = servers;
        this.switches = switches;
        this.tvs = tvs;
        this.scanners = scanners;
        this.tablets = tablets;
        this.phones = phones;
        this.mobiles = mobiles;
        this.docks = docks;
        this.ebox = ebox;
    }
}


//UI GRN Class:
class UI {
    static displayGRNs() {
        const grns = Store.getGrns();

        grns.forEach((item) => UI.addGRNToList(item));
    }

    static addGRNToList(item){
        const list = document.querySelector('#grn-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td style="font-weight: bold;">${item.grn}</td>
        <td>${item.desktops}</td>
        <td>${item.notebooks}</td>
        <td>${item.monitors}</td>
        <td>${item.printers}</td>
        <td>${item.servers}</td>
        <td>${item.switches}</td>
        <td>${item.tvs}</td>
        <td>${item.scanners}</td>
        <td>${item.tablets}</td>
        <td>${item.phones}</td>
        <td>${item.mobiles}</td>
        <td>${item.docks}</td>
        <td>${item.ebox}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }

    static deleteGrn(el) {
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    static clearFields() {
        document.querySelector('#grn').value = '';
        document.querySelector('#desktops').value = '';
        document.querySelector('#notebooks').value = '';
        document.querySelector('#monitors').value = '';
        document.querySelector('#printers').value = '';
        document.querySelector('#servers').value = '';
        document.querySelector('#switches').value = '';
        document.querySelector('#tvs').value = '';
        document.querySelector('#scanners').value = '';
        document.querySelector('#tablets').value = '';
        document.querySelector('#phones').value = '';
        document.querySelector('#mobiles').value = '';
        document.querySelector('#docks').value = '';
        document.querySelector('#ebox').value = '';
    }
}
//Store Class:
class Store {
    static getGrns() {
        let grns;
        if(localStorage.getItem('grns') == null) {
            grns = [];
        }else {
            grns = JSON.parse(localStorage.getItem('grns'));
        }
        return grns;
    }

    static addGrn(item) {
        const grns = Store.getGrns();
        grns.push(item);
        localStorage.setItem('grns', JSON.stringify(grns));
    }

    static removeGrn(grn) {
        const items = Store.getGrns();
        items.forEach((item, index) => {
            if(item.grn == grn) {
                items.splice(index, 1);
            }
        });

        localStorage.setItem('items', JSON.stringify(items));
    }
}




//Event: Display GRN
document.addEventListener('DOMContentLoaded', UI.displayGRNs);
//Event: Add GRN
document.querySelector('#grn-form').addEventListener('submit', (e) => {

    //Prevent
    e.preventDefault();

    //Get form values
    const grn = document.querySelector('#grn').value;
    const desktops = document.querySelector('#desktops').value;
    const notebooks = document.querySelector('#notebooks').value;
    const monitors = document.querySelector('#monitors').value;
    const printers = document.querySelector('#printers').value;
    const servers = document.querySelector('#servers').value;
    const switches = document.querySelector('#switches').value;
    const tvs = document.querySelector('#tvs').value;
    const scanners = document.querySelector('#scanners').value;
    const tablets = document.querySelector('#tablets').value;
    const phones = document.querySelector('#phones').value;
    const mobiles = document.querySelector('#mobiles').value;
    const docks = document.querySelector('#docks').value;
    const ebox = document.querySelector('#ebox').value;

    //Validate all fields
    if(grn == '' || desktops == '' || notebooks == '' || monitors == '' || printers == '' || servers == '' || switches == '' || tvs == '' || scanners == '' || tablets == '' || phones == '' || mobiles == '' || docks == '' || ebox == '') {
        alert('Please fill in all fields');
    } else {
        //Create GRN
        const item = new GRNclass(grn, desktops, notebooks, monitors, printers, servers, switches, tvs, scanners, tablets, phones, mobiles, docks, ebox);

        //Add to List
        UI.addGRNToList(item);

        //Add to Store
        Store.addGrn(item);

        //Show Success
        alert('GRN successfully added');

        //Clear fields
        UI.clearFields();
    }
    

});

//Event: Remove GRN
document.querySelector('#grn-list').addEventListener('click', (e) => {
    UI.deleteGrn(e.target)
    alert('GRN REMOVED');
});