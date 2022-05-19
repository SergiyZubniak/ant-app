import React from 'react'
import Carousel from 'react-elastic-carousel'
const state = {
    items: [
      {id: 1, title: 'item #1',src: "/images/clock.png"},
      {id: 2, title: 'item #2',src: "/images/clock.png"},
      {id: 3, title: 'item #3',src: "/images/clock.png"},
      {id: 4, title: 'item #4',src: "/images/clock.png"},
      {id: 5, title: 'item #5',src: "/images/clock.png"}
    ]
  }

  const breakPoints = [
      {width: 1, itemsToshow: 1},
      {width: 550, itemsToshow: 2},
      {width: 768, itemsToshow: 3},
      {width: 1200, itemsToshow: 4},   

  ]

function Availeble() {
  return (
    <div id='availeble' className='w-full h-screen bg-black flex flex-col items-center justify-center text-white'>
      <div className='my-5'>
        НОВІ ПОСТУПЛЕННЯ
      </div>
      <div className='border-b-4 w-28 border-gray-500 mb-5'></div>
        
        <Carousel itemsToShow={2} breakPoints={breakPoints} itemsToScroll={1} className=''>
        {state.items.map(item => <div key={item.id} className=''>
        <img className='w-[260px] h-[325px] bg-gray-900 m-2' src={item.src} alt="123" />

        </div>)}
        </Carousel>
        
         
    </div>
  )
}

export default Availeble