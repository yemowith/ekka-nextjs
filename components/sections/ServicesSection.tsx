'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { DollarSign, Home, Zap, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: DollarSign,
    title: "Finans ve Yatırım",
    description: "Güvenli ve karlı yatırım fırsatları ile portföyünüzü büyütebilirsiniz.",
    features: ["Portföy Yönetimi", "Risk Analizi", "Yatırım Danışmanlığı"]
  },
  {
    icon: Home,
    title: "İnşaat ve Gayrimenkul",
    description: "Modern tasarım ve kaliteli işçilikle yaşam alanları oluşturuyoruz.",
    features: ["Konut Projeleri", "Ticari Yapılar", "Kentsel Dönüşüm"]
  },
  {
    icon: Zap,
    title: "Enerji Çözümleri",
    description: "Yenilenebilir enerji teknolojileri ile sürdürülebilir gelecek.",
    features: ["Güneş Enerjisi", "Enerji Verimliliği", "Smart Grid Sistemleri"]
  }
];

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
              Faaliyet Alanlarımız
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Uzman kadromuz ile çeşitli sektörlerde profesyonel hizmet sunuyoruz.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/faaliyet-alanlari"
              className="group inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Tüm Hizmetlerimizi Görün</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}