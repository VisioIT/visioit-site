import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getService, services } from '../services';

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  const title = `${service.name} em Araraquara | Visio IT`;
  return {
    title, description: service.description, alternates: { canonical: `/servicos/${service.slug}` },
    openGraph: { title, description: service.description, url: `/servicos/${service.slug}`, type: 'website', images: [{ url: service.image, alt: service.imageAlt }] },
    twitter: { card: 'summary_large_image', title, description: service.description, images: [service.image] },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = getService((await params).slug);
  if (!service) notFound();
  const url = `https://www.visioit.com.br/servicos/${service.slug}`;
  const related = services.filter((item) => item.category === service.category && item.slug !== service.slug).slice(0, 3);
  const schema = {
    '@context': 'https://schema.org', '@type': 'Service', name: service.name, description: service.description,
    url, serviceType: service.name, areaServed: { '@type': 'AdministrativeArea', name: 'Araraquara e região, SP' },
    provider: { '@id': 'https://www.visioit.com.br/#organization' },
  };
  const breadcrumbs = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://www.visioit.com.br/' },
    { '@type': 'ListItem', position: 2, name: 'Serviços', item: 'https://www.visioit.com.br/servicos' },
    { '@type': 'ListItem', position: 3, name: service.name, item: url },
  ] };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: service.faq.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };

  return <main className="service-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <a className="skip-link" href="#conteudo-servico">Ir para o conteúdo</a>
    <header className="service-header">
      <a className="service-brand" href="/" aria-label="Visio IT, página inicial"><Image src="/visio-logo-menu.png" width={1910} height={578} alt="Visio IT" priority /></a>
      <nav aria-label="Navegação"><a href="/servicos">Todos os serviços</a><a href="/blog">Blog</a><a href="/#contato">Fale conosco</a></nav>
    </header>
    <div className="service-breadcrumb"><a href="/">Início</a><span>/</span><a href="/servicos">Serviços</a><span>/</span><span>{service.name}</span></div>
    <section className="service-page-hero">
      <div><p>{service.category}</p><h1>{service.name}</h1><strong>{service.promise}</strong><a href="/#contato">Solicitar uma avaliação <span>↗</span></a></div>
      <figure><Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 800px) 100vw, 48vw" priority /></figure>
    </section>
    <div id="conteudo-servico" className="service-page-body">
      <aside><span>Atuação local</span><strong>Araraquara<br />e região</strong><p>Atendimento técnico próximo, com soluções dimensionadas para a realidade de cada operação.</p></aside>
      <article>
        <section><p className="service-eyebrow">Quando este serviço faz sentido</p><h2>Sinais de que é hora de agir.</h2><ul className="service-situations">{service.situations.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section><p className="service-eyebrow">Escopo</p><h2>O que entregamos.</h2><p>{service.description}</p><ul className="service-scope">{service.scope.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section><p className="service-eyebrow">Como trabalhamos</p><h2>Clareza do diagnóstico à entrega.</h2><div className="service-process">{service.process.map((step, index) => <div key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></div>)}</div></section>
        <section><p className="service-eyebrow">Resultados esperados</p><h2>Uma operação mais preparada.</h2><ul className="service-outcomes">{service.outcomes.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section className="service-faq"><p className="service-eyebrow">Perguntas frequentes</p><h2>Dúvidas sobre {service.name.toLowerCase()}.</h2>{service.faq.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</section>
        <aside className="service-contact"><p>Quer entender como esta solução se aplica à sua empresa?</p><a href="/#contato">Converse com a Visio IT <span>↗</span></a></aside>
      </article>
    </div>
    <section className="service-related"><p>Serviços relacionados</p><div>{related.map((item) => <a href={`/servicos/${item.slug}`} key={item.slug}><span>{item.name}</span><b>↗</b></a>)}</div></section>
    <footer className="blog-footer"><Image src="/visio-logo-footer.png" width={1910} height={578} alt="Visio IT" /><p>Tecnologia para empresas que não podem parar.</p><a href="/servicos">Ver todos os serviços <span>↗</span></a></footer>
  </main>;
}
