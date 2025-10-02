import React, { useState, useEffect, useRef } from "react";

const servicesData = [
  {
    title: "Medical Billing",
    text: "Reviewing and completing all documentation concerning medical billing efficiently.",
    img: "https://plus.unsplash.com/premium_photo-1661767897334-bbfbdfdc4d1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Medical Coding",
    text: "Translate doctor's diagnoses, treatments, or prescriptions into standard codes.",
    img: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "RCM",
    text: "Streamlining administrative and clinical functions for effective revenue cycle management.",
    img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lZGljYWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Speciality Services",
    text: "Providing specialized project management and productivity improvements.",
    img: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1lZGljYWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Experience & EMR",
    text: "Seamless integration with EMR systems to improve workflow efficiency.",
    img: "https://images.unsplash.com/photo-1557825835-a526494be845?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1lZGljYWx8ZW58MHx8MHx8fDA%3D",
  },
];

export default function ServicesSection() {
  const [isPaused, setIsPaused] = useState(false);
  const [offset, setOffset] = useState(0);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(null);

  useEffect(() => {
    const animate = (currentTime) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = currentTime;
      }

      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      if (!isPaused) {
        setOffset((prev) => {
          const newOffset = prev + deltaTime * 0.003; // Speed control
          // Reset when we've scrolled through one set
          if (newOffset >= 100) {
            return newOffset - 100;
          }
          return newOffset;
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  // Triple the array for seamless looping
  const tripleData = [...servicesData, ...servicesData, ...servicesData];

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
      {/* Left Text */}
      <div className="lg:w-1/3 flex flex-col gap-6">
        <div className="inline-block">
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
            Our Services
          </span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Our Expertise in Healthcare Services
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We provide a range of healthcare support services to streamline your
          operations, improve accuracy, and enhance efficiency.
        </p>
        <button className="mt-4 px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 w-fit">
          Learn More
        </button>
      </div>

      {/* Right Cards */}
      <div
        className="lg:w-2/3 h-[60vh] max-h-[600px] overflow-hidden relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}>
        <div
          className="flex gap-6 absolute"
          style={{
            transform: `translateX(-${offset}%)`,
            width: `${tripleData.length * (260 + 24)}px`, // card width + gap
          }}>
          {tripleData.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-lg min-w-[260px] flex-shrink-0 p-6 flex flex-col gap-4 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="relative overflow-hidden rounded-xl h-60">
                <img
                  src={service.img}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent rounded-xl"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {service.text}
              </p>
              <a
                href="#"
                className="mt-2 inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all duration-300"
                onClick={(e) => e.preventDefault()}>
                Read More
                <span className="text-lg">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
}
