import { IProduct, SetCartAction } from "../../../type";

interface IState {
    products: IProduct[],
}
interface ActionCartReducer{
    type: string;
    payload: IProduct
}

const initialState : IState = {
    products: [],
}

export default function CartReducer(state = initialState, action:ActionCartReducer) {
    state.products = JSON.parse(localStorage.getItem('cartList') || '')
    switch (action.type){
        case SetCartAction.ADD_CART :
            const cartListAdd: IProduct[] = [...state.products, action.payload]
            localStorage.setItem('cartList', JSON.stringify(cartListAdd))
            return {
                products: cartListAdd
            }
        case SetCartAction.DEC_CART :
            const cartListDel: IProduct[] = [...state.products.filter(product => product.id !== action.payload.id) ]
            localStorage.setItem('cartList', JSON.stringify(cartListDel))
            return {
                products: cartListDel
            }
        case SetCartAction.SUM_CART:
            let sum :number = 0
            state.products.forEach(product => {
                sum += product.price
            })
            localStorage.setItem('sum', JSON.stringify(sum))
            return state

        default:
            return state
    }
}