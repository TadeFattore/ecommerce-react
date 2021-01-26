import React, { useState, useEffect }  from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import './itemdetailcontainer.css'

const items = [
  { 
    id: 123456,
  title: "Hamburguesa Fiesta",
  description: "Hamburguesa con queso chedar, tomate y lechuga",
  price: "400",
  pictureUrl: "https://i.imgur.com/YZBB5R0.jpg"
  },
  { 
    id: 123457,
  title: "Hamburguesa Completa",
  description: "Hamburguesa con queso chedar, huevo, jamón, tomate y lechuga",
  price: "450",
  pictureUrl: "https://i.imgur.com/YZBB5R0.jpg"
  },
  { 
    id: 1234568,
  title: "Hamburguesa Para el Bajón",
  description: "Doble Hamburguesa con queso chedar, panceta y barbacóa",
  price: "500",
  pictureUrl: "https://i.imgur.com/YZBB5R0.jpg"
  }
]

const ItemDetailContainer = ( ) => {
  const [product, setProduct] = useState();

  useEffect(()=> {
    const call = new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(items.filter( i => i.id === 123456))
      },2000) 
    })
  
    call.then( response=> {
        console.log(response)
        setProduct(response)
    })

  },[])


  return (
    <>
    <div className="container">
      <ItemDetail items = {product}/>
      </div>
    </>
  );
};

export default ItemDetailContainer