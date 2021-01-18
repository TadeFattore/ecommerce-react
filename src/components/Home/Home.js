import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import './home.css'

export const Home = () => {

    return (
        <div className='home'>
            <ItemListContainer initial={1} stock={5} />
        </div>

    )
}