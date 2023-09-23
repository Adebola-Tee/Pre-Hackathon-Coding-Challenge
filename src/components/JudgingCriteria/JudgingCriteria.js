import React from "react";

const JudgingCriteriaSection = () => {
  return (
    <div className="bg-[#150E28]">
      <img src="./Images/Line.png" alt="horizontal line" />
      <div className="bg-[#150E28] pt-4 pb-20 flex flex-col md:flex-row w-full">
        <div
          className="left pt-20 px-12 md:px-0 md:w-1/2 pl-12 flex justify-center items-center relative"
          data-aos="zoom-in-left"
        >
          <img
            className="star-blink absolute mt-6 left-36"
            src="./Images/star pu2.png"
            alt="star"
            style={{ top: "calc(8% - 20px)" }}
          />
          <div className="hidden md:block relative pt-16">
            <div className="relative">
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
          <img
            className="star-blink absolute left-44 top-2/3 md:top-1/2 md:left-2/3 transform -translate-x-1/2 -translate-y-1/2"
            src="./Images/dull-star.png"
            alt="star"
            style={{ width: "14px", height: "20px" }}
          />
          <img
            className="hidden md:block star-blink absolute bottom-0 right-8"
            src="./Images/bright-star.png"
            alt="star"
            style={{ width: "14px", height: "20px" }}
          />
        </div>
        <div
          className="right w-full md:w-1/2 text-white pt-12 flex flex-col items-center px-4 md:px-0 md:pr-16 md:items-start"
          data-aos="zoom-in-right"
        >
          <h2 className="flex-nowrap md:text-3xl text-center font-bold font-montserrat md:leading-10">
            Judging Criteria
          </h2>
          <h2 className="text-[#D434FE] md:ml-0 md:text-3xl text-center font-bold font-montserrat md:leading-10">
            Key attributes
          </h2>

          <div className="text-center md:text-start md:px-0 pt-3 pl-4 space-y-2">
            <CriteriaItem
              title="Innovation and Creativity"
              description="Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features."
            />
            <CriteriaItem
              title="Functionality"
              description="Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution."
            />
            <CriteriaItem
              title="Impact and Relevance"
              description="Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits."
            />
            <CriteriaItem
              title="Technical Complexity"
              description="Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution."
            />
            <CriteriaItem
              title="Adherence to Rules"
              description="Judges will ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements."
            />
          </div>
          <img
            src="./Images/Register Button.png"
            className="hidden md:block mt-4"
            alt="register button"
          />
          <img
            src="./Images/Registerbutton2.png"
            className="md:hidden mt-4"
            alt="register button"
          />
          <img
            className="md:hidden star-blink relative -right-28 bottom-8"
            src="./Images/bright-star.png"
            alt="star"
            style={{ width: "14px", height: "20px" }}
          />
        </div>
      </div>
      <img
          src='./Images/shadowed-bg.png'
          alt="flare"
          className="opacity-50 bottom-0 w-[400px] absolute lg:bottom-2.5 left-0"
        />
        <img
          src='./Images/shadowed-bg.png'
          alt="flare"
          className="absolute -right-0 w-[350px] top-[80%] md:w-[300px] lg:w-[500px] md:top-1/2 lg:top-1/2 -rotate-180 opacity-50"
        />
    </div>
  );
};

const CriteriaItem = ({ title, description }) => (
  <p>
    <span className="text-[#FF26B9] text-sm md:text-base font-bold font-montserrat">
      {title}:
    </span>
    <span className="text-sm">{description}</span>
  </p>
);

export default JudgingCriteriaSection;
