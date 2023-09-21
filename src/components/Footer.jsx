import React from "react";
import {
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
  PhoneCall,
  MapPin,
} from "@phosphor-icons/react";
import { PiStarFourFill } from "react-icons/pi";
import x from "../assets/images/x.png";

const Footer = () => {
  return (
    <div className="flex flex-col gap-5 bg-purple-200 max-w-full md:w-[1440px] w-full justify-center md:py-16 py-8 px-8">
      <div className="flex md:flex-row flex-col md:gap-16 gap-10">
        <PiStarFourFill size={50} color="#FFFFFF" className="md:block hidden mt-5" />

        <div className="flex flex-col md:gap-20 gap-10">
          <div className="flex flex-row gap-6">
            <PiStarFourFill
              size={50}
              color="#FFFFFF"
              className="mt-12 md:hidden block"
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

          <p className="text-white font-sans text-xs font-normal ml-11">
            Terms of Use <span className="text-purple-100 px-4">|</span> Privacy
            Policy
          </p>
        </div>

        <div className="md:pt-[200px] md:block hidden pl-8">
          <PiStarFourFill size={20} color="#D434FE" />
        </div>

        <div className="flex flex-col gap-4 md:pt-4 ml-11">
          <h4 className="text-sm text-purple-100 font-semibold font-sans">
            Useful Links
          </h4>

          <div className="flex flex-row gap-14">
            <ul className="text-white text-xs font-normal font-sans flex flex-col gap-3">
              <li>Overview</li>
              <li>Timeline</li>
              <li>FAQs</li>
              <li>Register</li>
            </ul>

            <PiStarFourFill
              size={24}
              color="#808080"
              className="mt-12 md:hidden block"
            />
          </div>

          <div className="flex flex-row gap-6">
            <h4 className="text-purple-100 text-sm font-normal font-sans pt-2">
              Follow Us
            </h4>

            <div className="flex flex-row gap-4">
              <InstagramLogo size={32} color="#FFFFFF" />
              <img src={x} alt="X" width={20} height={10} />
              <FacebookLogo size={32} color="#FFFFFF" />
              <LinkedinLogo size={32} color="#FFFFFF" />
            </div>
          </div>
        </div>

        <div className="">
          <PiStarFourFill
            size={20}
            color="#808080"
            className="md:block hidden mt-7"
          />
        </div>

        <div className="flex flex-col gap-4 md:pt-4 ml-11">
          <h4 className="text-sm text-purple-100 font-semibold font-sans">
            Contact Us
          </h4>

          <div className="flex flex-row gap-16">
            <ul className="text-white text-xs font-normal font-sans flex flex-col gap-3">
              <li className="flex flex-row gap-3">
                <PhoneCall size={16} color="#FFFFFF" />{" "}
                <span className="text-xs font-sans font-normal">
                  +234 6707653444
                </span>
              </li>
              <li className="flex flex-row gap-3">
                <MapPin size={16} color="#FFFFFF" />{" "}
                <span className="text-xs font-sans font-normal">
                  {" "}
                  27,Alara Street <br /> Yaba 100012 <br />
                  Lagos State
                </span>
              </li>
            </ul>

            <PiStarFourFill
              size={14}
              color="#FFFFFF"
              className="mt-3 md:hidden block"
            />
          </div>
        </div>

        <div className="md:pt-32">
          <PiStarFourFill size={20} color="#FFFFFF" className="md:block hidden" />
          <PiStarFourFill
            size={14}
            color="#D434FE"
            className="md:hidden block ml-32"
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
