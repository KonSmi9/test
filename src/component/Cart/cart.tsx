import React from 'react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useTypedSelector } from '../../redux'
import './cart.css'

export const CartComponent : FC = () => {
    const store = useTypedSelector(state => state.cart)
    console.log(store)
    return(
        <div className={"cart"}>
            <Link className={"menu__a"} to={'/cart'}>
                <img className={"cart__image"} src={"./cart.png"} alt={'Cart'}/>
            </Link>
            <div className={"cart__countProduct"}>
                <span>{store.products.length}</span>
            </div>
        </div>
    )
}