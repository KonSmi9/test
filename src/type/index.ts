export interface IProduct {
    id: number,
    image: string,
    name: string,
    price: number,
    active?:boolean
}
export enum SetCartAction{
    ADD_CART = "ADD_CART",
    DEC_CART = "DEC_CART",
    SUM_CART = "SUM_CART",
    LOADING_CART="LOADING_CART"
}
