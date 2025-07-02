'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Hayalinizdeki Yatırımı Birlikte Gerçekleştirelim
          </h2>
          
          <p className="text-xl text-gray-800 mb-12 leading-relaxed max-w-3xl mx-auto">
            Uzman ekibimiz size en uygun yatırım fırsatlarını sunar ve 
            projenizin her aşamasında yanınızda olur.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/iletisim"
              className="group bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Projenizi Konuşalım</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a 
              href="tel:+902121234567"
              className="group bg-transparent border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Hemen Arayın</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}