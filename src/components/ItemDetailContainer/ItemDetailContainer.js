  import React, { useState, useEffect }  from "react"
  import { useParams } from "react-router-dom";
  import  ItemDetail from '../ItemDetail/ItemDetail'
  import './itemdetailcontainer.css'

  const itemList = [
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
    }
  ]

  export const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {itemId} = useParams();

    useEffect(()=> {

      const call = new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve(itemList)
        },2000) 
      })
    
      call.then( response=> {
          console.log(response)
          setItem(response[itemId - 1])
      })

    },[])


    return (
        <>
             <ItemDetail getItem={item} />
        </>
    );
  };
