import React from 'react';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../../components/Navbar/Navbar';
import Section2 from '../../components/Section2/Section2';
import Section3 from '../../components/Section3/Section3';
import Section4 from '../../components/Section4/Section4';
import Timeline from '../../components/Section5/Section5';
const Page = () => {

  useEffect(()=>{
    AOS.init({
      easing:'ease-out-back',
      duration:1200,
      delay:100,
      mirror:true,
      anchorPlacement: 'bottom-bottom',
      offset:160,
    });
    AOS.refresh();
      }, []);

  return (
    <div>
      <Navbar />
     <Section2/>
     <Section3/>
     <Section4/>
     {/* <Timeline/> */}
    </div>
  );
};

export default Page;
