'use client';

import { useState, useEffect } from 'react';

export function ContactHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-8">
            İletişime Geçin
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
            Projeleriniz için uzman ekibimizle iletişime geçin. 
            Size özel çözümler sunmaktan mutluluk duyarız.
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
}