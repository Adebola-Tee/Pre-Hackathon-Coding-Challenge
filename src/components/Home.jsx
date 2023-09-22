import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import bulb from "../assets/images/bulb.png";
import curve from "../assets/images/curve.png";
import man from "../assets/images/man.png";
import image from "../assets/images/image.png";

const Home = () => {
  return (
    <div className="max-w-full w-full h-fit justify-center flex md:flex-row flex-col bg-primary">
      <div className="md:pl-16 pl-10 pr-10">
        <div className="flex flex-col">
          <p className="text-white text-lg font-sans font-bold italic md:hidden block">
            Igniting a Revolution in HR Innovation
          </p>
          <img
            src={curve}
            alt=""
            className="w-[30%] ml-[250px] md:hidden block"
          />
        </div>
        <PiStarFourFill size={20} color="#FFFFFF" className="md:m-10 ml-24" />

        <PiStarFourFill size={14} color="#808080" className="ml-[380px] md:hidden block" />

        <img
          src={bulb}
          alt="bulb"
          width={50}
          height={50}
          className="md:ml-[420px] ml-[300px]"
        />
        <div className="flex flex-col gap-5 text-center md:text-left">
          <h3 className="text-white md:text-7xl text-5xl font-bold font-serif">
            getlinked Tech
          </h3>
          <h3 className="text-white md:text-[64px] text-[45px] font-bold font-serif">
            Hackathon <span className="text-purple-100">1.0</span>🔗💥
          </h3>
          <p className="text-white text-xl font-normal font-sans">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>

          <div className="flex flex-row gap-4 justify-center">
            <button className="register w-[170px] h-12 text-white text-lg font-sans">
              Register
            </button>
            <PiStarFourFill size={10} color="#808080" className="ml-5 mt-3 md:hidden block" />
          </div>

          <PiStarFourFill
            size={20}
            color="#808080"
            className="md:ml-[400px] md:mt-6 md:block hidden"
          />

          <p className="text-white text-5xl font-sans-serif font-normal md:mt-3">
            00<span className="text-sm">H</span> 00
            <span className="text-sm">M</span> 00
            <span className="text-sm">S</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col items-end md:mb-4">
          <p className="text-white text-xl font-sans font-bold italic md:block hidden">
            Igniting a Revolution in HR Innovation
          </p>
          <img
            src={curve}
            alt=""
            className="w-[20%] md:ml-10 md:block hidden"
          />
        </div>
        <PiStarFourFill size={20} color="#808080" className="md:mt-5 md:ml-10 md:block hidden" />

        <div className="relative">
          <img src={man} alt="" className="absolute md:w-[830px] w-full h-[700px]" />
          <img src={image} alt="" className="absolute md:w-[700px] w-full h-[640px]" />
        </div>
      </div>
    </div>
  );
};

export default Home;
