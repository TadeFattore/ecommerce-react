  import React, { useState, useEffect }  from "react"
  import { useParams } from "react-router-dom";
  import  ItemDetail from '../ItemDetail/ItemDetail'
  import cervezas from '../../assets/BaseDeDatos/productos'
  import './itemdetailcontainer.css'

  export const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {itemId} = useParams();

    useEffect(()=> {

      const call = new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve(cervezas)
        },2000) 
      })
    
      call.then( response=> {
          console.log(response)
          setItem(response[itemId - 1])
      })

    },[itemId])


    return (
        <>
             <ItemDetail getItem={item} />
        </>
    );
  };
