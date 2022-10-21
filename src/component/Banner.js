import React,{useState,useEffect} from 'react';
import Image from '../banner.jpg';
import axios from 'axios';
function Banner() {
  const [movie,setMovie] =useState([])

  useEffect(function(){
      axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=f7a4f1854e255187cf933a91447f998a&page=1').
      then((res)=>
      {  console.table(res.data.results)
        setMovie(res.data.results[0]);
      }
      )

  },[])
  return (
    <div>
    <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})]    h-[40vh]  md:h-[60vh] rounded-lg  flex items-end   bg-cover bg-center  `}>
    <div className=' w-full bg-gray-900 bg-opacity-50 text-center text-white font-bold py-2 rounded-lg m-2 text-xl'>{movie.title}</div>

    </div>
    </div>
    
  )
}

export default Banner;
