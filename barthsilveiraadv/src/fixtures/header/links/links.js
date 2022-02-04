import LogosBase64 from "./logosBase64"

const homeLink = {
    href: "#home",
    img: LogosBase64.homeLogo(),
    name: "Home",
    type: "home",
}
const filosofyLink = {
    href: "#filosofia",
    img: null,
    name: "Filosofia",
    type: "link",
}
const actionTypesLink = {
    href: "#action-types",
    img: null,
    name: "Áreas de Atuação",
    type: "link",
}
const teamLink = {
    href: "#team",
    img: null,
    name: "Nossa Equipe",
    type: "link",
}
const contactLink = {
    href: "#contact",
    img: null,
    name: "Fale Conosco",
    type: "link",
}
const faceLink = {
    href: "https://www.facebook.com/nicolibarthadv-106482787758264",
    img: LogosBase64.faceWhite(),
    name: "Facebook - Escritorio Advocacia Florianópolis",
    type: "socialMedia",
}
const instaLink = {
    href: "https://www.instagram.com/nicolibarthadv/",
    img: LogosBase64.instaWhite(),
    name: "Instagram - Escritorio Advocacia Florianópolis",
    type: "socialMedia",
}

export default class Links {
    static getListLinksHome() {
        return (
            [homeLink,
            filosofyLink,
            actionTypesLink,
            teamLink,
            contactLink,
            faceLink,
            instaLink]
        )
    }
}
