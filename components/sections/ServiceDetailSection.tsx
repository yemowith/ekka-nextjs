'use client';

import { useEffect, useRef, useState } from 'react';
import { DollarSign, Home, Zap, TrendingUp, Shield, Award } from 'lucide-react';

const services = [
  {
    icon: DollarSign,
    title: "Finans ve Yatırım",
    description: "Güvenli ve karlı yatırım fırsatları ile portföyünüzü büyütün.",
    features: [
      "Portföy Yönetimi ve Danışmanlığı",
      "Risk Analizi ve Değerlendirme",
      "Yatırım Stratejisi Geliştirme",
      "Finansal Planlama Hizmetleri"
    ],
    benefits: [
      "Profesyonel portföy yönetimi",
      "Riske göre optimize edilmiş getiri",
      "Şeffaf raporlama sistemi"
    ]
  },
  {
    icon: Home,
    title: "İnşaat ve Gayrimenkul",
    description: "Modern tasarım ve kaliteli işçilikle yaşam alanları oluşturuyoruz.",
    features: [
      "Konut ve Ticari Proje Geliştirme",
      "Kentsel Dönüşüm Projeleri",
      "Mimari Tasarım ve Planlama",
      "İnşaat ve Yapı Denetim Hizmetleri"
    ],
    benefits: [
      "A+ kalite standartları",
      "Zamanında teslim garantisi",
      "Çevre dostu inşaat teknikleri"
    ]
  },
  {
    icon: Zap,
    title: "Enerji Çözümleri",
    description: "Yenilenebilir enerji teknolojileri ile sürdürülebilir gelecek.",
    features: [
      "Güneş Enerjisi Sistemleri",
      "Enerji Verimliliği Optimizasyonu",
      "Smart Grid ve Akıllı Şebeke",
      "Enerji Depolama Çözümleri"
    ],
    benefits: [
      "Enerji maliyetlerinde %60 tasarruf",
      "Karbon ayak izinde azalma",
      "Sürdürülebilir enerji üretimi"
    ]
  }
];

export function ServiceDetailSection() {
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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="space-y-24 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-16 h-16 rounded-2xl flex items-center justify-center mr-4">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <TrendingUp className="h-5 w-5 text-yellow-600 mr-2" />
                        Hizmet Detayları
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Award className="h-5 w-5 text-yellow-600 mr-2" />
                        Avantajlar
                      </h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <Shield className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
                    <div className="aspect-square bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl flex items-center justify-center">
                      <service.icon className="h-24 w-24 text-yellow-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}