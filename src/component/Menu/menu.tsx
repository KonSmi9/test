import React, { FC } from "react"
import { Link } from "react-router-dom"
import './menu.css'
interface ArrLink{
    aLink: string,
    title: string,
}
export const MenuCoponent : FC = () => {
    const arrLink: ArrLink[] = [
        { aLink: '/', title: 'Каталог'},
    ]
    return(
        <div className={"menu"}>
                <ul className={"menu__ul"}>
                    {arrLink.map((link, index) => {
                        return(
                            <li className={"menu__li"} key={index}>
                                <Link className={"menu__a"} to={link.aLink}>{link.title}</Link>
                            </li>
                        )
                    })}
                </ul>
        </div>

    )
}