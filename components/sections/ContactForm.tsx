"use client";

import { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim()) {
      toast({ title: "Hata", description: "Ad Soyad zorunludur." });
      return;
    }
    if (!formData.email.trim()) {
      toast({ title: "Hata", description: "E-posta zorunludur." });
      return;
    }
    // Simple email regex
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast({
        title: "Hata",
        description: "Geçerli bir e-posta adresi girin.",
      });
      return;
    }
    if (!formData.subject.trim()) {
      toast({ title: "Hata", description: "Konu seçiniz." });
      return;
    }
    if (!formData.message.trim()) {
      toast({ title: "Hata", description: "Mesaj alanı zorunludur." });
      return;
    }

    setLoading(true);
    let timeoutId: NodeJS.Timeout | null = null;
    try {
      const controller = new AbortController();
      timeoutId = setTimeout(() => {
        controller.abort();
      }, 10000); // 10 seconds

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      const data = await res.json();
      if (data.success) {
        toast({
          title: "Mesajınız gönderildi!",
          description: "En kısa sürede size dönüş yapacağız.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast({
          title: "Hata",
          description:
            data.error || "Mesaj gönderilemedi. Lütfen tekrar deneyin.",
        });
      }
    } catch (error: any) {
      if (error.name === "AbortError") {
        toast({
          title: "Zaman aşımı",
          description: "Sunucu yanıt vermiyor. Lütfen tekrar deneyin.",
        });
      } else {
        toast({
          title: "Hata",
          description: "Mesaj gönderilemedi. Lütfen tekrar deneyin.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div ref={sectionRef}>
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-8">
          Mesaj Gönderin
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Ad Soyad *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                placeholder="Adınızı ve soyadınızı girin"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                E-posta *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                placeholder="E-posta adresinizi girin"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                placeholder="Telefon numaranızı girin"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Konu *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
              >
                <option value="">Konu seçiniz</option>
                <option value="gayrimenkul">Gayrimenkul Yatırımı</option>
                <option value="enerji">Enerji Projeleri</option>
                <option value="insaat">İnşaat Hizmetleri</option>
                <option value="finans">Finans ve Danışmanlık</option>
                <option value="other">Diğer</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Mesaj *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 resize-none"
              placeholder="Mesajınızı detaylı olarak yazın..."
            />
          </div>

          <button
            type="submit"
            className="group w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? (
              <>
                <span>Gönderiliyor...</span>
                <svg
                  className="animate-spin ml-2 h-5 w-5 text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
              </>
            ) : (
              <>
                <span>Mesajı Gönder</span>
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          <p className="text-sm text-gray-500 text-center">
            * işaretli alanlar zorunludur. Bilgileriniz güvenli bir şekilde
            saklanır.
          </p>
        </form>
      </div>
    </div>
  );
}
