import React, { FC } from "react"
import './header.css'
export const HeaderBlock: FC = ({children}) => {
    return (
        <header className={"header"}>
            {children}
        </header>
    )
}