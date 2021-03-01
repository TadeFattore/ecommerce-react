import React, { useState, useEffect }  from "react";
import {useParams} from 'react-router-dom'
import {ItemList} from '../ItemList/ItemList'
import {getFirestore} from '../../firebase/index'
import  LoaderGif  from '../LoaderGif/LoaderGif'
import './itemlistcontainer.css'

export const ItemListContainer = () => {
  const[loading, setLoading] = useState(true)
  const [items, setItems] = useState([]);
  const {categoryName} = useParams();

  

  useEffect(() => {

  const db = getFirestore();
  const itemsDb = db.collection('items')
  const itemsLimit = itemsDb.limit(12)
  const rubias = itemsDb.where('category','==','Rubias');
  const negras = itemsDb.where('category','==','Negras');
  const rojas = itemsDb.where('category','==','Rojas');
    
    !categoryName &&
      itemsLimit.get()
          .then((query)=>{
            query.size === 0 && console.log('No hay Items para mostrar')
            setItems(query.docs.map(objeto =>{
              return({id:objeto.id, ...objeto.data()})
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
              setLoading(false);
            })
          )

  }, [categoryName])


  return (
    loading ? <LoaderGif /> :
    <>
    <div className="container">
      <ItemList items = {items}/>
      </div>
    </>
  );
};