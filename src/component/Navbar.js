import React from 'react'
import Logo from "../logo3.png"
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className= ' border pl-8 flex space-x-8 items-center py-4'>
      <img src={Logo} className='w-[50px] md-[80px]'></img>
      <Link to='/' className='text-blue-400 font-bold  text-xl md:text-3xl'>Movies</Link>
      <Link to='favourites' className='text-blue-400 font-bold text-xl md:text-3xl'>Favourites</Link>
    </div>
  )
}

export default Navbar
