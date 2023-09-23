import React from 'react';
import './Section2.css';

const IntroductionSection= () => {
  return (
    <div className='pt-4'>
      <img src='./Images/Line.png' alt='horizontal line' />
      <div className='bg-[#150E28] flex flex-col md:flex-row w-full pb-12'>
        <div className='left md:w-1/2 flex justify-center items-center relative' data-aos="zoom-in-left">
          <img src='./Images/The big idea.png' alt='networking bulb' />
          {/* Star Image */}
          <StarImage className='star-blink' src='./Images/sata gra.png' top='30%' left='10%' />
          {/* Arrow Image */}
          <ArrowImage className='md:hidden' bottom='-10%' />
          <ArrowImage className='hidden md:block' bottom='5%' left='80%' />
        </div>
        <div className='right w-full md:w-1/2 text-white pt-12 flex flex-col items-center md:items-start' data-aos="zoom-in-right">
          <SectionTitle title='Introduction to getLinked' subtitle='techHackathon 1.0' />
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
  );
};

const StarImage = ({ className, src, top, left }) => (
  <img
    className={`star-blink ${className}`}
    src={src}
    alt='star'
    style={{
      width: '10px',
      height: '10px',
      position: 'absolute',
      top,
      left,
    }}
  />
);

const ArrowImage = ({ className, bottom, left }) => (
  <img
    className={className}
    src='./Images/arrow.png'
    alt='small image'
    style={{
      position: 'absolute',
      bottom,
      left: '50%',
      transform: 'translateX(-50%)',
    }}
  />
);

const SectionTitle = ({ title, subtitle }) => (
  <div className='md:text-3xl text-center font-bold font-montserrat md:leading-10  md:pt-12'>
    <h2 className='flex-nowrap'>{title}</h2>
    <p className='text-[#D434FE] ml-6 md:ml-0'>{subtitle}</p>
  </div>
);

export default IntroductionSection;
