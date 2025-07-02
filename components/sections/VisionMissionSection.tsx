'use client';

import { useEffect, useRef, useState } from 'react';
import { Target, Eye, Heart } from 'lucide-react';

export function VisionMissionSection() {
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
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
              Vizyon & Misyon
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="group">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Vizyonumuz</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Türkiye'nin gayrimenkul ve enerji sektörlerinde öncü şirket olarak, 
                  sürdürülebilir büyüme ile sektöre değer katan, uluslararası standartlarda 
                  hizmet sunan güvenilir bir kurum olmak.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Misyonumuz</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Müşterilerimize kaliteli ve güvenilir yatırım çözümleri sunarak, 
                  çevre dostu projeler ile sürdürülebilir kalkınmaya katkı sağlamak 
                  ve toplumsal değer yaratmak.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Değerlerimiz</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Güvenilirlik</h4>
                    <p className="text-gray-600">Şeffaflık ve dürüstlük ilkesiyle hareket ederiz.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Yenilikçilik</h4>
                    <p className="text-gray-600">Teknoloji ve yenilik odaklı çözümler geliştiririz.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Sürdürülebilirlik</h4>
                    <p className="text-gray-600">Çevre dostu ve sürdürülebilir projeler önceliğimizdir.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Müşteri Odaklılık</h4>
                    <p className="text-gray-600">Müşteri memnuniyeti her şeyin üzerindedir.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}