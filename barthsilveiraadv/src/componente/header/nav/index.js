import React from "react"
import Link from "../link"
import styled from "styled-components"

const NAV = styled.nav`
align-items: center;
background-color: rgba(4,7,7,0.9);
display: flex;
height: 14vh;
justify-content: center;
position: sticky;
text-align: center;
top: 0;
width: 100%;
`

export default function Nav(props) {
    const listLinks = props.links.map((link, index) => {
        return(
            <Link typeLink={link.type} id={`id-${link.name}`} href={link.href} key={`${index}-${link.name}`} imgLink={link.img}>{link.name}</Link>
        )})
    return (
        <NAV className="menu-header">
            {listLinks}
        </NAV>
        )
}
