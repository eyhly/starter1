import React, { useEffect, useRef, useState } from 'react'
import data from "../data/data.json";

const Product = () => {
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
    <div className="text-center py-30 bg-white">
      <h1 className="text-4xl font-bold mb-2">Product</h1>
      <p className="text-gray-500 mb-18 text-2xl">Find your dream product here!</p>

      <div 
      ref={contentRef}
      className={`flex flex-wrap justify-center gap-6 px-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {data.products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 w-150 hover:shadow-xl transition-all duration-300"
          >
            <img src={product.image} alt={product.title} className="w-full h-auto mb-4 mt-4" />
            <h3 className="text-3xl font-bold mb-4 mt-4">{product.title}</h3>
            <p className="text-gray-600 text-2xl mt-4 mb-4">
              {product.price} <br />
              {product.description}
            </p>
            <button className="button-see mt-4">
              See More
            </button>
          </div> 
        ))}
      </div>
    </div>

  )
}

export default Product