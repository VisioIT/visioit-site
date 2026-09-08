'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const chapters = [
  { id: 'cloud', eyebrow: 'Cloud • software • desenvolvimento', title: <><span className="journey-title-solid">Da ideia</span><br /><span className="journey-title-solid">à</span> <em>nuvem.</em></>, body: 'Sistemas, aplicativos, websites e hospedagem construídos para transformar processos em operação.' },
  { id: 'security', eyebrow: 'Data center • segurança • redes', title: <><span className="journey-title-solid">Proteção em</span><br /><em>todas as camadas.</em></>, body: 'Firewall, VPN, servidores e monitoramento integrados ao ambiente que mantém a empresa disponível.' },
  { id: 'physical', eyebrow: 'Infraestrutura • fibra • telecom', title: <><span className="journey-title-solid">Tecnologia</span><br /><span className="journey-title-solid">também é</span> <em>física.</em></>, body: 'Cabeamento, fibra óptica e redes outdoor executados no mundo real, do rack ao ponto mais distante.' },
  { id: 'ecosystem', eyebrow: 'Visio IT • visão completa', title: <><span className="journey-title-solid">Presença digital</span><br /><em>de verdade.</em></>, body: 'Da nuvem ao cabo. Do software à infraestrutura. Uma equipe acompanhando todas as camadas.' },
];

export function ScrollWorldExperience({ whatsapp }: { whatsapp: string }) {
  const root = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const targetProgress = useRef(0);
  const currentProgress = useRef(0);
  const requestVideoFrame = useRef<() => void>(() => {});

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    let objectUrl = '';
    let cancelled = false;
    let frame = 0;
    const mobile = window.matchMedia('(max-width: 760px)').matches;
    let initialFrameSynced = false;

    fetch('/visioit-scroll-world.mp4')
      .then(response => response.ok ? response.blob() : Promise.reject(new Error('Falha ao carregar vídeo')))
      .then(blob => {
        if (cancelled) return;
        objectUrl = URL.createObjectURL(blob);
        element.src = objectUrl;
        element.load();
      })
      .catch(() => {
        if (cancelled) return;
        element.src = '/visioit-scroll-world.mp4';
        element.load();
      });

    let running = false;
    let lastSeekAt = 0;
    const updateVideo = (now: number) => {
      if (!element.seeking) {
        const smoothing = mobile ? 0.24 : 0.18;
        currentProgress.current += (targetProgress.current - currentProgress.current) * smoothing;
      }
      const seekInterval = mobile ? 42 : 28;
      if (!element.seeking && now - lastSeekAt >= seekInterval && Number.isFinite(element.duration) && element.duration > 0) {
        const time = Math.min(element.duration * .998, currentProgress.current * element.duration);
        const seekThreshold = mobile ? .04 : .02;
        if (Math.abs(element.currentTime - time) > seekThreshold) {
          try {
            element.currentTime = time;
            lastSeekAt = now;
          } catch { /* metadata is not ready yet */ }
        }
      }
      if (element.seeking || Math.abs(targetProgress.current - currentProgress.current) > .00015) frame = requestAnimationFrame(updateVideo);
      else running = false;
    };

    const continueAfterSeek = () => {
      if (Math.abs(targetProgress.current - currentProgress.current) > .00015) requestVideoFrame.current();
    };

    requestVideoFrame.current = () => {
      if (running) return;
      if (!initialFrameSynced && Number.isFinite(element.duration) && element.duration > 0) {
        currentProgress.current = targetProgress.current;
        element.currentTime = Math.min(element.duration * .998, targetProgress.current * element.duration);
        initialFrameSynced = true;
      }
      running = true;
      frame = requestAnimationFrame(updateVideo);
    };
    element.addEventListener('loadedmetadata', requestVideoFrame.current);
    element.addEventListener('seeked', continueAfterSeek);
    if (element.readyState >= 1) requestVideoFrame.current();
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      element.removeEventListener('loadedmetadata', requestVideoFrame.current);
      element.removeEventListener('seeked', continueAfterSeek);
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, []);

  useGSAP(() => {
    const section = root.current;
    if (!section) return;
    const mm = gsap.matchMedia();

    // Remote desktop sessions can report reduced motion even when the visitor
    // expects the full cinematic presentation. Keep the main journey active.
    mm.add('(min-width: 0px)', () => {
      const copies = gsap.utils.toArray<HTMLElement>('.journey-copy', section);
      gsap.set(copies.slice(1), { autoAlpha: 0, y: 34 });
      gsap.set(copies[0], { autoAlpha: 1, y: 0 });

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: .85,
          invalidateOnRefresh: true,
          onUpdate: self => {
            targetProgress.current = self.progress;
            requestVideoFrame.current();
          },
        },
      });

      tl.to('.journey-video-shade', { opacity: .22, duration: 12 }, 0)
        .to('.journey-progress-fill', { scaleY: 1, duration: 12 }, 0)
        .to('.journey-film-grain', { xPercent: -2, yPercent: 2, duration: 12 }, 0);

      const intervals = [[0, 2.35], [2.7, 5.65], [6, 8.85], [9.15, 12]];
      copies.forEach((copy, index) => {
        const [start, end] = intervals[index];
        if (index > 0) tl.to(copy, { autoAlpha: 1, y: 0, duration: .45, ease: 'power2.out' }, start);
        if (index < copies.length - 1) tl.to(copy, { autoAlpha: 0, y: -26, duration: .4, ease: 'power2.in' }, end);
      });
    });

    return () => mm.revert();
  }, { scope: root });

  return (
    <section className="scroll-world scroll-world-video" id="inicio" ref={root} aria-label="Uma viagem pelas camadas de tecnologia da Visio IT">
      <div className="journey-stage">
        <div className="journey-video-wrap" aria-hidden="true">
          <video ref={video} className="journey-video" muted playsInline preload="auto" />
          <div className="journey-video-shade" />
          <div className="journey-film-grain" />
        </div>

        <div className="journey-copy-layer">
          {chapters.map((chapter, index) => <article className="journey-copy" id={index === 0 ? 'pilares' : chapter.id} key={chapter.id}>
            <p><span /> {String(index + 1).padStart(2, '0')} — {chapter.eyebrow}</p>
            {index === 0 ? <h1>{chapter.title}</h1> : <h2>{chapter.title}</h2>}
            <div className="journey-copy-bottom">
              <strong>{chapter.body}</strong>
              {index === chapters.length - 1 && <a href={whatsapp} target="_blank" rel="noreferrer">Fale com a Visio IT <span>↗</span></a>}
            </div>
          </article>)}
        </div>

        <div className="journey-progress" aria-hidden="true"><span className="journey-progress-fill" /></div>
        <div className="journey-route" aria-hidden="true"><span>Cloud</span><span>Data center</span><span>Infra</span><span>Telecom</span></div>
      </div>
    </section>
  );
}
