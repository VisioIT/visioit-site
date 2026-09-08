import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Visio IT | Sua empresa em movimento',
  description: 'Infraestrutura, segurança, sistemas, aplicativos, sites e hospedagem conectados à operação da sua empresa.',
  themeColor: '#f2f5f6',
  icons: {
    icon: [{ url: '/visioit-icon.png', type: 'image/png', sizes: '512x512' }],
    apple: [{ url: '/visioit-icon.png', type: 'image/png', sizes: '512x512' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
