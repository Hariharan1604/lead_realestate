import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap', weight: ['400','500','600','700','800'] });

export const metadata = {
  title: 'Partnero — Intelligent Real Estate Channel Partner',
  description: 'Partnero captures leads from 99acres & top portals, engages instantly via AI chatbot, and closes deals faster with smart CRM automation.',
  keywords: 'real estate, channel partner, AI leads, CRM, 99acres, property, builder, sales automation',
  openGraph: {
    title: 'Partnero — Intelligent Real Estate Channel Partner',
    description: 'Transform leads into closed deals with AI intelligence.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
