import React from 'react';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../../components/Navbar/Navbar';
import IntroductionSection from '../../components/Introduction/Introduction';
import RulesSection from '../../components/RuleAndGuidelines/RulesAndGuidelines';
import JudgingCriteriaSection  from '../../components/JudgingCriteria/JudgingCriteria';
import FaqsCombinedSection from '../../components/FAQ/FAQ';
import TimelineSection from '../../components/Timeline/Timeline';
import PrizesSection  from '../../components/Prizes/PrizesSection';
import PartnersSection from '../../components/Partners/Partners';
import PoliciesPolicyAndTerms from '../../components/Section9/Section9';
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
     <IntroductionSection/>
     <RulesSection/>
     <JudgingCriteriaSection/>
     <FaqsCombinedSection/>
     <TimelineSection/>
     <PrizesSection/>
     <PartnersSection/>
     <PoliciesPolicyAndTerms/>
    </div>
  );
};

export default Page;
