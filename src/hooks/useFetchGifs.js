import { useEffect, useState } from 'react'
import {getApi} from '../helpers/getApi';

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  })

  useEffect(()=> {
    getApi(category)
      .then( gifs => 
        setTimeout(()=> {
          setState(
            {
              data: gifs,
              loading: false
            }
          )
        },1400)
        )
  },[category])

  return state;
}
