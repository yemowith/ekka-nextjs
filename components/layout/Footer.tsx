'use client';

import Link from 'next/link';
import { Building2, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-2.5 rounded-xl">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl">EKKA GAYRİMENKUL</div>
                <div className="text-sm text-gray-400">Yatırımları ve Enerji A.Ş.</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Gayrimenkul ve enerji sektörlerinde güvenilir ortağınız. 
              Sürdürülebilir yatırım çözümleri ile geleceği inşa ediyoruz.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-800 p-3 rounded-lg hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-3 rounded-lg hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Hızlı Erişim</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/kurumsal" className="text-gray-300 hover:text-yellow-400 transition-colors">Hakkımızda</Link></li>
              <li><Link href="/faaliyet-alanlari" className="text-gray-300 hover:text-yellow-400 transition-colors">Hizmetlerimiz</Link></li>
              <li><Link href="/iletisim" className="text-gray-300 hover:text-yellow-400 transition-colors">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span>+90 212 XXX XX XX</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span>info@ekkagayrimenkul.com</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-yellow-400 mt-1" />
                <span>İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 EKKA GAYRİMENKUL. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                KVKK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}