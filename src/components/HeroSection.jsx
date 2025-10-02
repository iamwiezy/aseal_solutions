import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1">
          <div className="w-20 h-1 bg-blue-400 mb-4 rounded"></div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-blue-400">Aseal Solutions</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
            Best Medical Billing Company in Mizoram
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed text-justify">
            We’re happy to tell you that your search for a brilliant, competent,
            and trustworthy off-shore{" "}
            <span className="text-blue-500 underline">medical billing</span>{" "}
            platform finally comes to an end. Owing to a highly professional
            team of specialists possessing the right expertise, exhaustive
            knowledge, and unparalleled skills, today EHS is looked upon as the
            panacea in the field of medical billing.
          </p>
          <p className="text-gray-600 leading-relaxed text-justify">
            At <span className="text-blue-500 underline">Aseal Solutions</span>,
            we commit ourselves to be the solution to any and every medical
            billing problem. Whether it is to improve productivity or increase
            revenue, we offer outstanding services to our clients in Mizoram.
            With our stronghold in this industry, we aim to positively
            contribute towards a brighter future, establishing ourselves as the
            finest medical billing service providers across the globe.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // replace with your image path or import
            alt="Doctor"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
