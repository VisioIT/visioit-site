import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogPosts, formatPostDate, getPost } from '../posts';

type ArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};

  return {
    title: `${post.title} | Visio IT`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.excerpt, images: [post.image] },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const articleUrl = `https://www.visioit.com.br/blog/${post.slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `https://www.visioit.com.br${post.image}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: articleUrl,
    author: { '@type': 'Organization', name: 'Visio IT', url: 'https://www.visioit.com.br/' },
    publisher: { '@id': 'https://www.visioit.com.br/#organization' },
  };
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://www.visioit.com.br/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.visioit.com.br/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: articleUrl },
    ],
  };

  return (
    <main className="article-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <a className="skip-link" href="#artigo">Ir para o artigo</a>
      <header className="blog-header article-header">
        <a className="blog-brand" href="/" aria-label="Visio IT, página inicial">
          <Image src="/visio-logo-menu.png" width={1910} height={578} alt="Visio IT" priority />
        </a>
        <nav aria-label="Navegação do artigo"><a href="/blog">Todos os artigos</a><a href="/#contato">Fale conosco</a></nav>
      </header>

      <article id="artigo">
        <div className="article-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Início</a><span>/</span><a href="/blog">Blog</a><span>/</span><span>{post.category}</span>
        </div>
        <header className="article-hero">
          <p className="blog-meta"><span>{post.category}</span> {post.readingTime}</p>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <div><time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time><span>Por Visio IT</span></div>
        </header>

        <div className="article-cover">
          <Image src={post.image} alt={post.imageAlt} fill sizes="100vw" priority />
        </div>

        <div className="article-layout">
          <aside>
            <p>Neste artigo</p>
            <ol>{post.sections.map((section, index) => <li key={section.title}><a href={`#secao-${index + 1}`}>{section.title}</a></li>)}</ol>
          </aside>
          <div className="article-content">
            <p className="article-lead">{post.intro}</p>
            {post.sections.map((section, index) => (
              <section id={`secao-${index + 1}`} key={section.title}>
                <span>0{index + 1}</span>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </section>
            ))}
            <aside className="article-cta">
              <p>Precisa avaliar esse cenário na sua empresa?</p>
              <a href="/#contato">Converse com a Visio IT <span>↗</span></a>
            </aside>
          </div>
        </div>
      </article>

      <footer className="blog-footer">
        <Image src="/visio-logo-white.png" width={1910} height={578} alt="Visio IT" />
        <p>Conhecimento aplicado à operação.</p>
        <a href="/blog">Voltar ao blog <span>↗</span></a>
      </footer>
    </main>
  );
}
