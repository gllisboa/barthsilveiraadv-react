import { useMediaQuery } from 'react-responsive'
import {GiHamburgerMenu} from 'react-icons/gi'
import Link from "../link"
import React, {useState} from "react"
import Style from './style'
import styled from 'styled-components'

export default function Nav(props) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 830px)' })
    let NAV = isTabletOrMobile ? Style.mobile() : Style.web()
    let DIV_HAMBURGER = Style.divHamburguer()

    const [menuMobile, setMenuMobile] = useState()

    const listLinks = props.links.map((link, index) => {
        return(
            <Link typeLink={link.type} id={`id-${link.name}`} href={link.href} key={`${index}-${link.name}`} imgLink={link.img}>{link.name}</Link>
        )})

    function openMobileMenu() {
        let MENU_MOBILE = Style.menuMobile()
        let filterSocialMedia = function(value) {
            return value.type === "socialMedia"
        }
        let filterNoSocialMedia = function(value) {
            return value.type !== "socialMedia"
        }
        let listLinkSocialMedia = props.links.filter(filterSocialMedia)
        let listLinks = props.links.filter(filterNoSocialMedia)
        let listLinksMobile = listLinks.map((link, index) => {
            return(
                <Link typeLink={`${link.type}Mobile`} id={`id-${link.name}`} href={link.href} key={`${index}-${link.name}`} imgLink={link.img}>{link.name}</Link>
            )})
        setMenuMobile(
            <MENU_MOBILE>
                {listLinksMobile}
                <div>
                    {listLinkSocialMedia}
                </div>
            </MENU_MOBILE>
        )
    }

    return (
        isTabletOrMobile ?
        <a onClick={openMobileMenu}>
        <NAV>
            {menuMobile}
            {listLinks[0]}
            <DIV_HAMBURGER>
                <GiHamburgerMenu size={60} color={'white'}/>
            </DIV_HAMBURGER>
        </NAV>
        </a>
        : <NAV>
            {listLinks}
        </NAV>
        )
}
