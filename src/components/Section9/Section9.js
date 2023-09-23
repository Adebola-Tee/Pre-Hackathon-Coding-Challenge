import React from "react";

const PrivacyPolicyAndTerms = () => {
  return (
    <div className="bg-[#150E28]">

    <section className="flex  text-white flex-col md:flex-row justify-center items-center md:items-end relative">
      <div className="left w-full h-1/2 md:w-1/2 md:h-full flex justify-center items-center p-5 lg:p-10 flex-col gap-10 relative">
        <div className="flex flex-col gap-5 self-center md:self-start md:pt-12">
          <h2 className="font-bold text-2xl sm:text-3xl text-center md:text-left">
            Privacy and Policy <br />{" "}
            <span className="">Terms</span>
          </h2>
          <p className="text-gray-400 text-center md:text-left">
            Last updated on September 12, 2023
          </p>
          <p className="text-center md:text-left">
            Below are our privacy & policy which outline a lot of goodies. it's
            our aim to always take care of our participants
          </p>
        </div>
        <div className="border sm:w-[90%]  rounded-md p-5 flex flex-col gap-5 bg-opacity-50 bg-gray-800 backdrop-blur-lg backdrop-filter md:self-start self-center lg:w-[85%] px-5 py-10 z-10">
          <p className="md:text-left text-center self-center md:self-start">
            At getlinked tech Hackathon 1.0 we value your privacy and are
            committed to protecting your personal information. This Privacy Policy
            outlines how we collect, use, disclose and safeguard your data when
            you participate in our tech hackathon event, you consent to the
            practices described in this policy.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg text-[#D434FE] ">
                Licensing Policy
              </h3>
              <p className="font-semibold">
                Here are terms of our Standard License:
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="flex justify-center items-center">
                <img src='./Images/success.png' className="self-center" alt="green-check" />
                <p className="pl-4">
                  The Standard License grants you a non-exclusive right to navigate
                  and register for our event
                </p>
              </li>
              <li className="flex items-center justify-center">
                <img src='./Images/success.png' className="self-center" alt="green-check" />
                <p className="pl-4">
                  You are licensed to use the item available at any free source
                  sites for your project development
                </p>
              </li>
            </ul>
            <button
              className='text-white font-bold py-2 px-4 md: ml-16 rounded-sm mt-4 w-1/2  cursor-pointer'
              style={{
                background: 'linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)',
              }}
            >
              Read More
            </button>
          </div>
        </div>
        <img src='./Images/dull-star.png' alt="star" className="absolute star-blink top-20 sm:top-10 w-3 sm:w-5 left-[70%] lg:left-[60%]" />
        <img src='./Images/star pu2.png' alt="star" className="absolute star-blink bottom-10 left-5 z-10" />
      </div>
      <div className="w-full right h-1/2 md:w-1/2 md:h-full flex relative p-10 flex-col justify-end items-center">
        <img src='./Images/lock-icon.png' alt="lock" className="absolute top-5 w-[70%]" />
        <img
          src='./Images/guy and lock.png'
          alt="lock-person"
          className="self-start z-10 justify-self-start"
        />
        <img
          src='./Images/bright-star.png'
          alt="star"
          className="absolute star-blink bottom-[20%] right-10 w-3 md:w-4"
        />
        <img
          src='./Images/star pu2.png'
          alt="star"
          className="absolute star-blink bottom-[30%] left-20 sm:left-32 w-3 md:w-4"
        />
        <img
          src='./Images/dull-star.png'
          alt="star"
          className="absolute star-blink bottom-[37%] left-32 hidden md:flex sm:left-44 w-3 md:w-4"
        />
        <img
          src='./Images/dull-star.png'
          alt="star"
          className="absolute star-blink top-[20%] left-5 w-4"
        />
        <img
          src='./Images/dull-star.png'
          alt="star"
          className="absolute  star-blink top-[20%] right-1/4 w-3 md:w-4"
        />
      </div>
    </section>
    </div>
  );
};

export default PrivacyPolicyAndTerms;
