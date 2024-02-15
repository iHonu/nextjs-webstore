import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import CartProvider from '@/components/Providers';
import ShoppingCartModal from '@/components/ShoppingCartModal';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Forest Magique',
  description:
    'Hand-knitted toys, crafted to bring warmth and whimsy into every embrace.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <NavBar />
          <ShoppingCartModal />
          {children}
          <Analytics />
        </CartProvider>
      </body>
    </html>
  );
}
