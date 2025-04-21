import React, { useEffect, useRef, useState } from 'react';
import background from "/images/bg-pg1.webp";
import data from "../data/data.json";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
  <div className="w-full h-screen bg-cover bg-center" style={{backgroundImage: `url(${background})`}}>
  <div className="w-full h-full flex items-center px-4 md:px-10">
    <div 
    ref={contentRef}
    className={`hero-card text-white p-6 py-30 rounded-md max-w-1/2 transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
      <h1 className="text-8xl sm:text-2xl md:text-4xl font-bold mb-2">{data.home.title}</h1>
      <p className="mb-4 text-2xl">
        {data.home.desc}
      </p>
      <button className="button-see">See Product</button>
    </div>
  </div>
</div>

  );
};

export default Hero;
