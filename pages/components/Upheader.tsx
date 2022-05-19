import React from 'react'
import { PhoneIcon,LogoutIcon } from '@heroicons/react/outline'

function Upheader() {
  return (
    <div className='fixed top-0 first-letter:w-full h-11 bg-black'>
        <div className='max-w-[1100px] h-full mx-auto text-gray-500 flex items-center justify-between'>
            <div className='flex'>
                <PhoneIcon className="h-5 w-5"/>
                <div className='pl-5'>0993875531</div>
                <div className='px-5'>|</div>
                <div>Працюємо 7 днів в тиждень</div>
                <div className='px-5'>|</div>
                <div>9:00 - 18:00</div>
            </div>
            <div className='hidden text-gray-500 md:flex'>
            <LogoutIcon className='h-5 w-5 '/>
                <a className='pl-5 text-gray-500 hover:text-gray-300' href="/">Ввійти</a>
                <div className='px-2'>/</div>
                <a className='text-gray-500 hover:text-gray-300' href="/">Реєстрація</a>
            </div>   
        </div>
        
    </div>
  )
}
export default Upheader
