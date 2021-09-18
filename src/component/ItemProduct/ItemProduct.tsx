import React   from 'react'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { IProduct, SetCartAction } from '../../type'
import './ItemProduct.css'

interface ItemProductProps{
    product: IProduct
    onActive: (product:IProduct) => void
}

export const ItemProduct: FC<ItemProductProps> = ({product, onActive}) => {
    const dispatch = useDispatch()
    const onAddCart = (product:IProduct) => {
        onActive(product)
        return{
            type: SetCartAction.ADD_CART,
            payload: product
        }
    }
 
    return(
        <div className={"product-block"} >
            <img className={'product-block__image'} src={product.image} alt={product.name}/>
            <div className={"product-block__name"}>
                   <span>{product.name}</span>
            </div>
            <div className={"product-block__price"}>
                <span>{product.price} ₽</span>
            </div>
            <div className={"product-block__button"}>
                {product.active ?
                    <button className={"button__active"}>
                        <Link to={'/cart'}>Оформить заказ</Link>
                    </button>
                    :
                    <button className={"button"} onClick={()=> dispatch(onAddCart(product))}>
                        Добавить в  корзину
                    </button>
                }

            </div>
        </div>
    )
}