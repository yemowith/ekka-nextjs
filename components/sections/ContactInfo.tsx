"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Adres",
    details: [
      "Emniyet Evleri Mah. Eski Büyükdere Cad.",
      "Sapphire No: 1/1 İç Kapı No: 1B04",
      "Kağıthane / İSTANBUL",
    ],
  },
  {
    icon: Mail,
    title: "E-posta",
    details: ["info@ekkaholding.com.tr"],
  },
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

    // Example fetch to contact API (for demonstration)
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Demo",
        email: "demo@example.com",
        phone: "555-555-5555",
        subject: "Test",
        message: "Bu bir test mesajıdır.",
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Contact API response:", data))
      .catch((err) => console.error("Contact API error:", err));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-8">
          İletişim Bilgileri
        </h2>

        <div className="space-y-8">
          {contactDetails.map((item, index) => (
            <div
              key={index}
              className={`flex items-start space-x-4 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <item.icon className="h-6 w-6 text-white" />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <div className="space-y-1">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
