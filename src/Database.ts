import {
    ITEM
} from './types';
const mysql = require('mysql')

export default class Database {
    private dbClient: any

    public setup(): Promise<undefined> {
        return new Promise(res => {
            this.dbClient = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: 'reindeerfl0tilla',
                database: 'inventory'
            })
            let {
                dbClient
            } = this
    
            dbClient.connect((err: Error) => {
                if (err) throw (err)
                console.log("Connected to DB")
                res()
            })
        })
    }
    //Create Inventory item
        //TODO

    //Get Inventory Item
    public async getInventoryItem(id: number): Promise<any> {
        let query = ""
        if (id == 0) {
            console.log("all")
            query = `SELECT * from \`inventory\``
        } else {
            console.log("select")
            query = `SELECT * from \`inventory\` WHERE \`ID\` = "${id}"`
        }

        return new Promise(res => {
            this.dbClient.query(query, (err: Error, results: ITEM[]) => {
                if (err) throw (err)
                if (results.length == 0) {
                    res([])
                } else {
                    res(results)
                }
            })
        })
    }

    //Update Inventory Item
        //TODO

    //Delete Inventory Item
        //TODO

}