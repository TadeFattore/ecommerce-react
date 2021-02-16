import React, { useState, useEffect }  from "react";
import {useParams} from 'react-router-dom'
import {ItemList} from '../ItemList/ItemList'
import {getFirestore} from '../../firebase/index'
import  LoaderGif  from '../LoaderGif/LoaderGif'
import './itemlistcontainer.css'

export const ItemListContainer = () => {
  const[loading, setLoading] = useState('')
  const [items, setItems] = useState([]);
  const {categoryName} = useParams();

  

  useEffect(() => {

  const db = getFirestore();
  const itemsDb = db.collection('items');
  const rubias = itemsDb.where('category','==','Rubias');
  const negras = itemsDb.where('category','==','Negras');
  const rojas = itemsDb.where('category','==','Rojas');
    
    !categoryName &&
      setLoading(true)
        itemsDb.get()
          .then((query)=>{
            query.size === 0 && console.log('No hay Items para mostrar')
            setItems(query.docs.map(item =>{
              return({id:item.id, ...item.data()})
            }))
          })
          .catch((err)=>{
            console.log('Ha ocurrido un error: ',err);
          })
          .finally(()=>{
            setLoading(false)
          });

          categoryName === 'Rubias' && (
            rubias.get().then((q)=>{
              (q.size === 0) && console.log('No hay cervezas Rubias')
              setItems(q.docs.map(objeto=>{
                return({id:objeto.id, ...objeto.data()})
              }))

            })
            .finally(()=>{
              console.log('Estas son las Rubias')
              setLoading(false);
            })
          )

          categoryName === 'Negras' && (
            negras.get().then((q)=>{
              (q.size === 0) && console.log('No hay cervezas Negras')
              setItems(q.docs.map(objeto=>{
                return({id:objeto.id, ...objeto.data()})
              }))

            })
            .finally(()=>{
              console.log('Estas son las Negras')
              setLoading(false);
            })
          )

          categoryName === 'Rojas' && (
            rojas.get().then((q)=>{
              (q.size === 0) && console.log('No hay cervezas Rojas')
              setItems(q.docs.map(objeto=>{
                return({id:objeto.id, ...objeto.data()})
              }))

            })
            .finally(()=>{
              console.log('Estas son las Rojas')
              setLoading(false);
            })
          )

  }, [categoryName])

  // useEffect(() => {
  //   let db = getFirestore();
  //   let itemsDb = db.collection("items")
  //   itemsDb.get()
  //     .then((querySnapshot)=>{
  //       querySnapshot.size === 0 && console.log('No hay items')
  //       let arrayItems = querySnapshot.docs.map((doc)=>{
  //         return({
  //           id: doc.id,
  //           ...doc.data()
  //         })  
  //       })
  //       console.log('arrayItems',arrayItems)
  //       setItems(arrayItems)

  //     })
  //     .catch((error)=>{
  //       console.log('occurrio un error: ', error);
  //     })
      
  // }, [])

  // useEffect(()=>{
  //   console.log(categoryName)

  // },[categoryName])

  // useEffect(()=> {
  //   const call = new Promise((resolve,reject) => {
  //     setTimeout(() => {
  //       resolve(cervezas)
  //     },2000) 
  //   })
  
  //   call.then( response => {
  //       console.log(response)
  //       if(categoryName === undefined){
  //       setItems(response)} else {
  //         const cervezasFiltradas = response.filter(cerveza=> cerveza.category===categoryName)
  //         setItems(cervezasFiltradas)
  //       }
  //   })

  // },[categoryName])


  return (
    loading ? <LoaderGif /> :
    <>
    <div className="container">
      <ItemList items = {items}/>
      </div>
    </>
  );
};