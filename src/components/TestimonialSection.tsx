import { useState } from "react";
import { testimonials } from "../assets/data/testimonials";

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <section className="h-fit bg-white flex flex-col mx-4 lg:mx-0 mt-40 lg:mt-72 lg:px-24 gap-20 text-center">
        <h6 className="text-3xl font-trajan">Testimonials</h6>
        <div className="h-fit lg:h-[630px] flex flex-col gap-4 lg:gap-10 rounded-[20px] px-1 lg:px-32 pt-14 xl:pt-32 pb-4 bg-gradient-to-b lg:bg-gradient-to-l from-white to-[#DBE2FD] lg:shadow-4xl">
          <div className="flex flex-col gap-6">
            <h5 className="text-3xl text-primary font-bold">
              “{testimonials[activeIndex].title}”
            </h5>
            <p className="text-base leading-7 lg:leading-6">{testimonials[activeIndex].text}</p>
          </div>
          <p className="text-base font-bold text-primary">
            {testimonials[activeIndex].author}
          </p>
          <div className="flex justify-center gap-4 lg:mt-10">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-[25px] h-[25px] rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "bg-primary" : "bg-white lg:bg-fourth"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
