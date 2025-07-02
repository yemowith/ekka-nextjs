import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'EKKA GAYRİMENKUL - Gayrimenkul ve Enerji Yatırımları',
  description: 'Finans, inşaat ve yenilenebilir enerji sektörlerinde kapsamlı çözümler sunan önder gayrimenkul ve enerji yatırım şirketi.',
  keywords: 'gayrimenkul, enerji yatırımı, inşaat, finans, yenilenebilir enerji, Türkiye',
  authors: [{ name: 'EKKA GAYRİMENKUL' }],
  openGraph: {
    title: 'EKKA GAYRİMENKUL - Gayrimenkul ve Enerji Yatırımları',
    description: 'Finans, inşaat ve yenilenebilir enerji sektörlerinde kapsamlı çözümler sunan önder gayrimenkul ve enerji yatırım şirketi.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} ${playfair.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}