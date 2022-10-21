import React ,{useState,useEffect} from 'react'
import Image from "../banner.jpg";
import  Thumbnail from './Thumbnail.css';
import $ from 'jquery';
import axios from 'axios';
import {  Oval } from 'react-loader-spinner';
import Pagination from './Pagination';
function Movie() {
  const [movies,setMovies] =useState([])
  let [pageNumber,setPage]=  useState(1);
  const [hover,setHover]=useState('')
  const [favourite,setFavourite]=useState([])
  function goAhead(){
    setPage (pageNumber+1);
  }
  function goback(){
    if(pageNumber>1){
      setPage(pageNumber-1);
    }
  }

  useEffect(function () {


    let oldFav=localStorage.getItem("imdb");
    oldFav=JSON.parse(oldFav)
    setFavourite([...oldFav])

    axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=5540e483a20e0b20354dabc2d66a31c9&page=${pageNumber}`).then((res) => {
        console.table(res.data.results)
        setMovies(res.data.results);
     
    }
    )
}, [pageNumber])

let add=(movie) => {
  let newArray=[...favourite,movie]
  setFavourite([...newArray])
  localStorage.setItem("imdb",JSON.stringify(newArray));
}

 let del =(movie) =>{
   let newArray=favourite.filter((m)=>m.id!=movie.id)
   setFavourite([...newArray])
   localStorage.setItem("imdb",JSON.stringify(newArray));
 }

  return (
    <>
      <div className='mb-8 text-center'>
      <div className='mt-8 mb-8 font-bold text-3xl text-center '>Trending Movies</div>
     {
     
        movies.length==0 ?
        <div className='flex justify-center'>
        <Oval
        height="80"
        width="80"
        radius="9"
        color="gray"
        secondaryColor='gray'
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      /> 
    </div> :
      <div className='flex flex-wrap justify-center '>
              {movies.map((movie) => (
                <div className={`bg-[url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})]   max-w-full h-auto rounded-lg md:h-[30vh] md:w-[250px] h-[25vh] w-[150px] flex items-end m-4 hover:scale-110 ease-out duration-300 bg-center bg-cover relative`}
                onMouseEnter={()=>{setHover(movie.id) 
                  console.log(movie.id)}}
                  onMouseLeave={()=>setHover("")}
                >
                  {
                    hover==movie.id &&
                <>
                {
                   !favourite.find((m)=>m.id == movie.id) ?
               <div className='absolute text-xl top-2 right-2 p-2 bg-gray-900 bg-opacity-50 rounded-lg  cursor-pointer' onClick={()=>add(movie)}>🤩</div> :  
               <div className='absolute text-xl top-2 right-2 p-2 bg-gray-900 bg-opacity-50 rounded-lg  cursor-pointer' onClick={()=>del(movie)}>😘</div>
                }
               </>
              
        
                  }
            <div className=' bg-gray-900 bg-opacity-50 text-center text-white font-bold py-2 rounded-lg m-2'>{movie.title}</div>
                  
            </div>
            ))

        }
        </div>
       
       
}
      </div>
      <Pagination pageProp={pageNumber} goback={goback} goAhead={goAhead}/>
    </>
  )
}

export default Movie

