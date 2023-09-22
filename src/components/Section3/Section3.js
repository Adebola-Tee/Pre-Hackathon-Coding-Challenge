import React from 'react'

const Section3 = () => {
  return (
    <div>
         <img src='./Images/Line.png' alt='horizontal line'/>
       <div className='bg-[#150E28] flex flex-col md:flex-row-reverse w-full px-12 pb-8'>
        <div className='left md:w-1/2 flex justify-center items-center relative' data-aos="zoom-in-left">
        <img src='./Images/female-analyst2.png' alt='female analyst' className='hidden md:block mr-16' />
          <img src='./Images/female-analyst.png' alt='female analyst' className='md:hidden' />
          {/* Star Image */}
          <img
          className='star-blink md:hidden'
            src='./Images/bright-star.png'
            alt='star'
            style={{
              position: 'absolute',
              top: '50%',
              left: '5%', // Adjusted the left position as needed
              width:'10px',
              height:'10px'
            }}
          />
          <img
          className='hidden star-blink md:block'
            src='./Images/bright-star.png'
            alt='star'
            style={{
              position: 'absolute',
              top: '80%',
              left: '-5%', // Adjusted the left position as needed
              width:'26px',
              height:'32px'
            }}
          />
      
        </div>
        <div className='right w-full md:w-1/2 text-white md:pt-12 flex flex-col items-center md:items-start' data-aos="zoom-in-right" >
          <div className='flex'>
          <div className="md:text-3xl text-center font-bold font-montserrat md:leading-10  md:pt-12">
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
      top:'10px'
    }}
  />
          </div>
          <div className='text-center font-montserrat  md:text-start md:px-0 pt-3  px-0'>
          <p className='text-xs md:mr-4'>
            Our tech hackathon is a melting pot of visionaries, and its
            purpose is as clear as day; to shape the future. Whether you're a
            coding genius, a design maverick, or a concept wizard, you'll have
            the choice to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
          </div>
          <img
          className='star-blink md:hidden'
            src='./Images/bright-star.png'
            alt='star'
            style={{
                marginLeft: '10px',
                marginTop: '10px',
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
