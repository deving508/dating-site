import { CheckCircle2 } from "lucide-react";
import ExpectImg from "../assets/pexels-novkov-visuals-745725-34294437.jpg";
import { AboutThem } from "../constants";

const About = () => {
  return (
    <div id="workflow" className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        What You Should{" "}
        <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
          <span className="animated-red font-bold">Expect</span> To Find
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2 mt-15">
          <img src={ExpectImg} className="rounded-2xl" alt="Expect" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {AboutThem.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;