"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const images = [
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[100vh] w-full overflow-hidden flex items-center justify-center text-center">
      {/* Background Image with fade transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0">
          <img
            src={images[index]}
            alt="Hero Background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
          Medical Billing made easy with
          <span className="text-blue-400"> Aseal Solution</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200">
          Get started with our comprehensive medical billing services
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" className="rounded-full px-8 cursor-pointer">
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 cursor-pointer text-white border-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
