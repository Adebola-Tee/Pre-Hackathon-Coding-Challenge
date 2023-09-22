import React from 'react'
import './Section2.css';
const Section2 = () => {
  return (
    <div className='pt-4'>
        <img src='./Images/Line.png' alt='horizontal line'/>
       <div className='bg-[#150E28] flex flex-col md:flex-row w-full'>
        <div className='md:w-1/2 flex justify-center items-center relative'>
          <img src='./Images/The big idea.png' alt='networking bulb' />
          {/* Star Image */}
          <img
          className='star-blink'
            src='./Images/sata gra.png'
            alt='star'
            style={{
              position: 'absolute',
              top: '30%',
              left: '10%', // Adjusted the left position as needed
            }}
          />
          {/* arrow Image */}
          <img
          className='md:hidden'
            src='./Images/arrow.png'
            alt='small image'
            style={{
              position: 'absolute',
              bottom: '-10%', // Adjusted the bottom position as shown on the  figma page
              left: '50%',
              transform: 'translateX(-50%)', // Centered horizontally
            }}
          />
            <img
          className='hidden md:block'
            src='./Images/arrow.png'
            alt='small image'
            style={{
              position: 'absolute',
              bottom: '5%', // Adjusted the bottom position as shown on the  figma page
              left: '80%',
              transform: 'translateX(-50%)', // Centered horizontally
            }}
          />
        </div>
        <div className='w-full md:w-1/2 text-white pt-12 flex flex-col items-center md:items-start'>
          <div className='flex'>
          <div className=''>
            <h2 className='flex-nowrap'>
              Introduction to getLinked
            </h2>
            <p className='text-[#D434FE] ml-6 md:ml-0'>techHackathon 1.0</p>
          </div>
          <img className='md:hidden  star-blink'
    src='./Images/star pu.png'
    alt='starlogo'
    style={{
      width: '8px',
      height: '10px', 
      marginLeft: '15px', 
      position: 'relative',
      top:'16px'
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
        </div>
      </div>
    </div>
  )
}

export default Section2
