import { features } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const FeatureSection = () => {

  useEffect(() => {
    gsap.fromTo(".short-p", {
    y: 30,
    opacity: 0,
    },
    {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".short-p",
      start: "top 90%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

useEffect(() => {
    gsap.fromTo(".long-p", {
    y: 30,
    opacity: 0,
    },
    {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".long-p",
      start: "top 90%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

useEffect(() => {
    gsap.fromTo(".features-icon, .features-text, .features-desc", {
    y: 30,
    opacity: 0,
    },
    {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power3.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".features-section",
      start: "top 90%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

  return (
    <div id="features" className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="short-p bg-neutral-900 text-red-600 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Information
        </span>
        <h2 className="long-p text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          The{" "}
          <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
            <span className="animated-red font-bold">Best Experience</span> <span className="text-white">there is</span>
          </span>
        </h2>
      </div>
      <div className="features-section flex flex-wrap mt-10 lg:mt-20 xss:-mx-2">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2 py-2">
            <div className="features-section flex bg-neutral-900/50 pop-up justify-center items-center">
              <div className="features-icon flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-red-800 justify-center items-center rounded-full">
                {feature.icon}  
              </div>  
              <div className="pt-8">
                <h5 className="features-text mt-1 mb-6 xss:text-[1.1rem] xs:text-xl">{feature.text}</h5>
                <p className="features-desc xss:text-sm xs:text-md pr-2 mb-10 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;