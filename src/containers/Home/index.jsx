import React from 'react'
import { Header, Schedule } from '../../components'
import { Banner } from './styles'

export const Home = () => {


    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Banner />
            <Schedule />
        </div>
    )
}


