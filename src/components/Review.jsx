import React, { useEffect, useRef, useState } from 'react';
import data from '../data/data.json'

const Review = () => {
    function chunkArray(arr, size) {
    return arr.reduce((acc, _, i) => {
        if (i % size === 0) acc.push(arr.slice(i, i + size));
        return acc;
    }, []);
    }

  const [currentIndex, setCurrentIndex] = useState(0);
  const chunkedReviews = chunkArray(data.reviews, 2);

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
    className="flex flex-col items-center justify-center py-16 bg-white text-gray-800">
      <div className="flex flex-col md:flex-row items-start justify-center gap-12 w-full px-4">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-20': 'opacity-0 translate-x-0'} max-w-3xl text-center md:text-left`}>
          <h2 className="text-7xl font-bold mb-4">What People Say About Us?</h2>
          <p className="mb-20 text-2xl text-gray-600">What People Say About Us?</p>
          <button className="button-see">See More</button>
        </div>
        
        <div className={`relative w-[900px] max-w-full overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0': 'opacity-0 translate-x-20'}`}>
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {chunkedReviews.map((pair, index) => (
              <div key={index} className="min-w-full flex gap-4 px-4">
                {pair.map((review, i) => (
                  <div key={i} className="relative w-full rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-[400px] object-cover rounded-lg"
                    />

                    <div className="absolute top-4 left-4 flex items-center gap-3 bg-white bg-opacity-80 px-4 py-2 rounded-full shadow">
                      <img
                        src={review.profile}
                        alt={`${review.name} profile`}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold">{review.name}</p>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={`text-yellow-400 text-sm ${i < review.stars ? 'opacity-100' : 'opacity-30'}`}
                            >
                              ★
                            </i>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow-md">
                      <p className="text-gray-700 italic text-1xl">"{review.review}"</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

                <div className="mt-6 flex gap-4">
                    <button
                    onClick={() => setCurrentIndex(prev => Math.max(prev - 1, 0))}
                    className="button-nav"
                    >
                    Prev
                    </button>
                    <button
                    onClick={() => setCurrentIndex(prev => Math.min(prev + 1, chunkedReviews.length - 1))}
                    className="button-nav"
                    >
                    Next
                    </button>
                </div>
          
        </div>
      </div>
    </div>
  );
};

export default Review;
