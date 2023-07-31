import React from 'react'
import { Header, Schedule, Banner } from '../../components'

export const Home = () => {


    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Banner image="src/assets/Sitio.jpg" />
            <Schedule />
        </div>
    )
}


