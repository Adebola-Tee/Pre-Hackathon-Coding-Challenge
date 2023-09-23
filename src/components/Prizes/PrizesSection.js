import React from 'react';

const PrizesSection = () => {
  return (
    <div className='bg-[#150E28]'>
      <img src="./Images/Line.png" alt="horizontal line" />
      <section className='flex flex-col justify-center items-center relative bg-scheme-dark text-white'>
        <div className="w-full h-1/2 flex md:justify-end justify-center items-center md:px-36 p-5 relative">
          <div className="self-center md:self-start text-center font-montserrat">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Prizes and
            </h2>
            <h2 className="text-[#D434FE] text-2xl sm:text-3xl font-bold">
              Rewards
            </h2>
            <p className="text-xs text-white">
              Highlight of the prizes or rewards for the winners and participants
            </p>
          </div>
          <img
            src='./Images/sata gra.png'
            alt="star"
            className="absolute star-blink left-[20%] md:left-1/3 top-10 w-4"
          />
          <img
            src='./Images/sata gra.png'
            alt="star"
            className="absolute star-blink right-1/4 top-16 md:top-24 w-4"
          />
        </div>
        <div className="w-full h-1/2 flex items-center justify-center flex-col md:flex-row p-10 gap-10 relative">
          <div className="w-[80%] h-1/2 md:w-[40%] md:h-full z-10 relative">
            <img src='./Images/trophy.png' alt="trophy" className="" /> 
            <img
              src='./Images/small-brightstar.png'
              alt="star"
              className="absolute star-blink -bottom-5 left-1/3 w-3"
            />
          </div>
          <div className="w-full h-1/2 md:w-1/2 md:h-full relative">
            <img src='./Images/medals.png' alt="medals" className="" />
            <img
              src='./Images/bright-star.png'
              alt="star"
              className="absolute star-blink top-0 lg:left-14 left-10 w-4 md:flex hidden"
            />
            <img
              src='./Images/bright-star.png'
              alt="star"
              className="absolute star-blink top-12 sm:top-28 md:top-20 lg:top-28 sm:right-0 -right-3 w-3"
            />
            <img
              src='./Images/dull-star.png'
              alt="star"
              className="absolute star-blink -bottom-5 right-1/3 w-3"
            />
          </div>
        </div>
        <img
          src='./Images/shadowed-bg.png'
          alt="flare"
          className="opacity-50 top-0 w-[400px] absolute lg:-bottom-1/2 left-0"
        />
        <img
          src='./Images/shadowed-bg.png'
          alt="flare"
          className="absolute -right-0 w-[350px] top-[80%] md:w-[300px] lg:w-[500px] md:top-1/2 lg:top-1/2 -rotate-180 opacity-50"
        />
      </section>
    </div>
  );
};

export default PrizesSection;
