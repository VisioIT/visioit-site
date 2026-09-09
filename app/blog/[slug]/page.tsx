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
  const encodedUrl = encodeURIComponent(articleUrl);
  const encodedTitle = encodeURIComponent(post.title);
  const shareLinks = [
    {
      name: 'WhatsApp',
      href: `https://wa.me/?text=${encodeURIComponent(`${post.title} — ${articleUrl}`)}`,
      icon: <path d="M12 2a9.8 9.8 0 0 0-8.4 14.9L2.2 22l5.2-1.4A9.9 9.9 0 1 0 12 2Zm0 17.8a7.8 7.8 0 0 1-4-1.1l-.3-.2-3 .8.8-3-.2-.3A7.9 7.9 0 1 1 12 19.8Zm4.3-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1l-.7.9c-.1.2-.3.2-.5.1a6.4 6.4 0 0 1-1.9-1.2 7.2 7.2 0 0 1-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.5.2-.5c.1-.2 0-.4 0-.5l-.7-1.7c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.7 1.2 2.9c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.4-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.2-.3-.5-.4Z" />,
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: <><path d="M6.5 8.2H3.2V19h3.3V8.2Z" /><path d="M4.8 3a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM12 8.2H8.8V19H12v-5.3c0-1.4.3-2.8 2-2.8 1.7 0 1.7 1.6 1.7 2.9V19H19v-5.9c0-2.9-.6-5.2-4.1-5.2-1.7 0-2.8.9-3.2 1.8h-.1V8.2H12Z" /></>,
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <path d="M14 8h3V4.5c-.5-.1-2.3-.2-3.3-.2-3.2 0-5.4 2-5.4 5.6V13H5v4h3.3v7h4v-7h3.4l.6-4h-4v-2.7c0-1.2.3-2.3 1.7-2.3Z" />,
    },
    {
      name: 'X',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: <path d="M5.1 4h4.4l3.7 5.2L17.7 4h1.4l-5.3 6.2L20 20h-4.4l-4-5.6L6.8 20H5.4l5.6-6.6L5.1 4Zm3.6 1.2H7.4l9 13.6h1.3l-9-13.6Z" />,
    },
  ];
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
            <section className="article-share" aria-labelledby="compartilhe-title">
              <div>
                <span>Espalhe conhecimento</span>
                <h2 id="compartilhe-title">Compartilhe este artigo</h2>
              </div>
              <div className="article-share-links">
                {shareLinks.map((link) => (
                  <a className={`share-${link.name.toLowerCase()}`} key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Compartilhar no ${link.name}`}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">{link.icon}</svg>
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </section>
            <aside className="article-cta">
              <p>Precisa avaliar esse cenário na sua empresa?</p>
              <a href="/#contato">Converse com a Visio IT <span>↗</span></a>
            </aside>
          </div>
        </div>
      </article>

      <footer className="blog-footer">
        <Image src="/visio-logo-footer.png" width={1910} height={578} alt="Visio IT" />
        <p>Conhecimento aplicado à operação.</p>
        <a href="/blog">Voltar ao blog <span>↗</span></a>
      </footer>
    </main>
  );
}
