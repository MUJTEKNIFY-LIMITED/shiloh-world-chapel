import { useState } from "react";

const testimonials = [
  {
    title: "“HEALED OF INSANITY BY DIVINE TOUCH”",
    text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat blandit purus ac tempus. Nam elementum est ornare enim consequat, quis rutrum tortor pharetra. Fusce vitae nibh vitae risus fermentum fringilla nec fringilla ipsum. In fermentum rhoncus enim accumsan sagittis. Vivamus laoreet accumsan vehicula. Quisque in accumsan nisl, ut pellentesque lectus. Phasellus mattis lacinia lorem, sed faucibus mi malesuada sed. Aenean sit amet pharetra leo. Vivamus posuere justo non purus pellentesque fringilla.orem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat blandit purus ac tempus. Nam elementum est ornare enim consequat, quis rutrum tortor pharetra. Fusce vitae nibh vitae risus fermentum fringilla nec fringilla ipsum. In fermentum rhoncus enim accumsan sagittis. Vivamus laoreet accumsan vehicula. Quisque in accumsan nisl, ut pellentesque lectus. Phasellus mattis lacinia lorem, sed faucibus mi malesuada sed. Aenean sit amet pharetra leo. Vivamus posuere justo non purus pellentesque fringilla.",
    author: "FLORENCE NWAIWU, IMO STATE",
  },
  {
    title: "“SAFE DELIVERY FROM LEG ULCER VIA PROPHECY”",
    text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat blandit purus ac tempus. Nam elementum est ornare enim consequat, quis rutrum tortor pharetra. Fusce vitae nibh vitae risus fermentum fringilla nec fringilla ipsum. In fermentum rhoncus enim accumsan sagittis. Vivamus laoreet accumsan vehicula. Quisque in accumsan nisl, ut pellentesque lectus. Phasellus mattis lacinia lorem, sed faucibus mi malesuada sed. Aenean sit amet pharetra leo. Vivamus posuere justo non purus pellentesque fringilla.orem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat blandit purus ac tempus. Nam elementum est ornare enim consequat, quis rutrum tortor pharetra. Fusce vitae nibh vitae risus fermentum fringilla nec fringilla ipsum. In fermentum rhoncus enim accumsan sagittis. Vivamus laoreet accumsan vehicula. Quisque in accumsan nisl, ut pellentesque lectus. Phasellus mattis lacinia lorem, sed faucibus mi malesuada sed. Aenean sit amet pharetra leo. Vivamus posuere justo non purus pellentesque fringilla.",
    author: "MRS OKEKE, ANAMBRA STATE",
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <section className="h-fit bg-white flex flex-col px-4 lg:px-20 gap-20 text-center border border-red-500">
        <h6 className="text-3xl font-trajan">Testimonials</h6>
        <div className="h-fit lg:h-[630px] flex flex-col gap-4 lg:gap-10 rounded-[20px] px-1 lg:px-32 pt-14 lg:pt-32 pb-4 bg-gradient-to-b lg:bg-gradient-to-l from-white to-[#DBE2FD] lg:shadow-2xl">
          <div className="flex flex-col gap-6">
            <h5 className="text-3xl text-primary font-bold">
              “{testimonials[activeIndex].title}”
            </h5>
            <p className="text-base">{testimonials[activeIndex].text}</p>
          </div>
          <p className="text-base font-bold text-primary">
            {testimonials[activeIndex].author}
          </p>
          <div className="flex justify-center gap-4 mt-4 lg:mt-10">
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
