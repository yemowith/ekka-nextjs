"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "../global/logo";

const navigation = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Kurumsal", href: "/kurumsal" },
  { name: "Faaliyet Alanları", href: "/faaliyet-alanlari" },
  { name: "İletişim", href: "/iletisim" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className=" p-2.5 ">
              <Logo
                className="h-10 w-auto"
                aria-label="EKKA GAYRİMENKUL Logo"
              />
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-semibold transition-all duration-300 relative py-2 px-1",
                  isScrolled
                    ? pathname === item.href
                      ? "text-yellow-600"
                      : "text-gray-700 hover:text-yellow-600"
                    : pathname === item.href
                    ? "text-yellow-400"
                    : pathname !== "/"
                    ? "text-gray-700 hover:text-yellow-600"
                    : "text-white hover:text-yellow-400"
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t bg-white/95 backdrop-blur-md">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block py-3 px-4 text-sm font-semibold transition-colors rounded-lg mx-2",
                  isScrolled
                    ? pathname === item.href
                      ? "text-yellow-600 bg-yellow-50"
                      : "text-gray-700 hover:text-yellow-600 hover:bg-gray-50"
                    : pathname === item.href
                    ? "text-yellow-400 bg-white/10"
                    : pathname !== "/"
                    ? "text-gray-700 hover:text-yellow-600 hover:bg-gray-50"
                    : "text-white hover:text-yellow-400 hover:bg-white/10"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
