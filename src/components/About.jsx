import React, { useEffect, useRef, useState } from 'react'
import about from "/images/about.webp";

const About = () => {
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
    <div 
      ref={contentRef}
      className="about flex flex-col md:flex-row items-center justify-center min-h-screen px-4 md:px-10 lg:px-20 py-10 gap-10"
    >
      <div className={`transition-all duration-700 w-full md:w-1/2 max-w-md ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
        <img src={about} alt="Tentang Kami" className="w-full h-auto rounded-lg shadow-md" />
      </div>

      <div className={`transition-all duration-700 w-full md:w-1/2 max-w-xl text-center md:text-left ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Ingin Info Lebih Cepat? Hubungi Kami Disini
        </h1>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Kami adalah tim profesional yang berdedikasi untuk memberikan pengalaman terbaik 
          dalam memilih kendaraan Hyundai yang sesuai dengan kebutuhan Anda. <br /><br />

          Komitmen kami adalah memberikan layanan terbaik, mulai dari konsultasi hingga proses 
          pembelian yang mudah dan nyaman. Bersama Hyundai, kami menghadirkan kenyamanan, 
          performa, dan keamanan dalam setiap perjalanan Anda. <br /><br />

          Temukan mobil Hyundai impian Anda bersama kami!
        </p>
      </div>
    </div>

  )
}

export default About