import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div id="testimonials" className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What Other People <span className="animated-red">Are Saying</span>
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin pop-up">
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