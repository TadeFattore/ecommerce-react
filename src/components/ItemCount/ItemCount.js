import React,{useState} from 'react'
import './itemcount.css'

const ItemCount = ({ initial, stock, onAdd, count}) => {



  return (
    <>
      <div className="contador">
        <button className='btn' onClick={initial} > - </button>
        <p className='contadorito'>{count}</p>
        <button className='btn' onClick={stock} > + </button>
      </div>
 
    </>
  )
};

export default ItemCount

