import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
  const {data: gifs, loading} = useFetchGifs(category);
  return (
    <>
      <h3> { category } </h3>
      {
        loading && 'Cargando...'
      }
      <div className="card-grid">
          {
            gifs.map((img) => {
              return <GifGridItem title={img.title} url={img.url} key={img.id}></GifGridItem>
            })
          }
      </div>
    </>
  )
}
