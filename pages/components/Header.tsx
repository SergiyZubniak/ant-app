import React from 'react'
import {SearchIcon,ShoppingCartIcon } from '@heroicons/react/outline'
import { Link} from 'react-scroll'

function Header() {
  return (
    <div className='fixed top-10 w-full h-20 bg-black text-gray-500'>
      <div className='w-3/4 h-full mx-auto flex items-center justify-between'>
        <div className='text-2xl text-white mr-2 font-pacifico'>PORTER
        </div> 
        <div className='h-full flex flex-row justify-center items-center text-sm '>    
            <Link activeClass="active" to="colection" spy={true} smooth={true} offset={1} duration={500} className='h-full w-24 flex items-center justify-center text-center text-gray-500 hover:bg-gray-500 hover:text-gray-200 active:text-yellow-400' href="#">
              Колекції
            </Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={2} duration={500} className='h-full w-24 flex items-center justify-center text-center text-gray-500 hover:bg-gray-500 hover:text-gray-200 active:text-yellow-400' href="#">
              Опис
            </Link>
            <Link activeClass="active" to="availeble" spy={true} smooth={true} offset={3} duration={500} className='h-full w-24 flex items-center justify-center text-center text-gray-500 hover:bg-gray-500 hover:text-gray-200 active:text-yellow-400' href="#">
              Нові Поступлення
            </Link>
            
            <ShoppingCartIcon className='h-5 w-5 mx-5 text-white'/>
            <SearchIcon className='h-5 w-5 text-white'/>
        </div>
      </div>
      
    </div>
  )
}

export default Header