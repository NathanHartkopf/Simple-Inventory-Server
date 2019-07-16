//ITEM CRUD ROUTES
import Item from '../controllers/itemController'

export default (app:any) => {
    app.route('/item/create')
        .post(Item.createItem)
    
    app.route('/item/get')
        .get(Item.getItem)
    
    app.route('/item/update')
        .post(Item.updateItem)
    
    app.route('/item/delete')
        .post(Item.deleteItem)
}