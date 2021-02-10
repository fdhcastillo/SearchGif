import React, {useState} from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
  const [categories,setCategories] = useState(['Dragon Ball']);
  return(
    <>
      <h2 className='title'>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {
        categories.map((category) => {
          return <GifGrid key={category} category={category}></GifGrid>
        })
      }
    </>
  )
}