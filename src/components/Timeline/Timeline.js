import React from "react";

const TimelineSection = () => {
  return (
    <div className="bg-[#150E28]">
      <section
        className="flex flex-col gap-20 p-5  text-white items-center justify-center"
        id="timeline"
      >
        <div className="flex items-center flex-col gap-4 relative">
          <h2 className="font-bold font-montserrat text-2xl sm:text-3xl text-center">
            Timeline
          </h2>
          <p className="text-center text-xs">
            Here is the breakdown of the time we anticipate <br /> using for the
            upcoming event.
          </p>
        </div>
        <div className="w-full px-2 mx-auto grid gap-2 md:grid-cols-9 place-items-center relative">
          <img
            src="./Images/star pu2.png"
            alt="star"
            className="absolute  star-blink -top-10 left-20 lg:left-36 w-5"
          />
          <img
            src="./Images/dull-star.png"
            alt="star"
            className="absolute star-blink top-[40%] right-20 lg:right-36 lg:w-4 w-3"
          />
          <img
            src="./Images/star pu2.png"
            alt="star"
            className="absolute star-blink -bottom-3 md:bottom-20 left-20 lg:left-36 w-3"
          />
          <div className="col-span-4 w-full h-full">
            <div className="w-full h-full bg-transparent md:pl-4 border-l-2 border-scheme-violet md:border-none ml-2 px-5">
              <h2 className="text-[#D434FE] font-semibold text-lg sm:text-xl text-left md:text-right">
                Hackathon Announcement
              </h2>
              <p className="text-left md:text-right text-xs">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public, and teams begin to get ready to register
              </p>
            </div>
          </div>
          <div className="relative md:col-span-4 w-full h-full flex justify-center items-center flex-col gap-1">
            <div className="h-full w-0.5 ml-2.5 bg-gradient-to-r from-purple-600 via-purple-800 to-purple-900 md:self-start md:flex hidden"></div>
            <div className="flex gap-3 self-center md:self-start z-10">
              <div className="mb-1 text-white text-center w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 via-purple-800 to-purple-900 font-semibold">
                1
              </div>
              <p className="text-[#D434FE] font-semibold text-xs sm:text-base ">
                November 18, 2023
              </p>
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>
          <div className="col-span-4 w-full h-full flex">
            <div className="w-full h-full bg-transparent md:pl-4 border-l-2 border-scheme-violet ml-2 px-5">
              <h2 className="text-[#D434FE] font-semibold text-lg sm:text-xl text-left md:text-left">
                Teams Registration begins
              </h2>
              <p className="text-left text-white md:text-left text-xs">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 by proceeding to register
              </p>
            </div>
          </div>
          <div className="relative md:col-span-4 w-full h-full flex justify-center items-center flex-col gap-1">
            <div className="h-10 w-0.5 ml-2.5 bg-gradient-to-r from-purple-600 via-purple-800 to-purple-900 md:self-end hidden"></div>
            <div className="flex md:flex-row-reverse gap-3 self-center md:self-end z-10 md:relative md:-right-7">
              <div className="mb-1 text-white text-center w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 via-purple-800 to-purple-900 font-semibold">
                2
              </div>
              <p className="text-[#D434FE] font-semibold text-xs sm:text-base">
                November 18, 2023
              </p>
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>
          <div className="col-span-4 w-full h-full">
            <div className="w-full h-full bg-transparent md:pl-4 border-l-2 border-scheme-violet md:border-none ml-2 px-5">
              <h2 className="text-[#D434FE] font-semibold text-lg sm:text-xl text-left md:text-right">
                Team Registeration ends
              </h2>
              <p className="text-left md:text-right text-xs">
                The Interested participants are no longer allowed{" "}
                <br className="md:hidden lg:flex" /> to register
              </p>
            </div>
          </div>
          <div className="relative md:col-span-4 w-full h-full flex justify-center items-center flex-col gap-1">
            <div className="h-full w-0.5 ml-2.5 bg-gradient-to-r from-purple-600 via-purple-800 to-purple-900 md:self-start md:flex hidden"></div>
            <div className="flex w-full gap-3 self-center md:self-start z-10">
              <div className="mb-1 text-white text-center w-6 h-6  rounded-full bg-gradient-to-r from-purple-600 via-purple-800 to-purple-900 font-semibold">
                3
              </div>
              <p className="text-[#D434FE] text-xs sm:text-base font-semibold w-full">
                November 18, 2023
              </p>
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>
          <div className="col-span-4 w-full h-full flex">
            <div className="w-full h-full bg-transparent md:pl-4 border-l-2 border-scheme-violet ml-2 px-5">
              <h2 className="text-[#D434FE] font-semibold text-lg sm:text-xl text-left md:text-left">
                Annoncement of the accepted teams and ideas
              </h2>
              <p className="text-left md:text-left text-xs">
                All teams whom idea has been accepted into the getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
            </div>
          </div>
          <div className="relative md:col-span-4 w-full h-full flex justify-center items-center flex-col gap-1">
            <div className="h-10 w-0.5 ml-2.5 bg-gradient-to-r from-purple-600 via-purple-800 to-purple-900 md:self-end hidden"></div>
            <div className="flex md:flex-row-reverse gap-3 self-center md:self-end z-10 md:relative md:-right-7">
              <div className="mb-1 text-white text-center w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 via-purple-800 to-purple-900 font-semibold">
                4
              </div>
              <p className="text-[#D434FE] font-semibold text-xs sm:text-base">
                November 18, 2023
              </p>
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>
          <div className="col-span-4 w-full h-full">
            <div className="w-full h-full bg-transparent md:pl-4 border-l-2 border-scheme-violet md:border-none ml-2 px-5">
              <h2 className="text-[#D434FE] font-semibold text-lg sm:text-xl text-left md:text-right">
                Getlinked Hackathon 1.0 Officially Begins
              </h2>
              <p className=" text-left md:text-right text-xs">
                Accepted teams can now proceed to build their ground-breaking
                skill driven solutions
              </p>
            </div>
          </div>
          <div className="relative md:col-span-4 w-full h-full flex justify-center items-center flex-col gap-1">
            <div className="h-full w-0.5 ml-2.5 bg-gradient-to-r from-purple-600 via-purple-800 to-purple-900 md:self-start md:flex hidden"></div>
            <div className="flex gap-3 self-center md:self-start z-10">
              <div className="mb-1 text-white text-center w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 via-purple-800 to-purple-900 font-semibold">
                5
              </div>
              <p className="text-[#D434FE] font-semibold text-xs sm:text-base">
                November 18, 2023
              </p>
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>
          <div className="col-span-4 w-full h-full flex">
            <div className="w-full h-full bg-transparent md:pl-4 border-l-2 border-scheme-violet ml-2 px-5">
              <h2 className="text-[#D434FE] font-semibold text-lg sm:text-xl text-left md:text-left">
                Demo Day
              </h2>
              <p className="text-left md:text-left text-xs">
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will be announced on this day
              </p>
            </div>
          </div>
          <div className="relative md:col-span-4 w-full h-full flex justify-center items-center flex-col gap-1">
            <div className="h-10 w-0.5 ml-2.5 bg-gradient-to-r from-purple-600 via-purple-800 to-purple-900 md:self-end hidden"></div>
            <div className="flex md:flex-row-reverse gap-3 self-center md:self-end z-10 md:relative md:-right-7">
              <div className="mb-1 text-white text-center w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 via-purple-800 to-purple-900 font-semibold">
                6
              </div>
              <p className="text-[#D434FE] font-semibold text-xs sm:text-base">
                November 18, 2023
              </p>
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>
        </div>
      </section>
    </div>
  );
};

export default TimelineSection;
