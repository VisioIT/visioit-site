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
  metadataBase: new URL('https://www.visioit.com.br'),
  title: 'Visio IT | Gestão de TI, Segurança, Cloud e Infraestrutura',
  description: 'Gestão de TI, segurança, desenvolvimento, cloud, fibra óptica e infraestrutura para empresas em Araraquara e região.',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Visio IT',
    title: 'Visio IT | Gestão de TI, Segurança, Cloud e Infraestrutura',
    description: 'Tecnologia empresarial da nuvem ao cabo: gestão de TI, segurança, desenvolvimento, cloud e infraestrutura.',
    images: [{
      url: '/visioit-hero-datacenter.png',
      width: 1672,
      height: 941,
      alt: 'Infraestrutura de data center da Visio IT',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visio IT | Gestão de TI, Segurança, Cloud e Infraestrutura',
    description: 'Tecnologia empresarial da nuvem ao cabo, em Araraquara e região.',
    images: ['/visioit-hero-datacenter.png'],
  },
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
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XPC83Q5TKZ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XPC83Q5TKZ');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['Organization', 'ProfessionalService'],
              '@id': 'https://www.visioit.com.br/#organization',
              name: 'Visio IT',
              url: 'https://www.visioit.com.br/',
              logo: 'https://www.visioit.com.br/visioit-icon.png',
              image: 'https://www.visioit.com.br/visioit-hero-datacenter.png',
              email: 'atendimento@visioit.com.br',
              telephone: '+55 16 99711-3481',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Araraquara',
                addressRegion: 'SP',
                addressCountry: 'BR',
              },
              areaServed: {
                '@type': 'AdministrativeArea',
                name: 'Araraquara e região',
              },
              sameAs: [
                'https://www.instagram.com/visioit.br/',
                'https://www.facebook.com/visioit.br',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+55 16 99711-3481',
                email: 'atendimento@visioit.com.br',
                contactType: 'customer service',
                areaServed: 'BR',
                availableLanguage: 'Portuguese',
              },
              knowsAbout: [
                'Gestão de TI',
                'Segurança da informação',
                'Desenvolvimento de software',
                'Cloud e hospedagem',
                'Infraestrutura de redes',
                'Fibra óptica',
                'Conectividade empresarial',
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
