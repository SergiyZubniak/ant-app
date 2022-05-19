import React from 'react'

function About() {
  return (
    <div id='about' className='w-full h-[55rem] bg-[url("/images/porten.png")] bg-cover text-gray-500 flex flex-col justify-center items-center'>
        <div className='w-[320px] h-[320px] border-4 border-white flex flex-col items-center justify-center'>
          <div className='text-2xl text-white mr-2 font-adelia'>PORTER
          </div>
          <div className='border-b-2 border-white w-24'>
          </div>
          <div className='text-xl text-white'>
            Львів
          </div>
        </div>
        <div className='text-white text-xl w-[730px] pt-20'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.
        </div>
    </div>
  )
}

export default About