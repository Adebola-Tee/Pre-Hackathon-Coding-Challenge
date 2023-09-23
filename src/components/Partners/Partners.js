import React from "react";

const PartnersSection = () => {
  return (
    <div className="bg-[#150E28]">
      <img src="./Images/Line.png" alt="horizontal line" />
      <section className="flex flex-col md:pt-12 text-white gap-5 border-b border-gray-700 relative items-center justify-center">
        <div className="text-center justify-center">
          <h1 className="font-bold font-montserrat">Partners and Sponsors</h1>
          <p className="text-sm">
            Getlinked Hackathon 1.0 is honored to have the following major{" "}
            <br />
            companies as its partners and sponsors
          </p>
        </div>
        <div className="flex items-center justify-center py-2 sm:p-5 relative">
          <img
            src="./Images/sata gra.png"
            alt="star"
            className="absolute star-blink sm:left-20 md:left-32 md:top-0 w-3 top-2 left-10"
          />
          <img
            src="./Images/sata gra.png"
            alt="star"
            className="absolute md:left-1/2 ml-6 lg:ml-10 star-blink md:top-20 w-3 top-[40%] left-[55%]"
          />
          <img
            src="./Images/bright-star.png"
            alt="star"
            className="absolute md:left-1/2 star-blink md:ml-12 lg:ml-16 md:bottom-20  bottom-10 w-3 md:w-4"
          />
          <img
            src="./Images/partners and sponsors.png"
            alt="sponsors"
            className="w-[85%]"
          />
        </div>
        <img
          src="./Images/shadowed-bg.png"
          alt="shadowed background"
          className="opacity-50 top-0 w-[350px] absolute lg:-bottom-1/2 left-0"
        />
        <img
          src="./Images/shadowed-bg.png"
          alt="shadowed background"
          className="absolute -right-0 w-[350px] top-[60%] md:w-[300px] lg:w-[500px] md:top-1/2 lg:top-1/2 -rotate-180 opacity-50"
        />
      </section>
    </div>
  );
};

export default PartnersSection;
