import React from 'react'
import { useEffect,useState } from 'react'
import {API_key,ImageURL} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'

function Banner() {
  const [movie, setmovie] = useState()
  
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_key}&language=en-US`).then((response)=>{
      console.log(response.data)
      const movies = response.data.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      setmovie(movies[randomIndex]);
    })
  
  }, [])
  return (
    <div 
    style={{backgroundImage:`url(${movie ? ImageURL+movie.backdrop_path:""})`}}
    className='banner'>
        <div className='content'>
          <div className="texts">
            <h1 className="title">{movie? movie.title:""}</h1>
            <div className="banner_button">
                <button className="button">Play</button>
                <button className="button">Mylist</button>
            </div>

            <h1 className="discription">{movie? movie.overview:""}</h1>
            </div>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner