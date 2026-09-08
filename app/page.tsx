import Image from 'next/image';
import { GsapEffects } from './GsapEffects';
import { ScrollWorldExperience } from './ScrollWorldExperience';
import { ServicesExperience } from './ServicesExperience';
import { CinematicFooter } from '@/components/ui/motion-footer';
import { ClientLogoCarousel } from '@/components/ui/client-logo-carousel';
import { ContactForm } from './ContactForm';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import { CookieConsent } from './CookieConsent';

const whatsapp = 'https://wa.me/5516997113481?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20com%20a%20Visio%20IT.';
export default function Home() { return <main id="conteudo">
  <GsapEffects />
  <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
  <header className="site-header"><a className="brand" href="#inicio" aria-label="Visio IT, início"><Image src="/visio-logo-menu.png" width={1910} height={578} alt="Visio IT" priority /></a><nav aria-label="Navegação principal"><a href="#servicos">Serviços</a><a href="#clientes">Clientes</a><a href="#contato">Contato</a></nav><a className="header-contact" href={whatsapp} target="_blank" rel="noreferrer">Fale com a Visio <span aria-hidden="true">↗</span></a></header>
  <ScrollWorldExperience whatsapp={whatsapp} />
  <ServicesExperience whatsapp={whatsapp} />
  <ClientLogoCarousel />
  <ContactForm />
  <CinematicFooter whatsapp={whatsapp} />
  <FloatingWhatsApp href={whatsapp} />
  <CookieConsent />
</main>; }
