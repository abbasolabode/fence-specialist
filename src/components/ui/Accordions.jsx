import { useState } from "react";
import AccordionItems from "./AccordionItems";

const accordions = [
  {
    header: "What types of fence do you install?",
    content:
      "At Rachuna Fence LLC, we specialize in a variety of fence types including wood, vinyl, chain link, and custom fabricated fences. We work with you to select the best material and style that fits your needs, preferences, and budget.",
  },
  {
    header: "How long does installation typically take?",
    content:
      "Installation time varies depending on the fence type and property size. Most residential fence installations are completed within 1-3 days. We'll provide a timeline estimate during your free consultation.",
  },
  {
    header: "Do you provide free estimates?",
    content:
      "Yes! We offer free, no-obligation estimates. Our team will visit your property, discuss your needs, and provide a detailed quote with all costs clearly outlined.",
  },
  {
    header: "What areas do you serve?",
    content:
      "We serve the greater metropolitan area and surrounding communities. Contact us to confirm if we service your specific location - we're always expanding our service area!",
  },
  {
    header: "What warranty do you offer on your fences?",
    content:
      "We stand behind our work with comprehensive warranties. Materials come with manufacturer warranties (typically 10+ years), and our workmanship is guaranteed for 5 years against installation defects.",
  },
];

export default function Accordions() {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <div className="w-full px-4 py-8 mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[94.5rem] 
      min-h-[20rem] md:min-h-[30rem] lg:py-12 2xl:min-h-[46.5rem] 
      flex flex-col items-center gap-8 lg:gap-16">

      <div className="w-full mx-auto lg:max-w-[90.5rem] 
        min-h-[20rem] 2xl:min-h-[34rem] 
        mt-0 lg:mt-12 2xl:mt-[5rem]">

        <div className="mb-8 lg:mb-16 text-center">
          <h1 className="font-lato text-xl sm:text-2xl md:text-3xl lg:text-4xl 
            font-semibold leading-tight 
            flex flex-col sm:flex-row sm:justify-center sm:items-center sm:gap-2">
            Our most
            <span className="italic text-utiliBlue font-sourceSerif mr-[7.5rem]">
              frequently asked questions
            </span>
          </h1>
        </div>

        <div className="flex flex-col items-center max-auto justify-center space-y-4 md:space-y-6 lg:space-y-8 w-full">
          {accordions.map((accordion, index) => (
            <div key={index} className="w-full max-w-3xl  ml-[5rem]">
              <AccordionItems
                accordion={accordion}
                index={index}
                curOpen={isOpen}
                onSetOpen={setIsOpen}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}