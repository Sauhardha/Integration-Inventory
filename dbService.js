const mysql = require('mysql');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if (err){
        console.log(err.message);
    }
    console.log('db ' + connection.state);
})

class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }

    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM grn_table";

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            //console.log(response);
            return response;

        }catch(error){
            console.log(error);
        }
    }

    async insertNewGrn(grnItem) {
        try{
            //const dateAdded = new Date();
            const insertId = await new Promise((resolve, reject) => {
                const query = 'INSERT INTO `grn_table` (`GRN`, `Desktops`, `Notebooks`, `Monitors`, `Printers`, `Servers`, `Switches`, `TVs`, `Scanners`, `Tablets`, `Phones`, `Mobiles`, `DockStations`, `Ebox`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?);';
                connection.query(query, grnItem, (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.insertId);
                })
            });
            console.log(insertId);
            return {
                id : insertId,
                GRN : grnItem[0],
                Desktops : grnItem[1],
                Notebooks : grnItem[2],
                Monitors : grnItem[3],
                Printers : grnItem[4],
                Servers : grnItem[5],
                Switches : grnItem[6],
                TVs : grnItem[7],
                Scanners : grnItem[8],
                Tablets : grnItem[9],
                Phones : grnItem[10],
                Mobiles : grnItem[11],
                DockStations : grnItem[12],
                Ebox : grnItem[13]

            };
        } catch (error){
            console.log(error);
        }
    }

    async deleteRowById(id) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = 'DELETE FROM `grn_table` WHERE id = ?';
                connection.query(query, [id], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                })
            });
    
            return response === 1 ? true : false;
        } catch (error) {
            console.log(error)
            return false;
        }
        
    }

    async updateById(id, grnU, desktopsU, notebooksU, monitorsU, printersU, serversU, switchesU, tvsU, scannersU, tabletsU, phonesU, mobilesU, docksU, eboxU) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = 'UPDATE `grn_table` SET GRN = ?, Desktops = ?, Notebooks = ?, Monitors = ?, Printers = ?, Servers = ?, Switches = ?, TVs = ?, Scanners = ?, Tablets = ?, Phones = ?, Mobiles = ?, DockStations = ?, Ebox = ? WHERE id = ?';
                connection.query(query, [grnU, desktopsU, notebooksU, monitorsU, printersU, serversU, switchesU, tvsU, scannersU, tabletsU, phonesU, mobilesU, docksU, eboxU, id], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                })
            });
    
            return response === 1 ? true : false;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    async countAllItems() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT SUM(Desktops + Notebooks + Monitors + Printers + Servers + Switches + TVs + Scanners + Tablets + Phones + Mobiles + DockStations + Ebox) AS total_sum FROM `grn_table`";

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            //console.log(response);
            return response;

        }catch(error){
            console.log(error);
        }
    }
}

module.exports = DbService;