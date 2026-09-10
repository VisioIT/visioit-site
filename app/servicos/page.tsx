import type { Metadata } from 'next';
import Image from 'next/image';
import { serviceCategories, services } from './services';

export const metadata: Metadata = {
  title: 'Serviços de TI para empresas em Araraquara | Visio IT',
  description: 'Gestão de TI, segurança, desenvolvimento, cloud, cabeamento, fibra óptica, redes e conectividade para empresas em Araraquara e região.',
  alternates: { canonical: '/servicos' },
  openGraph: { title: 'Serviços de TI para empresas | Visio IT', description: 'Da nuvem ao cabo: soluções de tecnologia para manter empresas seguras, conectadas e disponíveis.', url: '/servicos', type: 'website' },
};

export default function ServicesPage() {
  return <main className="service-hub">
    <a className="skip-link" href="#catalogo">Ir para os serviços</a>
    <header className="service-header">
      <a className="service-brand" href="/" aria-label="Visio IT, página inicial"><Image src="/visio-logo-menu.png" width={1910} height={578} alt="Visio IT" priority /></a>
      <nav aria-label="Navegação"><a href="/">Site institucional</a><a href="/blog">Blog</a><a href="/#contato">Fale conosco</a></nav>
    </header>
    <section className="service-hub-hero">
      <p><span /> Serviços Visio IT</p>
      <h1>Tecnologia<br />em <em>detalhes.</em></h1>
      <div><strong>18</strong><p>soluções conectadas para proteger, desenvolver e sustentar a operação da sua empresa.</p></div>
    </section>
    <div id="catalogo" className="service-catalog">
      {serviceCategories.map((category, categoryIndex) => <section id={`categoria-${categoryIndex + 1}`} key={category} aria-labelledby={`categoria-titulo-${categoryIndex}`}>
        <header><span>0{categoryIndex + 1}</span><h2 id={`categoria-titulo-${categoryIndex}`}>{category}</h2></header>
        <div>{services.filter((service) => service.category === category).map((service) => <a href={`/servicos/${service.slug}`} key={service.slug}>
          <span>{service.name}</span><p>{service.description}</p><b aria-hidden="true">↗</b>
        </a>)}</div>
      </section>)}
    </div>
    <footer className="blog-footer"><Image src="/visio-logo-footer.png" width={1910} height={578} alt="Visio IT" /><p>Da nuvem ao cabo.</p><a href="/#contato">Converse com a equipe <span>↗</span></a></footer>
  </main>;
}
