//GRN Class:
class GRNclass {
    constructor(grn, desktops, notebooks, monitors, printers, servers, switches, tvs, scanners, tables, phones, mobiles, docks, ebox)
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
        const StoredGRNs = [
            {
                grn: '12345',
                desktops: '3',
                notebooks: '20',
                monitors: '0',
                printers: '0',
                servers: '0',
                switches: '0',
                tvs: '0',
                scanners: '0',
                tablets: '0',
                phones: '12',
                mobiles: '0',
                docks: '0',
                ebox: '2'
            },
            {
                grn: '12873',
                desktops: '3',
                notebooks: '20',
                monitors: '0',
                printers: '0',
                servers: '0',
                switches: '0',
                tvs: '0',
                scanners: '0',
                tablets: '0',
                phones: '12',
                mobiles: '0',
                docks: '0',
                ebox: '2'
            }
        ];
        const grns = StoredGRNs;

        grns.forEach((item) => UI.addGRNToList(item));
    }

    static addGRNToList(item){
        const list = document.querySelector('#grn-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${item.grn}</td>
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
}
//Store Class:

//Event: Display GRN
document.addEventListener('DOMContentLoaded', UI.displayGRNs);
//Event: Add GRN

//Event: Remove GRN