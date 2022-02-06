import React from "react"
import Nav from "./nav"


export default function Header(props) {
    return (
        <header className="header">
            <Nav links={props.links}> </Nav>
        </header>
        )
}
