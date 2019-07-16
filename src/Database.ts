import { ITEM } from './types';
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
    //Create item
    public async createItem(item: ITEM) {
        let { type, title, description, count, dimensions, cost} = item
        let query = `INSERT INTO \`inventory\` (type, title, description, count, dimensions, cost) VALUES ('${type}', '${title}', '${description}', '${count}', '${JSON.stringify(dimensions)}', '${JSON.stringify(cost)}')`

        return new Promise(res => {
            this.dbClient.query(query, (err: Error, result: any, fields : any) => {
                if (err) throw(err)
                console.log("Created Item. ID:", result.insertId)
                res(result.insertId)
            })
        })

    }

    //Get Item
    public async getItem(id: number): Promise<ITEM[]> {
        let query = ""
        if (id == 0) {
            query = `SELECT * from \`inventory\``
        } else {
            query = `SELECT * from \`inventory\` WHERE \`ID\` = "${id}"`
        }

        return new Promise(res => {
            this.dbClient.query(query, (err: Error, result: ITEM[]) => {
                if (err) throw (err)
                if (result.length == 0) {
                    res([])
                } else {
                    res(result)
                }
            })
        })
    }

    //Update Item
    public async updateItem (item: ITEM): Promise<any> {
        return new Promise(res => {
            let { ID, type, title, description, count, dimensions, cost, icon } = item
            let query = `UPDATE \`inventory\` SET type="${type}", title="${title}", description="${description}", count="${count}", dimensions="${dimensions}", cost="${cost}", icon="${icon}" WHERE id="${ID}"`
            this.dbClient.query(query, (err: Error, result: any) => {
                console.log(result)
                res(result)
            })
        })
    }

    //Delete Item
    public async deleteItem (id: number): Promise<number> {
        return new Promise(res => {
            let query = `DELETE from \`inventory\` WHERE \`ID\` = "${id}"`
            this.dbClient.query(query, (err: Error, result: any) => {
                console.log(result)
                res(result)
            })

        })
    }
}