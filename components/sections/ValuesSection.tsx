'use client';

import { useEffect, useRef, useState } from 'react';
import { Shield, Lightbulb, Leaf, Users } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: "Güvenilirlik",
    description: "Şeffaflık ve dürüstlük ilkesiyle her projede güvenilir ortağınızız."
  },
  {
    icon: Lightbulb,
    title: "Yenilikçilik",
    description: "Teknoloji ve yenilik odaklı çözümlerle sektöre öncülük ediyoruz."
  },
  {
    icon: Leaf,
    title: "Sürdürülebilirlik",
    description: "Çevre dostu projelerle gelecek nesillere yaşanabilir bir dünya bırakıyoruz."
  },
  {
    icon: Users,
    title: "Müşteri Odaklılık",
    description: "Müşteri memnuniyeti ve uzun vadeli ilişkiler önceliğimizdir."
  }
];

export function ValuesSection() {
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Değerlerimiz
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              İş yapış şeklimizi belirleyen temel değerlerimiz ile hareket ediyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`group text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}