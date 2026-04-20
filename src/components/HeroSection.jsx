import { useEffect } from "react";
import video1 from "../assets/3704252-uhd_4096_2160_25fps (2).mp4";
import video2 from "../assets/5667124-uhd_4096_2160_30fps (2).mp4";
import Image1 from "../assets/Screenshot (89).png"
import Image2 from "../assets/Screenshot (90).png"
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {

  const OpenForm = () => {
  window.location.href =
    "https://docs.google.com/forms/d/1R3bw1JiZD_gIFO9rgDZKfgWQ-ANsKru_dTY8Yq3aLQE/edit";
  }

  const navigate = useNavigate();
  
  /*useEffect(() => {
    gsap.fromTo(".hero-sec",
    { opacity: 0, },
    { opacity: 1, duration: 3, ease: "power2.out", stagger: 1}    
    )
  }, [])
  */

  return (

    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        DatingR find the love
        <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
          {" "}
        of your life
        </span>
      </h1>
      <p className="desc-p mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Who doesn't want a <span className="font-bold">perfect</span> partner? the kind that feels more like he's your one and only soulmate. Not just someone to date… but someone who feels like they were made for you.
      </p>
      <div className="flex justify-center my-10">
        <a onClick={() => navigate('profiles')}
          className="bg-red-800 py-3 px-4 mx-3 rounded-md border border-gray-950
          hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
        >
          Get Started
        </a>
        <a onClick={OpenForm} className="py-3 px-4 mx-3 rounded-md border border-white
        hover:bg-white transition-all duration-300 hover:text-black cursor-pointer">
          Do a form
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg md:w-1/2 border xss:hidden md:block xss:w-full border-black shadow-sm shadow-black mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <img className="md:hidden rounded-lg w-1/2 border border-black mx-2 my-4" src={Image1} alt="" />
        <video
          autoPlay
          loop
          muted    
          className="rounded-lg w-1/2 border xss:hidden md:block border-black shadow-sm shadow-black mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <img className="md:hidden rounded-lg w-1/2 border border-black mx-2 my-4" src={Image2} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;