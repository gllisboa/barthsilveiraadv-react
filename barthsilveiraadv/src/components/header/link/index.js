import React from "react"
import Style from './style'


export default function Link(props) {
    const A = Style.link()

    switch(props.typeLink) {
        case "home":
            const A_IMG_HOME = Style.linkImgHome()
            const IMG = Style.img()
            return (
                <A_IMG_HOME id={props.id} href={props.href}  src={props.imgLink}>
                    <IMG src={props.imgLink}></IMG>
                </A_IMG_HOME>
                )
        case "homeMobile":
            const A_IMG_HOME_MOBILE = Style.linkImgHomeMobile()
            const IMG_MOBILE = Style.imgMobile()
            return (
                <A_IMG_HOME_MOBILE onClick={props.onClick} id={props.id} href={props.href}  src={props.imgLink}>
                    <IMG_MOBILE src={props.imgLink}></IMG_MOBILE>
                </A_IMG_HOME_MOBILE>
                )
        case "socialMedia":
            const IMG_SOCIAL = Style.imgSocial()
            return (
                <A id={props.id} href={props.href}  src={props.imgLink}>
                    <IMG_SOCIAL src={props.imgLink}></IMG_SOCIAL>
                </A>
                )
        case "socialMediaMobile":
            const IMG_SOCIAL_MOBILE = Style.imgSocial()
            return (
                <A id={props.id} href={props.href}  src={props.imgLink}>
                    <IMG_SOCIAL_MOBILE src={props.imgLink}></IMG_SOCIAL_MOBILE>
                </A>
                )
        case "linkMobile":
            const A_MOBILE = Style.linkMobile()
            return (
                <A_MOBILE onClick={props.onClick} id={props.id} href={props.href} >
                    {props.children}
                </A_MOBILE>
                )
        default:
            return (
                <A id={props.id} href={props.href} >
                    {props.children}
                </A>
                )
    }
}
