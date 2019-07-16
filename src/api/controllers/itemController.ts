import Database from '../../Database';
import { isItem, ITEM } from '../../types';

const DB = new Database()
DB.setup()

export default {
    createItem : (req: any, res: any) => {
        if (isItem(req.body)) {
            DB.createItem(req.body).then((insertId : any) => {
                res.end(JSON.stringify(insertId))
            })
        } else {
            res.end("Invalid ITEM")
        }
    },
    getItem : (req: any, res: any) => {
        let id = Number(req.headers.itemid)
        if (!isNaN(id) && id > -1){
            DB.getItem(req.headers.itemid).then(result => {
                res.end(JSON.stringify(result))
            })
        } else {
            res.end("Invalid ID")
        }
    },
    updateItem : (req: any, res: any) => {
        let item = req.body as ITEM
            if (isItem(item)) {
                DB.updateItem(item).then(result => {
                    res.end(JSON.stringify(result))
                })
            } else {
                res.end("Invalid ITEM")
            }
    },
    deleteItem : (req: any, res: any) => {
        let id = Number(req.headers.itemid)
        if (!isNaN(id) && id > -1) {
            DB.deleteItem(req.headers.itemid).then(result => {
                res.end(JSON.stringify(result))
            })
        } else {
            res.end("Invalid ID")
        }
    }
}