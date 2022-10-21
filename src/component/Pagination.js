import React, { useState } from 'react';

function Pagination({pageProp,goback,goAhead}) {

  

  return <>
    <div className="w-full 
    flex justify-center
    mb-8
    ">
      <button className="
         bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded 
        "
        onClick={goback}
      >Previous</button>
      <button className="
          bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded 
            ">
              {pageProp}
            </button>
      <button className="
            bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded 
            "
        onClick={goAhead}
        >Next</button>
    </div>
  </>
}

export default Pagination;
