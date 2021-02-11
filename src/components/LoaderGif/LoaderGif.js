import React from 'react'
import Loader from '../../img/spinner.gif'
import './loadergif.css'

const LoaderGif = () =>{

    return(
        <div className="loader">
            <img src={Loader} alt="gif-loader" />
        </div>
    )
}

export default LoaderGif;


