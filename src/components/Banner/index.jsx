import React from 'react'
import { BannerPages } from './styles'

export const Banner = ({ image, page_title, description }) => {

    return (
        <BannerPages image={image}>
            <h2 className='gradient'>{page_title}</h2>
            <p className='gradient'>{description}</p>
        </BannerPages>
    )
}

