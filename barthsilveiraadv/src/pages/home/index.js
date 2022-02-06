import React from 'react'
import Header from '../../components/header'
import ListLinks from '../../data/header/links/links'




export default function Home() {

    return(
        <Header links={ListLinks.getListLinksHome()}></Header>
    )

}