'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { number: "15+", label: "Yıllık Deneyim" },
  { number: "250+", label: "Tamamlanan Proje" },
  { number: "50M+", label: "Toplam Yatırım" },
  { number: "1000+", label: "Memnun Müşteri" }
];

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const intervals = stats.map((stat, index) => {
        const target = parseInt(stat.number.replace(/\D/g, ''));
        let current = 0;
        const increment = target / 50;
        
        return setInterval(() => {
          current += increment;
          if (current >= target) {
            setCounters(prev => {
              const newCounters = [...prev];
              newCounters[index] = target;
              return newCounters;
            });
            clearInterval(intervals[index]);
          } else {
            setCounters(prev => {
              const newCounters = [...prev];
              newCounters[index] = Math.floor(current);
              return newCounters;
            });
          }
        }, 50);
      });

      return () => intervals.forEach(clearInterval);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Rakamlarla EKKA
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  {stat.number.includes('+') 
                    ? `${counters[index]}+`
                    : stat.number.includes('M')
                    ? `${counters[index]}M+`
                    : counters[index]
                  }
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}