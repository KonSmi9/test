import React, { FC }  from 'react'
import { useEffect, useState } from 'react';
import { ItemProduct } from '../../component/ItemProduct/ItemProduct';
import { ListProduct } from '../../component/ListProduct/ListProduct';
import './CatalogPage.css'
import { IProduct } from '../../type';

export const CatalogPage: FC = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    useEffect( () => {
            fetch('https://appevent.ru/dev/task1/catalog')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setProducts(data.items)
                })
    },[])

    const onActive = (productItem: IProduct) => {
            const newArr:IProduct[] = [...products]
            newArr.map(product => {
                if(product.id === productItem.id){
                    product.active = true
                }
            })
            setProducts(newArr)
    }
    return(
        
        <div className={"catalog-page"}>
            <ListProduct products={products} executor={(item) => <ItemProduct onActive={() => onActive(item)} key={item.id} product={item}/>}/>
        </div>
    )
}