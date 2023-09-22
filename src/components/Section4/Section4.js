import React from 'react';

const Section4 = () => {
  return (
    <div >
      <img src='./Images/Line.png' alt='horizontal line' />

      <div className='bg-[#150E28] pt-4 flex flex-col md:flex-row w-full'>
        <div className='md:w-1/2  flex justify-center items-center relative'>
        <img
            className='star-blink absolute mt-6  left-36 transform -translate-x-1/2'
            src='./Images/star pu2.png'
            alt='star'
            style={{
              top: '2px', // Adjusted the top position to place it above the image
            }}
          />
        <div className="hidden md:block relative pt-36">
    {/* Container for image and ellipse */}
    <div className="relative">
      {/* Ellipse positioned above the image with a gap */}
      <div className="ellipse w-[134px] h-[134px] z-10 bg-gradient-to-l from-purple-600 to-pink-600 absolute -top-12 left-20 rounded-full"></div>
      <img src='./Images/pie-logo2.png' alt='a woman holding a piechart logo' className='z-20 relative' />
    </div>
  </div>
          <img src='./Images/piechart-logo.png' alt='a woman holding a piechart logo' className="md:hidden" />
          {/* First Star Image (above the image) */}
         
          {/* Second Star Image (centered on the image) */}
          <img
            className='star-blink absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            src='./Images/dull-star.png'
            alt='star'
            style={{
              width: '14px',
              height: '20px',
            }}
          />
          {/* Third Star Image (directly below and to the extreme right) */}
          <img
            className='star-blink absolute bottom-0 right-8'
            src='./Images/bright-star.png'
            alt='star'
            style={{
              width: '14px',
              height: '20px',
            }}
          />
       
        </div>
        <div className='w-full md:w-1/2 text-white pt-12 flex flex-col items-center md:items-start'>
          <div className='flex'>
            <div className=''>
              <h2 className='flex-nowrap'>
                Judging Criteria
              </h2>
              <p className='text-[#D434FE] ml-6 md:ml-0'>Key attributes</p>
            </div>
            {/* Star Image for the right content */}
          
          </div>
          <div className='text-center md:text-start md:px-0 pt-3 px-10'>
            {/* Content paragraphs */}
            <p>Innovation and Creativity<span className='text-sm'>: Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</span></p>
            <p>Functionality<span className='text-sm'>: Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.</span></p>
            <p>Impact and Relevance<span className='text-sm'>: Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.</span></p>
            <p>Technical Complexity<span className='text-sm'>: Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.</span></p>
            <p>Adherence to Rules<span className='text-sm'>: Judges will ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.</span></p>
          </div>
          <button className='Readmore w-[172px] h-[53px] bg-white text-black'> Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Section4;
