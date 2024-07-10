import React, { useEffect, useState } from 'react';
import Youtube from 'react-youtube'
import './RowPost.css';
import { API_key, ImageURL } from '../../constants/constants';
import axios from '../../axios';

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId,setUrlId]=useState('')

  useEffect(() => {
    axios.get(props.url)
      .then(response => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch(err => {
        // alert('Network Error')
        console.error('Failed to fetch data:', err);
      });
  }, [props.url]); // Include props.url in the dependency array
  const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    }
    const handleMovie=(id)=>{
      axios.get(`/movie/${id}/videos?api_key=${API_key}&language=en-US`).then(response=>{
        if(response.data.results.length!==0){
          setUrlId(response.data.results[0])
        }
        else{
          console.log('Trailor not available')
        }
      })

    }

  return (
    <div className='row'>
      <h2 className="title">{props.title}</h2>
      <div className="posters">
        {
          movies.map((obj) => (
            <img 

              onClick={()=>handleMovie(obj.id)}
              className={props.isSmall ? 'smallposter' : 'poster'} 
              src={`${ImageURL}${obj.backdrop_path}`} 
              alt="poster" 
            />
          ))
        }
      </div>
      { urlId && <Youtube videoId={urlId.key}  opts={opts} />}
    </div>
  );
}

export default RowPost;
