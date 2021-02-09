import React, { useState, useEffect }  from "react";
import {useParams} from 'react-router-dom'
import {ItemList} from '../ItemList/ItemList'
import cervezas from '../../assets/BaseDeDatos/productos'
import './itemlistcontainer.css'

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {categoryName} = useParams();

    useEffect(()=>{
      console.log(categoryName)

    },[categoryName])

  useEffect(()=> {
    const call = new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(cervezas)
      },2000) 
    })
  
    call.then( response => {
        console.log(response)
        if(categoryName === undefined){
        setItems(response)} else {
          const cervezasFiltradas = response.filter(cerveza=> cerveza.category===categoryName)
          setItems(cervezasFiltradas)
        }
    })

  },[categoryName])


  return (
    <>
    <div className="container">
      <ItemList items = {items}/>
      </div>
    </>
  );
};