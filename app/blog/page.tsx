import type { Metadata } from 'next';
import Image from 'next/image';
import { blogPosts, formatPostDate } from './posts';

export const metadata: Metadata = {
  title: 'Blog | Visio IT',
  description: 'Conteúdo prático sobre gestão de TI, segurança, cloud, redes e infraestrutura para empresas.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | Visio IT',
    description: 'Decisões de tecnologia explicadas para quem mantém empresas em movimento.',
    url: '/blog',
    type: 'website',
  },
};

export default function BlogPage() {
  const [featured, ...posts] = blogPosts;

  return (
    <main className="blog-shell">
      <a className="skip-link" href="#artigos">Ir para os artigos</a>
      <header className="blog-header">
        <a className="blog-brand" href="/" aria-label="Visio IT, página inicial">
          <Image src="/visio-logo-menu.png" width={1910} height={578} alt="Visio IT" priority />
        </a>
        <nav aria-label="Navegação do blog">
          <a href="/">Site institucional</a>
          <a href="#artigos">Artigos</a>
          <a href="/#contato">Fale conosco</a>
        </nav>
      </header>

      <section className="blog-hero">
        <div className="blog-hero-label"><span /> Conhecimento aplicado</div>
        <h1>TI sem<br /><em>ruído.</em></h1>
        <p>Decisões de tecnologia explicadas com clareza para quem precisa manter a empresa segura, conectada e disponível.</p>
        <div className="blog-hero-index" aria-hidden="true">VISIO / NOTAS TÉCNICAS / 2026</div>
      </section>

      <section className="blog-featured" aria-labelledby="destaque-title">
        <a className="blog-featured-image" href={`/blog/${featured.slug}`}>
          <Image src={featured.image} alt={featured.imageAlt} fill sizes="(max-width: 900px) 100vw, 58vw" priority />
        </a>
        <div className="blog-featured-copy">
          <p className="blog-meta"><span>{featured.category}</span> {featured.readingTime}</p>
          <h2 id="destaque-title"><a href={`/blog/${featured.slug}`}>{featured.title}</a></h2>
          <p>{featured.excerpt}</p>
          <a className="blog-read-link" href={`/blog/${featured.slug}`}>Ler artigo <span>↗</span></a>
        </div>
      </section>

      <section className="blog-feed" id="artigos" aria-labelledby="artigos-title">
        <header>
          <p>Arquivo técnico</p>
          <h2 id="artigos-title">Últimos artigos</h2>
          <span>{String(blogPosts.length).padStart(2, '0')} publicações</span>
        </header>
        <div className="blog-grid">
          {posts.map((post, index) => (
            <article className="blog-card" key={post.slug}>
              <a className="blog-card-image" href={`/blog/${post.slug}`}>
                <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 700px) 100vw, 50vw" />
                <span aria-hidden="true">0{index + 2}</span>
              </a>
              <p className="blog-meta"><span>{post.category}</span> {formatPostDate(post.publishedAt)}</p>
              <h3><a href={`/blog/${post.slug}`}>{post.title}</a></h3>
              <p>{post.excerpt}</p>
              <a className="blog-read-link" href={`/blog/${post.slug}`}>Ler artigo <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <footer className="blog-footer">
          <Image src="/visio-logo-white.png" width={1910} height={578} alt="Visio IT" />
        <p>Tecnologia confiável para empresas.</p>
        <a href="/#contato">Converse com a equipe <span>↗</span></a>
      </footer>
    </main>
  );
}
