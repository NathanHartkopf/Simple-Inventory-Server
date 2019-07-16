type Dimensions = {
    height?: number
    width?: number
    length?: number
    unit: Unit
}

export enum Unit {
    millimeter,
    meter,
    inch,
    foot,
    mile
}

export enum COMMANDTYPE {
    createItem,
    getItem,
    updateItem,
    deleteItem
}

export enum ITEM_TYPE {
    inventory,
    tool
}

export interface COMMAND {
    type: COMMANDTYPE
}

export interface CREATE_ITEM extends COMMAND {
    type: COMMANDTYPE.createItem
    item: ITEM
}

export interface GET_ITEM extends COMMAND {
    type: COMMANDTYPE.getItem
    id: number
}

export interface UPDATE_ITEM extends COMMAND {
    type: COMMANDTYPE.updateItem
    item: ITEM
}

type Cost = {
    cost : number
}

export type ITEM = {
    ID?: number
    type: ITEM_TYPE
    title: string
    description: string
    count: number
    dimensions: Dimensions
    cost: Cost
    icon: string
}

export function isItem(thing: any): thing is ITEM {
    return (
        thing.hasOwnProperty("type") &&
        thing.hasOwnProperty("title") &&
        thing.hasOwnProperty("description") &&
        thing.hasOwnProperty("count") &&
        thing.hasOwnProperty("dimensions") &&
        thing.hasOwnProperty("cost") &&
        thing.hasOwnProperty("icon")
    )
}