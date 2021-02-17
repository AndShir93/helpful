import React from 'react'
import MenuHeader from './MenuHeader'
import Contacts from '../components/Contacts'
import Catalog from '../components/Catalog'

export default function MainPage(){
    return(
        <>
            <MenuHeader/>
            <Catalog/>
        </>
    )
}