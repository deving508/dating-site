import { CheckCircle2 } from "lucide-react";
import ExpectImg from "../assets/pexels-novkov-visuals-745725-34294437.jpg";
import { AboutThem } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  useEffect(() => {
    gsap.fromTo(".about-short-p", {
    y: 20,
    opacity: 0,
    },
    {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power1.in",
    scrollTrigger: {
      trigger: ".about-short-p",
      start: "top 90%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

  useEffect(() => {
    gsap.fromTo(".about-image", {
    y: 10,
    opacity: 0,
    },
    {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power1.in",
    scrollTrigger: {
      trigger: ".about-image",
      start: "top 90%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

useEffect(() => {
    gsap.fromTo(".about-desc-one", {
    opacity: 0,
    },
    {
    opacity: 1,
    delay: 1.2,
    duration: 2,
    stagger: 0.3,
    ease: "power1.in",
    scrollTrigger: {
      trigger: ".about-desc",
      start: "top 90%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

useEffect(() => {
    gsap.fromTo(".about-desc-two, .about-desc-three", {
    x: -100,
    opacity: 0,
    },
    {
    opacity: 1,
    x: 0,
    duration: 2,
    stagger: 0.3,
    ease: "power1.in",
    scrollTrigger: {
      trigger: ".about-desc",
      start: "top 90%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

  return (
    <div id="workflow" className="mt-20">
      <h2 className="about-short-p text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        What You Should{" "}
        <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
          <span className="animated-red font-bold">Expect</span> To Find
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2 mt-15">
          <img src={ExpectImg} className="about-image rounded-2xl" alt="Expect" />
        </div>
        <div className="about-desc overflow-hidden pt-12 w-full lg:w-1/2">
          {AboutThem.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="about-desc-one text-green-400 xss:mx-2 md:mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="about-desc-two mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="about-desc-three text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;