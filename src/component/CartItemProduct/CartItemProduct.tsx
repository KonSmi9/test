import React, { FC } from 'react'
import { IProduct } from '../../type'
import './CartItemProduct.css'

interface CartItemProductProps{
   product: IProduct
   onDelete: (product:IProduct) => void
}
export const CartItemProduct : FC <CartItemProductProps> = ({product, onDelete}) =>{
    return(
        <tr key={product.id}>
            <td className={"table__image"}><img className ="image" src={product.image} alt={product.name}/></td>
            <td className={"table__name"}>{product.name}</td>
            <td className={"table__price"}>{product.price} ₽</td>
            <td className={"table__button"}><button className={"button__del"}  onClick = {() => onDelete(product)}>Убрать</button></td>
        </tr>
    )
}
