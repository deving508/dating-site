import { testimonials } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {

  useEffect(() => {
      gsap.fromTo(".testimonials-text", {
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
        trigger: ".testimonials-text",
        start: "top 90%", 
        toggleActions: "play none none none",
      }
      }
    );
  }, []);

  useEffect(() => {
      gsap.fromTo(".testimonials", {
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
        trigger: ".testimonials",
        start: "top 90%", 
        toggleActions: "play none none none",
      }
      }
    );
  }, []);

  return (
    <div id="testimonials" className="mt-20 tracking-wide">
      <h2 className="testimonials-text text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What Other People <span className="animated-red">Are Saying</span>
      </h2>
      <div className="testimonials flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin pop-up xss:-mx-4 sm:mx-0">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-15 h-15 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div className="mt-2">
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.short}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;