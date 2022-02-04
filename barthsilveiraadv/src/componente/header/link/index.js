import React from "react"
import styled from 'styled-components';

const aStyle = `
color: rgba(242, 242, 242, 0.9);
cursor: pointer;
font-size: 3vh;
margin-right: 1.5vw;
text-decoration: none;
width: fit-content;
font-family: 'Comfortaa', Helvetica, sans-serif;
`
const A = styled.a`
${aStyle}
`
const A_IMG_HOME = styled.a`
${aStyle}
width: 32vw;
`
const IMG = styled.img`
float: left;
height: 6vh;
left: 4vw;
position: relative;
`
const IMG_SOCIAL = styled.img`
height: 5vh;
`

export default function Link(props) {
    switch(props.typeLink) {
        case "home":
            return (
                <A_IMG_HOME id={props.id} href={props.href} className="link" src={props.imgLink}>
                    <IMG src={props.imgLink}></IMG>
                </A_IMG_HOME>
                )
        case "socialMedia":
            return (
                <A id={props.id} href={props.href} className="link" src={props.imgLink}>
                    <IMG_SOCIAL src={props.imgLink}></IMG_SOCIAL>
                </A>
                )
        default:
            return (
                <A id={props.id} href={props.href} className="link">
                    {props.children}
                </A>
                )
    }
}
