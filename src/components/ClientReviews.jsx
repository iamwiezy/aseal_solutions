// TestimonialCarousel.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "It's a super product with professional support team. I can't wait to see the futur features.",
    name: "Ashok Kumar",
    job: "Manager",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "We've been looking for a product since the creation of our business.",
    name: "Jack Dawson",
    job: "Shop Keeper",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    text: "The best for exporting. Setting the right results and for free.",
    name: "Cristiano Ronaldo",
    job: "Factory Manager",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
  },
];

const arrowClass =
  "w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 border cursor-pointer transition";
const cardVariant = {
  initial: { opacity: 0, y: 30, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.96 },
};

export default function TestimonialCarousel() {
  const [idx, setIdx] = useState(0);
  const count = testimonials.length;

  const goPrev = () => setIdx((i) => (i - 1 + count) % count);
  const goNext = () => setIdx((i) => (i + 1) % count);

  return (
    <section className="py-10 px-4 flex flex-col items-center bg-white">
      <div className="text-center mb-12 uppercase">
        <h4 className="text-lg font-medium text-gray-400">Read reviews,</h4>
        <h2 className="text-2xl md:text-4xl font-semibold mt-2 mb-2">
          <span className="font-bold">They use our service.</span>
        </h2>
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="text-green-500">★</span>
          <span className="font-semibold">4.2/5</span>
          <span className="text-gray-500">Aseal Solutions</span>
          <span className="text-gray-400">Based on 5210 reviews</span>
        </div>
      </div>

      <div className="flex justify-center w-full max-w-4xl gap-6 items-stretch">
        <div className={`hidden md:flex flex-col justify-center mr-4`}>
          <button className={arrowClass} aria-label="Previous" onClick={goPrev}>
            <span aria-hidden="true">&larr;</span>
          </button>
        </div>

        <div className="flex-1 flex items-stretch justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              variants={cardVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col bg-white shadow-xl rounded-xl px-8 py-10 min-w-[260px] max-w-[370px] mx-auto md:mx-0">
              <span className="text-blue-400 text-4xl">“</span>
              <p className="mb-8 text-gray-800 text-3xl">
                {testimonials[idx].text}
              </p>
              <div className="flex items-center gap-4 mt-auto border-t pt-5">
                <img
                  src={testimonials[idx].avatar}
                  alt={testimonials[idx].name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <span className="font-bold text-gray-900 block">
                    {testimonials[idx].name}
                  </span>
                  <span className="text-xs text-blue-500 font-medium block">
                    {testimonials[idx].job}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={`hidden md:flex flex-col justify-center ml-4`}>
          <button className={arrowClass} aria-label="Next" onClick={goNext}>
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>

      <div className="flex gap-3 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full ${
              i === idx ? "bg-blue-500" : "bg-gray-300"
            } transition`}
            onClick={() => setIdx(i)}
          />
        ))}
      </div>
    </section>
  );
}
