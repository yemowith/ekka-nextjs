'use client';

import { useEffect, useRef, useState } from 'react';
import { Calendar, Award, Users, Globe } from 'lucide-react';

const milestones = [
  {
    year: "2010",
    title: "Kuruluş",
    description: "EKKA GAYRİMENKUL Yatırımları ve Enerji A.Ş. kuruldu.",
    icon: Calendar
  },
  {
    year: "2015",
    title: "İlk Büyük Proje",
    description: "İstanbul'da ilk büyük gayrimenkul projemizi tamamladık.",
    icon: Award
  },
  {
    year: "2018",
    title: "Enerji Sektörüne Giriş",
    description: "Yenilenebilir enerji projelerine odaklanmaya başladık.",
    icon: Globe
  },
  {
    year: "2024",
    title: "Büyüme Devam Ediyor",
    description: "250+ proje ile sektöre değer katmaya devam ediyoruz.",
    icon: Users
  }
];

export function HistorySection() {
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
              Tarihçemiz
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              15 yılı aşkın tecrübemizle sektörde iz bıraktığımız önemli anlar.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 to-yellow-600"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className={`relative flex items-start space-x-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg relative z-10">
                      <milestone.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="flex-1 bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                      <div className="text-2xl font-bold text-yellow-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}