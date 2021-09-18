import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { CartItemProduct } from '../../component/CartItemProduct/CartItemProduct'
import { CartListProduct } from '../../component/CartListProduct/CartListProduct'
import { useTypedSelector } from '../../redux'
import {IProduct, SetCartAction } from '../../type'
import { EmptyPage } from '../EmptyPage/EmptyPage'
import './CartPage.css'
export const CartPage: FC  = () => {
    const store = useTypedSelector(state => state.cart)
    const dispatch = useDispatch()
    const {products} = store
    

    const onDelProduct = (product: IProduct) => {
        dispatch({type: SetCartAction.DEC_CART, payload: product})
        dispatch({type: SetCartAction.SUM_CART})
    }
    
    

    return(
        <div className={"cart-page"}>
            {products.length === 0 ?
               <EmptyPage/>
                :
                <>
                  <CartListProduct products={products} executor = {(product) => <CartItemProduct product={product} key= {product.id} onDelete={()=> onDelProduct(product)}/>}/>
                </>
            }
        </div>

    )
}