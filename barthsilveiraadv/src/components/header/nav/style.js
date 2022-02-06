import styled from "styled-components"

let styleDefault = `
background-color: rgba(4,7,7,0.9);
`
export default class NavStyle {

    static web() {
        return (
            styled.nav`
            ${styleDefault}
            align-items: center;
            display: flex;
            height: 14vh;
            justify-content: center;
            position: sticky;
            text-align: center;
            top: 0;
            width: 100%;
            `
        )
    }

    static mobile() {
        return (
            styled.nav`
            ${styleDefault}
            align-items: center;
            bottom: 0;
            display: flex;
            height: 10vh;
            position: fixed;
            top: unset;
            width: 100%;
            z-index: 999999;
            `
        )
    }

    static menuMobile() {
        return(
            styled.nav`
            ${styleDefault}
            align-items: center;
            display: flex;
            flex-direction: column;
            height: 90vh;
            justify-content: center;
            position: fixed;
            top: 0;
            width: 100vw;
            `
        )
    }

    static divHamburguer() {
        return (
            styled.div`
            position: absolute;
            right: 10vw;
            width: fit-content;
            `
        )
    }
}