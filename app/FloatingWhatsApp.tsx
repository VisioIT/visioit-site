'use client';

import { useEffect, useState } from 'react';

export function FloatingWhatsApp({ href }:{ href:string }) {
  const [footerVisible,setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('.motion-footer-reveal');
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting), { threshold:.05 });
    observer.observe(footer);
    return () => observer.disconnect();
  },[]);

  return <a className={`floating-whatsapp${footerVisible ? ' is-hidden' : ''}`} href={href} target="_blank" rel="noreferrer" aria-label="Conversar com a Visio IT pelo WhatsApp" aria-hidden={footerVisible} tabIndex={footerVisible ? -1 : 0}>
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.45L3 20.5l1.3-4.72A8.5 8.5 0 1 1 20.5 11.7Z" /><path d="M8.1 7.6c.2-.44.4-.45.68-.46h.58c.18 0 .37.06.47.38l.7 1.72c.08.24.03.43-.11.62l-.53.65c-.16.18-.13.35-.04.53.64 1.2 1.55 2.1 2.75 2.74.2.1.36.12.52-.07l.74-.88c.18-.22.4-.26.63-.17l1.8.86c.25.12.4.27.43.47.04.45-.15 1.42-.67 1.93-.52.52-1.38.8-2.25.66-1.07-.16-2.44-.63-4.04-2.03-1.92-1.68-3.15-3.75-3.25-5.32-.05-.7.2-1.25.59-1.63Z" /></svg>
  </a>;
}
