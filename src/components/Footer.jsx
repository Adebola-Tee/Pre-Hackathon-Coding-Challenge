import React from "react";
import { CgPhone } from "react-icons/cg";
import { PiStarFourFill, PiMapPinFill } from "react-icons/pi";
import instagram from "../assets/images/instagram.png";
import x from "../assets/images/x.png";
import facebook from "../assets/images/facebook.png";
import linkedin from "../assets/images/linkedin.png";

const Footer = () => {
  return (
    <div className="flex flex-col gap-5 bg-purple-200 max-w-full md:w-[1440px] w-full justify-center md:py-16 py-8 px-8">
      <div className="flex md:flex-row flex-col md:gap-20 gap-10 md:px-8">
        <PiStarFourFill
          size={70}
          color="#FFFFFF"
          className="md:block hidden mt-5 twinkle"
          style={{ animation: "twinkle 2s infinite" }}
        />

        <div className="flex flex-col md:gap-20 gap-10">
          <div className="flex flex-row gap-6">
            <PiStarFourFill
              size={50}
              color="#FFFFFF"
              className="mt-12 md:hidden block twinkle"
              style={{ animation: "twinkle 2s infinite" }}
            />

            <div className="flex flex-col gap-3">
              <h3 className="text-white text-3xl font-bold font-serif">
                get<span className="text-purple-100">linked</span>
              </h3>
              <p className="text-white font-normal text-sm font-sans">
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of
                showcasing young and talented individuals in the field of
                technology
              </p>
            </div>
          </div>

          <p className="text-white font-sans text-xs font-normal md:ml-0 ml-11">
            Terms of Use <span className="text-purple-100 px-4">|</span> Privacy
            Policy
          </p>
        </div>

        <div className="md:pt-[200px] md:block hidden pl-8">
          <PiStarFourFill
            size={20}
            color="#D434FE"
            className="twinkle"
            style={{ animation: "twinkle 2s infinite" }}
          />
        </div>

        <div className="flex flex-col gap-4 md:pt-4 md:ml-0 ml-11">
          <h4 className="text-sm text-purple-100 font-semibold font-sans">
            Useful Links
          </h4>

          <div className="flex flex-row gap-14">
            <ul className="text-white text-sm font-normal font-sans flex flex-col gap-3">
              <li>Overview</li>
              <li>Timeline</li>
              <li>FAQs</li>
              <li>Register</li>
            </ul>

            <PiStarFourFill
              size={24}
              color="#808080"
              className="mt-12 md:hidden block twinkle"
              style={{ animation: 'twinkle 2s infinite' }}
            />
          </div>

          <div className="flex flex-row gap-4">
            <h4 className="text-purple-100 text-sm font-normal font-sans pt-2 md:w-[150px]">
              Follow Us
            </h4>

            <div className="flex flex-row gap-4">
              <img
                src={instagram}
                alt="instagram"
                className="w-[30px] h-[30px] mt-2"
              />
              <img src={x} alt="X" className="w-[30px] h-[22px] mt-3" />
              <img
                src={facebook}
                alt="facebook"
                className="md:w-[30px] w-[20px] h-[30px] mt-2"
              />
              <img
                src={linkedin}
                alt="linkedin"
                className="w-[30px] h-[30px] mt-2"
              />
            </div>
          </div>
        </div>

        <div className="">
          <PiStarFourFill
            size={20}
            color="#808080"
            className="md:block hidden mt-7 twinkle"
            style={{ animation: 'twinkle 2s infinite' }}
          />
        </div>

        <div className="flex flex-col gap-4 md:pt-4 md:ml-0 ml-11">
          <h4 className="text-sm text-purple-100 font-semibold font-sans">
            Contact Us
          </h4>

          <div className="flex flex-row gap-16">
            <ul className="text-white text-xs font-normal font-sans flex flex-col gap-3 md:w-[200px]">
              <li className="flex flex-row gap-3">
                <CgPhone size={16} color="#FFFFFF" />
                <span className="text-sm font-sans font-normal">
                  +234 6707653444
                </span>
              </li>
              <li className="flex flex-row gap-3">
                <PiMapPinFill size={16} color="#FFFFFF" />
                <span className="text-sm font-sans font-normal">
                  27,Alara Street <br /> Yaba 100012 <br />
                  Lagos State
                </span>
              </li>
            </ul>

            <PiStarFourFill
              size={14}
              color="#FFFFFF"
              className="mt-3 md:hidden block twinkle"
              style={{ animation: 'twinkle 2s infinite' }}
            />
          </div>
        </div>

        <div className="md:pt-32">
          <PiStarFourFill
            size={20}
            color="#FFFFFF"
            className="md:block hidden twinkle"
            style={{ animation: 'twinkle 2s infinite' }}
          />
          <PiStarFourFill
            size={14}
            color="#D434FE"
            className="md:hidden block ml-32 twinkle"
            style={{ animation: 'twinkle 2s infinite' }}
          />
        </div>
      </div>

      <p className="text-white text-sm font-sans font-normal text-center">
        All rights reserved. © getlinked Ltd.
      </p>
    </div>
  );
};

export default Footer;
