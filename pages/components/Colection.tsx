import React from 'react'

function Colection() {
  return (
    <div id='colection' className='w-full h-screen flex flex-col text-white'>
        <div className='w-full h-2/3 flex flex-row bg-yellow-300'>
            <div className='w-7/12 h-full bg-black flex flex-col items-center'>
                <div className='text-3xl pt-10'>
                    Сезон 2021/2022
                </div>
                <div className='border-b-4 w-28 border-gray-500 py-5'></div>
                <div className='w-full flex flex-row items-center justify-around py-5'>
                    <div className='flex flex-col items-center'>
                        <img className='w-[260px] h-[325px] bg-gray-900 m-2' src="/images/clock.png" alt="123" />
                        <p className='text-sm'>Louis XVI ATHOS</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className='w-[260px] h-[325px] bg-gray-900 m-2' src="/images/clock.png" alt="123" />
                        <p className='text-sm'>Louis XVI ATHOS</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className='w-[260px] h-[325px] bg-gray-900 m-2' src="/images/clock.png" alt="123" />
                        <p className='text-sm'>Louis XVI ATHOS</p>
                    </div>

                </div>
            </div>
            <div className='w-5/12 h-full bg-[url("/images/rect.png")] flex flex-col justify-end items-center pb-10'>
                <div >
                    НОВА КОЛЕКЦІЯ
                </div>
                <div className='border-b-4 w-28 border-gray-500 py-5'></div>
                <a className='bg-transparent border-2 text-white hover:text-gray-300 w-28 border-white flex justify-center items-center mt-5' href="/">Каталог</a>

            </div>
        </div>
        <div className='w-full h-[40%] bg-green-300 flex flex-row'>
           <div className='  w-5/12 h-full'></div>
           <div className='w-7/12 h-full bg-black flex flex-col items-center justify-center'>
                <div>
                    КОЛЕКЦІЯ 2020
                </div>
                <div className='border-b-4 w-28 border-gray-500 my-5'></div>
                <div className='text-xs w-80 h-28'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu am a aliquam egestas leo orci pharetra sed diam. 
                </div>
                <a className='bg-transparent border-2 text-white hover:text-gray-300 w-56 border-white flex justify-center items-center mt-10' href="/">ПЕРЕГЛЯД КОЛЕКЦІЇ</a>

           </div>
        </div>
    </div>
  )
}

export default Colection