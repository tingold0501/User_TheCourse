/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../component/Header'
import OurSuccess from '../component/OurSuccess'
import CloudSoftWare from '../component/CloudSoftWare'
import TOTC from '../component/TOTC'
import Footer from '../component/Footer'
import OurFeatures from '../component/OurFeatures'
function Home() {
    return (
        <div>
            <Header/>
            <OurSuccess/>
            <CloudSoftWare/>
            <TOTC/>
            <OurFeatures/>
            <Footer/>
        </div>
    )
}

export default Home