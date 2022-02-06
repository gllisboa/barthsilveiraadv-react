import styled from 'styled-components';
const fontSizeDefault = `font-size: 3vh;`
const aStyle = `
color: rgba(242, 242, 242, 0.9);
cursor: pointer;
margin-right: 1.5vw;
text-decoration: none;
width: fit-content;
`

export default class StyleLink {

    static link() {
        return(
            styled.a`
            ${fontSizeDefault}
            ${aStyle}
            `
        )
    }

    static linkMobile() {
        return(
            styled.a`
            ${aStyle}
            font-size: 4vh;
            padding: 2.8vh;
            `
        )
    }

    static linkImgHome() {
        return (
            styled.a`
            ${fontSizeDefault}
            ${aStyle}
            width: 32vw;
            `
        )
    }

    static linkImgHomeMobile() {
        return (
            styled.a`
            ${aStyle}
            display: contents;
            width: 100%;
            `
        )
    }

    static img() {
        return (
            styled.img`
            float: left;
            height: 6vh;
            left: 4vw;
            position: relative;
            `
        )
    }

    static imgMobile() {
        return (
            styled.img`
            height: 14vh;
            `
        )
    }

    static imgSocial() {
        return (
            styled.img`
            height: 5vh;
            `
        )
    }
}