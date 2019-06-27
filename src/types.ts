type Dimensions = {
    height?: number
    width?: number
    length?: number
    unit: Unit
}

enum Unit {
    millimeter,
    meter,
    inch,
    foot,
    mile
}

enum COMMANDTYPE {
    createItem,
    getItem,
    updateItem,
    deleteItem
}

enum ITEM_TYPE {
    inventory,
    tool
}

interface COMMAND {
    type: COMMANDTYPE
}

interface CREATE_ITEM extends COMMAND {
    type: COMMANDTYPE.createItem
    create: ITEM
}

interface GET_ITEM extends COMMAND {
    type: COMMANDTYPE.getItem
    id: number
}

interface UPDATE_ITEM extends COMMAND {
    type: COMMANDTYPE.updateItem
    update: ITEM
}

type Cost = {
    cost : number
}

export type ITEM = {
    ID: number
    type: ITEM_TYPE
    title: string
    description: string
    count: number
    dimensions: Dimensions
    cost: Cost
}