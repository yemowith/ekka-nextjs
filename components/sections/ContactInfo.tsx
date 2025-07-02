'use client';

import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    title: "Adres",
    details: [
      "Levent Mahallesi",
      "Büyükdere Caddesi No: 123",
      "Şişli / İstanbul"
    ]
  },
  {
    icon: Phone,
    title: "Telefon",
    details: [
      "+90 212 XXX XX XX",
      "+90 212 XXX XX XX"
    ]
  },
  {
    icon: Mail,
    title: "E-posta",
    details: [
      "info@ekkagayrimenkul.com",
      "iletisim@ekkagayrimenkul.com"
    ]
  },
  {
    icon: Clock,
    title: "Çalışma Saatleri",
    details: [
      "Pazartesi - Cuma: 09:00 - 18:00",
      "Cumartesi: 09:00 - 16:00"
    ]
  }
];

export function ContactInfo() {
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
    <div ref={sectionRef}>
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-8">
          İletişim Bilgileri
        </h2>
        
        <div className="space-y-8">
          {contactDetails.map((item, index) => (
            <div 
              key={index}
              className={`flex items-start space-x-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <div className="space-y-1">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl">
          <h3 className="font-semibold text-gray-900 mb-3">Hızlı İletişim</h3>
          <p className="text-gray-600 mb-4">
            Acil durumlar için 7/24 ulaşabileceğiniz iletişim hattımız:
          </p>
          <a 
            href="tel:+905321234567" 
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            <Phone className="h-5 w-5" />
            <span>+90 532 XXX XX XX</span>
          </a>
        </div>
      </div>
    </div>
  );
}