import { useMediaQuery } from 'react-responsive'
import Link from "../link"
import React, {useState, useEffect}  from "react"
import Style from './style'

export default function Nav(props) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 830px)' })
    const initialState = ''
    const [menuMobile, setMenuMobile] = useState(initialState)
    const setLinkComponentOnList = function(link, index, mobile = false, f = null) {
        let type = `${link.type}`
        if(mobile) {
          type = `${link.type}Mobile`
        }
        return (
            <Link onClick={f} typeLink={`${type}`} id={`id-${link.name}`} href={link.href} key={`${index}-${link.name}`} imgLink={link.img}>{link.name}</Link>
        )
    }

    let NAV = isTabletOrMobile ? Style.mobile() : Style.web()
    if (isTabletOrMobile) {
        var DIV_HAMBURGER = Style.divHamburguer()
        var HAMBURGER_ICON = Style.hamburgerIcon()
    }

    const listLinks = props.links.map((link, index) => setLinkComponentOnList(link, index))

    function closeMobileMenu() {
        setMenuMobile(initialState)
    }

    function openMobileMenu() {
        console.log("openMobileMenu")
        let MENU_MOBILE = Style.menuMobile()
        let filterSocialMedia = function(value) {
            return value.type === "socialMedia"
        }
        let filterNoSocialMedia = function(value) {
            return value.type !== "socialMedia"
        }

        let listLinkMobileSocialMedia = props.links.filter(filterSocialMedia)
            listLinkMobileSocialMedia = listLinkMobileSocialMedia.map((link,index) => setLinkComponentOnList(link,index,true))

        let listLinksMobile = props.links.filter(filterNoSocialMedia)
            listLinksMobile = listLinksMobile.map((link,index) => setLinkComponentOnList(link,index,true,closeMobileMenu))

        let CLOSE_ICON = Style.closeIcon()

        console.log(listLinksMobile)

        setMenuMobile(
            <MENU_MOBILE id="id-menu-mobile">
                <CLOSE_ICON onClick={closeMobileMenu}/>
                {listLinksMobile}
                <div>
                    {listLinkMobileSocialMedia}
                </div>
            </MENU_MOBILE>
        )
    }

    return (
        isTabletOrMobile ?
        <div>
        {menuMobile}
        <a onClick={openMobileMenu}>
        <NAV>
            {listLinks[0]}
            <DIV_HAMBURGER>
                <HAMBURGER_ICON/>
            </DIV_HAMBURGER>
        </NAV>
        </a>
        </div>
        : <NAV>
            {listLinks}
        </NAV>
        )
}
