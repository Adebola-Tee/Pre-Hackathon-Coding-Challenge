import React from "react";

const FaqsCombined = () => {
  const faqData = [
    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "Yes, you can work on a project you started before the hackathon. ...",
    },
    {
      question: "How do I register for the hackathon?",
      answer: "To register for the hackathon, visit our registration page and fill out the form. ...",
    },
    {
      question: "What happens if I don't have an idea for a project?",
      answer: "If you don't have an idea for a project, you can join a team and collaborate with others. ...",
    },
    {
      question: "Can I join a team or do I have to come with one?",
      answer: "Either way is fine as long as you actively participate.",
    },
    {
      question: "What happens after the hackathon ends?",
      answer: "Sip a coffee and await the great day of September 26th.",
    },
    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "Yes, you can work on a project you started before the hackathon. ...",
    },
  ];

  return (
    <div className="bg-[#150E28]">
            <img src="./Images/Line.png" alt="horizontal line" />
      <section id="faqs" className="flex flex-col md:flex-row border-gray-700 border-b text-white">
        <div className="flex flex-col items-center gap-10 w-full md:w-1/2 h-1/2 md:h-full p-5 lg:p-10 relative"  data-aos="flip-left">
          <div className="flex-col self-center md:self-start items-center justify-center flex gap-5 md:pt-12">
            <div className="self-center md:self-start font-montserrat">
              <h2 className="font-bold text-2xl text-center md:text-left sm:text-3xl">
                Frequently Asked
              </h2>
              <h2 className="font-bold text-2xl text-[#D434FE] text-center md:text-left sm:text-3xl text-scheme-violet">
                Question
              </h2>
            </div>

            <div className="self-center md:self-start">
              <p className="text-center md:text-left self-center md:self-start">
                We got answers to the questions that you might <br /> want to ask
                about <span className="font-semibold">getlinked Hackathon 1.0</span>
              </p>
            </div>
          </div>

          <div className=" space-y-2 qanda w-[85%] self-center md:self-start text-xs">
            {faqData.map((item, index) => (
              <details
                className="w-full pb-3  marker:hidden"
                style={{ borderBottom: "1px solid #D434FE" }}
                key={index}
              >
                <summary className="flex items-center gap-1 marker:content-none hover:cursor-pointer justify-between">
                  {item.question}
                  <img
                    src="./Images/plus.png"
                    className="-rotate-90 group-open:rotate-0 transition-transform text- text-xs"
                  />
                </summary>
                <div className="px-2 w-full">{item.answer}</div>
              </details>
            ))}
          </div>
          <img
            src="./Images/sata gra.png"
            alt="star"
            className="absolute star-blink sm:left-[25%] left-10 md:left-2 w-5"
          />
        </div>

        <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex flex-col items-center p-5 sm:p-10" data-aos="flip-right">
          <div className="relative flex gap-10 items-center justify-center">
            <img src="./Images/dark question-mark.png" alt="questionMark" />
            <img
              src="./Images/light question-mark.png"
              alt="questionMark"
              className="relative bottom-5"
            />
            <img src="./Images/dark question-mark.png" alt="questionMark" />
          </div>
          <img src="./Images/cwok_casual.png" alt="avatar" className="" />
          <img
            src="./Images/dull-star.png"
            alt="star"
            className="absolute star-blink bottom-10 left-[70%] w-3"
          />
          <img src="./Images/dull-star.png" alt="star" className="absolute star-blink left-5 top-1/3 w-3" />
          <img
            src="./Images/sata gra.png"
            alt="star"
            className="absolute star-blink top-24 left-20 w-3"
          />
          <img
            src="./Images/sata gra.png"
            alt="star"
            className="absolute star-blink  top-5 left-[57%] w-3"
          />
        </div>
      </section>
    </div>
  );
};

export default FaqsCombined;
