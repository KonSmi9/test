import React from 'react'
import { FC } from 'react'
import  './EmptyPage.css'
export const EmptyPage : FC = () => {
    return(
        <div className={"empty-page"}>
            <h1 className={"cart-page_title"}>Корзина пуста</h1>
        </div>
    )
}