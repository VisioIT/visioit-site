'use client';

import Image from 'next/image';
import { useEffect, useRef, type AnchorHTMLAttributes, type PointerEvent } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

function MagneticLink({ children, className = '', ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return () => gsap.killTweensOf(linkRef.current);
  }, []);

  function followPointer(event: PointerEvent<HTMLAnchorElement>) {
    if (event.pointerType !== 'mouse' || reduceMotion.current || !linkRef.current) return;
    const bounds = linkRef.current.getBoundingClientRect();
    gsap.to(linkRef.current, {
      x: (event.clientX - bounds.left - bounds.width / 2) * .22,
      y: (event.clientY - bounds.top - bounds.height / 2) * .22,
      scale: 1.035,
      duration: .4,
      ease: 'power2.out',
      overwrite: true,
    });
  }

  function resetPosition() {
    gsap.to(linkRef.current, { x: 0, y: 0, scale: 1, duration: .5, ease: 'power3.out', overwrite: true });
  }

  return <a ref={linkRef} className={`motion-footer-pill ${className}`} onPointerMove={followPointer} onPointerLeave={resetPosition} {...props}>{children}</a>;
}

export function CinematicFooter({ whatsapp }: { whatsapp: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const context = gsap.context(() => {
      gsap.fromTo(logoRef.current, { y: '12vh', scale: .86, opacity: 0 }, {
        y: '0vh', scale: 1, opacity: .045, ease: 'none',
        scrollTrigger: { trigger: wrapperRef.current, start: 'top 92%', end: 'bottom bottom', scrub: .8 },
      });
      gsap.fromTo(contentRef.current?.children ?? [], { y: 34, opacity: 0 }, {
        y: 0, opacity: 1, stagger: .06, ease: 'none',
        scrollTrigger: { trigger: wrapperRef.current, start: 'top 72%', end: 'top 24%', scrub: .6 },
      });
    }, wrapperRef);
    return () => context.revert();
  }, []);

  return <div ref={wrapperRef} className="motion-footer-reveal">
    <footer className="motion-footer">
      <div className="motion-footer-aurora" aria-hidden="true" />
      <div className="motion-footer-grid" aria-hidden="true" />
      <div ref={logoRef} className="motion-footer-giant-logo" aria-hidden="true">
        <Image src="/visio-logo-menu.png" width={1910} height={578} alt="" />
      </div>

      <div ref={contentRef} className="motion-footer-content motion-footer-directory">
        <div className="motion-footer-intro">
          <Image className="motion-footer-logo" src="/visio-logo-menu.png" width={1910} height={578} alt="Visio IT" />
          <p>Tecnologia para empresas<br />que não podem parar.</p>
          <MagneticLink href={whatsapp} target="_blank" rel="noreferrer" className="motion-footer-pill-primary">Fale com a Visio IT <span>↗</span></MagneticLink>
        </div>
        <nav className="motion-footer-column" aria-label="Navegação do rodapé">
          <p>Navegação</p>
          <a href="#inicio">Início</a><a href="#servicos">Serviços</a><a href="#clientes">Clientes</a><a href="/blog">Blog</a>
        </nav>
        <nav className="motion-footer-column motion-footer-services" aria-label="Serviços">
          <p>Serviços</p>
          <a href="/servicos#categoria-1">Gestão de TI &amp; Segurança</a><a href="/servicos#categoria-2">Desenvolvimento &amp; Cloud</a><a href="/servicos#categoria-3">Infraestrutura &amp; Conectividade</a>
        </nav>
        <div className="motion-footer-column">
          <p>Contato</p>
          <a className="motion-footer-contact-link" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar com a Visio IT pelo WhatsApp">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.45L3 20.5l1.3-4.72A8.5 8.5 0 1 1 20.5 11.7Z" /><path d="M8.1 7.6c.2-.44.4-.45.68-.46h.58c.18 0 .37.06.47.38l.7 1.72c.08.24.03.43-.11.62l-.53.65c-.16.18-.13.35-.04.53.64 1.2 1.55 2.1 2.75 2.74.2.1.36.12.52-.07l.74-.88c.18-.22.4-.26.63-.17l1.8.86c.25.12.4.27.43.47.04.45-.15 1.42-.67 1.93-.52.52-1.38.8-2.25.66-1.07-.16-2.44-.63-4.04-2.03-1.92-1.68-3.15-3.75-3.25-5.32-.05-.7.2-1.25.59-1.63Z" /></svg>
            <span>16 99711-3481</span>
          </a>
          <a className="motion-footer-contact-link" href="mailto:atendimento@visioit.com.br">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
            <span>atendimento@visioit.com.br</span>
          </a>
          <a className="motion-footer-social" href="https://www.instagram.com/visioit.br/" target="_blank" rel="noreferrer" aria-label="Visio IT no Instagram, abre em nova aba">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="white" /><circle cx="12" cy="12" r="4.25" fill="none" stroke="white" /><circle className="instagram-dot" cx="17.4" cy="6.7" r="1" fill="white" stroke="none" /></svg>
            <span>@visioit.br</span>
          </a>
          <a className="motion-footer-social" href="https://www.facebook.com/visioit.br" target="_blank" rel="noreferrer" aria-label="Visio IT no Facebook, abre em nova aba">
            <svg className="facebook-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.6 21v-8h2.8l.42-3.15H13.6V7.83c0-.91.26-1.53 1.62-1.53h1.73V3.49a23.7 23.7 0 0 0-2.52-.13c-2.5 0-4.2 1.48-4.2 4.2v2.29H7.4V13h2.83v8h3.37Z" /></svg>
            <span>@visioit.br</span>
          </a>
        </div>
      </div>

      <div className="motion-footer-bottom">
        <span>© {new Date().getFullYear()} Visio IT</span>
        <span>Araraquara · SP</span>
        <a href="#inicio" aria-label="Voltar ao início">Voltar ao topo <b aria-hidden="true">↑</b></a>
      </div>
    </footer>
  </div>;
}
