import React, { useState, useEffect }  from "react";
import {ItemList} from '../ItemList/ItemList'
import './itemlistcontainer.css'

const products = [
  { 
    id: 1,
  title: "Hamburguesa Fiesta",
  description: "Hamburguesa con queso chedar, tomate y lechuga",
  price: "400",
  pictureUrl: "https://i.imgur.com/YZBB5R0.jpg",
  stock: 10,
  category: 1
  },
  { 
    id: 2,
  title: "Hamburguesa Completa",
  description: "Hamburguesa con queso chedar, huevo, jamón, tomate y lechuga",
  price: "400",
  pictureUrl: "https://i.imgur.com/YZBB5R0.jpg",
  sotck: 15,
  category: 2
  },
  { 
    id: 3,
  title: "Hamburguesa Para el Bajón",
  description: "Doble Hamburguesa con queso chedar, panceta y barbacóa",
  price: "400",
  pictureUrl: "https://i.imgur.com/YZBB5R0.jpg",
  stock: 8,
  category: 1
  },
  { 
    id: 4,
  title: "Hamburguesa Completa",
  description: "Hamburguesa con queso chedar, huevo, jamón, tomate y lechuga",
  price: "400",
  pictureUrl: "https://i.imgur.com/YZBB5R0.jpg",
  sotck: 15,
  category: 2
  },
  { 
    id: 5,
  title: "Hamburguesa Completa",
  description: "Hamburguesa con queso chedar, huevo, jamón, tomate y lechuga",
  price: "400",
  pictureUrl: "https://i.imgur.com/YZBB5R0.jpg",
  sotck: 15,
  category: 2
  },
  { 
    id: 6,
  title: "Hamburguesa Completa",
  description: "Hamburguesa con queso chedar, huevo, jamón, tomate y lechuga",
  price: "400",
  pictureUrl: "https://i.imgur.com/YZBB5R0.jpg",
  sotck: 15,
  category: 2
  },
  { 
    id: 7,
  title: "Hamburguesa Completa",
  description: "Hamburguesa con queso chedar, huevo, jamón, tomate y lechuga",
  price: "400",
  pictureUrl: "https://i.imgur.com/YZBB5R0.jpg",
  sotck: 15,
  category: 2
  },
  { 
    id: 8,
  title: "Hamburguesa Completa",
  description: "Hamburguesa con queso chedar, huevo, jamón, tomate y lechuga",
  price: "400",
  pictureUrl: "https://i.imgur.com/YZBB5R0.jpg",
  sotck: 15,
  category: 2
  },
  { 
    id: 9,
  title: "Hamburguesa Completa",
  description: "Hamburguesa con queso chedar, huevo, jamón, tomate y lechuga",
  price: "400",
  pictureUrl: "https://i.imgur.com/YZBB5R0.jpg",
  sotck: 15,
  category: 2
  },
  { 
    id: 10,
  title: "Hamburguesa Completa",
  description: "Hamburguesa con queso chedar, huevo, jamón, tomate y lechuga",
  price: "400",
  pictureUrl: "https://i.imgur.com/YZBB5R0.jpg",
  sotck: 15,
  category: 2
  },
  { 
    id: 11,
  title: "Hamburguesa Completa",
  description: "Hamburguesa con queso chedar, huevo, jamón, tomate y lechuga",
  price: "400",
  pictureUrl: "https://i.imgur.com/YZBB5R0.jpg",
  sotck: 15,
  category: 2
  }
]

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(()=> {
    const call = new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(products)
      },2000) 
    })
  
    call.then( response => {
        console.log(response)
        setItems(response)
    })

  },[])


  return (
    <>
    <div className="container">
      <ItemList items = {items}/>
      </div>
    </>
  );
};