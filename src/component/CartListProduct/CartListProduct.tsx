import React, { useEffect, useState }  from 'react'
import { useDispatch } from 'react-redux'
import { SetCartAction } from '../../type'
import './CartListProduct.css'
interface CartListProductProds<T>{
    products: T[],
    executor:(item: T) => React.ReactNode
}
export function CartListProduct<T>(props:CartListProductProds<T>) {
    const dispatch = useDispatch()
    const {products,executor} = props
    const [sum, setSum] =  useState(localStorage.getItem('sum'))
    useEffect(()=>{
        dispatch({type: SetCartAction.SUM_CART})
        setSum(localStorage.getItem('sum'))
    }, [products, sum, dispatch])


    return (
        <>
            <h1>Страница Корзины</h1>
            <table className={"table"}>
                <tbody>
                    {products.map(executor)}
                </tbody>
            </table>
            <h1>Итог: {sum}</h1>
        </>
    )
}


