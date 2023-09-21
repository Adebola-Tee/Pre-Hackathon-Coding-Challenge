import React from 'react'

const Section3 = () => {
  return (
    <div className=" border border-solid border-black transform  text-white bg-opacity-2e">
       <div className='bg-[#150E28] flex flex-col md:flex-row-reverse w-full'>
        <div className='md:w-1/2 flex justify-center items-center relative'>
          <img src='./Images/female-analyst.png' alt='female analyst' />
          {/* Star Image */}
          <img
          className='star-blink'
            src='./Images/bright-star.png'
            alt='star'
            style={{
              position: 'absolute',
              top: '50%',
              left: '5%', // Adjust the left position as needed
              width:'10px',
              height:'10px'
            }}
          />
          {/* arrow Image
          <img
          className='md:hidden'
            src='./Images/arrow.png'
            alt='small image'
            style={{
              position: 'absolute',
              bottom: '-10%', // Adjusted the bottom position as shown on the  figma page
              left: '50%',
              transform: 'translateX(-50%)', // Center horizontally
            }}
          /> */}
        </div>
        <div className='w-full md:w-1/2 text-white pt-12 flex flex-col items-center md:items-start'>
          <div className='flex'>
          <div className=''>
            <h2 className='flex-nowrap'>
              Rules and
            </h2>
            <p className='text-[#D434FE] '>Guidelines</p>
          </div>
          <img className='md:hidden  star-blink'
    src='./Images/dull-star.png'
    alt='starlogo'
    style={{
      width: '8px',
      height: '10px', 
      marginLeft: '15px', 
      position: 'relative',
      top:'46px',
      right:'0px'
    }}
  />
   <img className='hidden md:block  star-blink'
    src='./Images/star pu2.png'
    alt='starlogo'
    style={{
      width: '30px',
      height: '36px', 
      marginLeft: '60px', 
      position: 'relative',
      top:'6px'
    }}
  />
          </div>
          <div className='text-center md:text-start md:px-0 pt-3 px-10'>
          <p className='text-sm'>
            Our tech hackathon is a melting pot of visionaries, and its
            purpose is as clear as day; to shape the future. Whether you're a
            coding genius, a design maverick, or a concept wizard, you'll have
            the choice to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
          </div>
          <img
          className='star-blink'
            src='./Images/bright-star.png'
            alt='star'
            style={{
                marginLeft: '10px',
              width:'10px',
              height:'10px'
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Section3
