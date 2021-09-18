import React from 'react'
import './ListProduct.css'
interface ListProductProps<T>{
    products: T[]
    executor:(item: T) => React.ReactNode
}
export function ListProduct<T>(props:ListProductProps<T>) {
    return(
        <div className={"list-products"}>
            {props.products.map(props.executor)}
        </div>
    )
}