import React from "react";
import {
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
  PhoneCall,
  MapPin,
  StarFour,
} from "@phosphor-icons/react";
import x from "../assets/images/x.png";

const Footer = () => {
  return (
    <div className="bg-purple-200 max-w-full w-[1440px] flex flex-row gap-20 justify-center py-16">
      <StarFour size={20} color="#FFFFFF" />

      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-3">
          <h3 className="text-white text-3xl font-bold font-serif">
            get<span className="text-purple-100">linked</span>
          </h3>
          <p className="text-white font-normal text-sm font-sans">
            Getlinked Tech Hackathon is a technology innovation program
            <br />
            established by a group of organizations with the aim of showcasing{" "}
            <br />
            young and talented individuals in the field of technology
          </p>
        </div>

        <p className="text-white font-sans text-xs font-normal">
          Terms of Use <span className="text-purple-100 px-4">|</span> Privacy
          Policy
        </p>
      </div>

      <div className="pt-[200px]">
        <StarFour size={20} color="#D434FE" />
      </div>

      <div className="flex flex-col gap-4 pt-4">
        <h4 className="text-sm text-purple-100 font-semibold font-sans">
          Useful Links
        </h4>

        <ul className="text-white text-xs font-normal font-sans flex flex-col gap-3">
          <li>Overview</li>
          <li>Timeline</li>
          <li>FAQs</li>
          <li>Register</li>
        </ul>

        <div className="flex flex-row gap-6">
          <h4 className="text-purple-100 text-sm font-normal font-sans pt-2">
            Follow Us
          </h4>

          <div className="flex flex-row gap-2">
            <InstagramLogo size={32} color="#FFFFFF" />
            <img src={x} alt="X" width={20} height={20} />
            <FacebookLogo size={32} color="#FFFFFF" />
            <LinkedinLogo size={32} color="#FFFFFF" />
          </div>
        </div>
      </div>

      <div className="">
        <StarFour size={20} color="#808080" />
      </div>

      <div className="flex flex-col gap-4 pt-4">
        <h4 className="text-sm text-purple-100 font-semibold font-sans">
          Contact Us
        </h4>

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
      </div>
    
      <div className="pt-32">
        <StarFour size={20} color="#FFFFFF" />
      </div>
    </div>
  );
};

export default Footer;
