'use client';

import { useEffect, useRef, useState } from 'react';
import { Building, Zap, TrendingUp } from 'lucide-react';

export function AboutSection() {
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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
              EKKA GAYRİMENKUL
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sektörde güvenilir ortağınız olarak, yenilikçi yaklaşımlarımız ve köklü deneyimimizle 
              gayrimenkul ve enerji yatırımlarında öncü konumdayız.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group text-center p-8 rounded-2xl bg-gray-50 hover:bg-gradient-to-br hover:from-yellow-50 hover:to-yellow-100 transition-all duration-500 hover:shadow-xl hover:scale-105">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Gayrimenkul</h3>
              <p className="text-gray-600 leading-relaxed">
                Stratejik konumlarda kaliteli gayrimenkul projeleri ile değer yaratıyoruz.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl bg-gray-50 hover:bg-gradient-to-br hover:from-yellow-50 hover:to-yellow-100 transition-all duration-500 hover:shadow-xl hover:scale-105">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enerji</h3>
              <p className="text-gray-600 leading-relaxed">
                Yenilenebilir enerji çözümleri ile sürdürülebilir geleceğe katkı sağlıyoruz.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl bg-gray-50 hover:bg-gradient-to-br hover:from-yellow-50 hover:to-yellow-100 transition-all duration-500 hover:shadow-xl hover:scale-105">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Yatırım</h3>
              <p className="text-gray-600 leading-relaxed">
                Uzman ekibimizle güvenli ve karlı yatırım fırsatları sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}