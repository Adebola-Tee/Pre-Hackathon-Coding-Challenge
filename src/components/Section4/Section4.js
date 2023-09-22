import React from "react";

const Section4 = () => {
  return (
    <div>
      <img src="./Images/Line.png" alt="horizontal line" />

      <div className="bg-[#150E28] pt-4 pb-20 flex flex-col md:flex-row w-full">
        <div className="left pt-20 px-12 md:px-0 md:w-1/2 pl-12 flex justify-center items-center relative">
          <img
            className="star-blink absolute mt-6 left-36"
            src="./Images/star pu2.png"
            alt="star"
            style={{
              top: "calc(8% - 20px)", // Adjust the value as needed for vertical centering
            }}
          />

          <div className="hidden md:block relative pt-16">
            {/* Container for image and ellipse */}
            <div className="relative">
              {/* Ellipse positioned above the image with a gap */}
              <div className="ellipse w-[134px] h-[134px] z-10 bg-gradient-to-l from-purple-600 to-pink-600 absolute -top-8 left-8 rounded-full"></div>
              <img
                src="./Images/pie-logo2.png"
                alt="a woman holding a piechart logo"
                className="z-20 relative"
              />
            </div>
          </div>
          <img
            src="./Images/piechart-logo.png"
            alt="a woman holding a piechart logo"
            className="md:hidden"
          />
          {/* First Star Image (above the image) */}

          {/* Second Star Image (centered on the image) */}
          <img
            className="star-blink absolute left-44 top-2/3 md:top-1/2 md:left-2/3 transform -translate-x-1/2 -translate-y-1/2"
            src="./Images/dull-star.png"
            alt="star"
            style={{
              width: "14px",
              height: "20px",
            }}
          />
          {/* Third Star Image (directly below and to the extreme right) */}
          <img
            className="hidden md:block star-blink absolute bottom-0 right-8"
            src="./Images/bright-star.png"
            alt="star"
            style={{
              width: "14px",
              height: "20px",
            }}
          />
        </div>
        <div className="right w-full md:w-1/2  text-white pt-12 flex flex-col items-center px-4 md:px-0 md:pr-16 md:items-start">
          <div className="flex">
            <div className="md:text-3xl text-center font-bold font-montserrat md:leading-10">
              <h2 className="flex-nowrap ">Judging Criteria</h2>
              <p className="text-[#D434FE] md:ml-0">Key attributes</p>
            </div>
            {/* Star Image for the right content */}
          </div>
          <div className="text-center md:text-start md:px-0 pt-3 pl-4 space-y-2 ">
            {/* Content paragraphs */}
            <p>
              {" "}
              <span className="text-[#FF26B9]  text-sm md:text-base font-bold font-montserrat">
                Innovation and Creativity:
              </span>
              <span className="text-sm">
                {" "}
                Evaluate the uniqueness and creativity of the solution. Consider
                whether it addresses a real-world problem in a novel way or
                introduces innovative features.
              </span>
            </p>
            <p>
              {" "}
              <span className="text-[#FF26B9] text-sm md:text-base font-bold font-montserrat">
                Functionality:
              </span>
              <span className="text-sm">
                {" "}
                Assess how well the solution works. Does it perform its intended
                functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
              </span>
            </p>
            <p>
              <span className="text-[#FF26B9] text-base font-bold font-montserrat">
                Impact and Relevance:
              </span>
              <span className="text-sm">
                {" "}
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </span>
            </p>
            <p>
              <span className="text-[#FF26B9] text-base font-bold font-montserrat">
                Technical Complexity:
              </span>
              <span className="text-sm">
                {" "}
                Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </span>
            </p>
            <p>
              <span className="text-[#FF26B9] text-base font-bold font-montserrat">
                Adherence to Rules:
              </span>
              <span className="text-sm">
                {" "}
                Judges will ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </span>
            </p>
          </div>
          <img
            src="./Images/Register Button.png"
            className="hidden md:block mt-4 "
            alt="register button"
          />
          <img src='./Images/Registerbutton2.png'
           className="md:hidden mt-4 "
           alt="register button"/>
            <img
            className="md:hidden star-blink relative -right-28 bottom-8"
            src="./Images/bright-star.png"
            alt="star"
            style={{
              width: "14px",
              height: "20px",
            }}
          />
        </div>
       
      </div>
    </div>
  );
};

export default Section4;
