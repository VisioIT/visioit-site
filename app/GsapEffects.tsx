'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function GsapEffects() {
  useGSAP(() => {
    ScrollTrigger.config({ limitCallbacks: true });

    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
      gsap.fromTo(element,
        { y: 54, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: element, start: 'top 84%', once: true },
        },
      );
    });

    gsap.utils.toArray<HTMLElement>('[data-reveal-group]').forEach((group) => {
      const children = group.querySelectorAll('[data-reveal-item]');
      gsap.fromTo(children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: .78,
          stagger: .09,
          ease: 'power2.out',
          scrollTrigger: { trigger: group, start: 'top 82%', once: true },
        },
      );
    });

    gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((element) => {
      gsap.fromTo(element,
        { yPercent: -4, scale: 1.06 },
        {
          yPercent: 4,
          scale: 1.06,
          ease: 'none',
          scrollTrigger: { trigger: element.parentElement, start: 'top bottom', end: 'bottom top', scrub: .6 },
        },
      );
    });

    gsap.utils.toArray<HTMLElement>('[data-underlap-reveal]').forEach((element) => {
      const section = element.parentElement;
      if (!section) return;

      gsap.fromTo(element,
        { y: () => window.innerWidth < 600 ? -72 : -128, opacity: .18 },
        {
          y: 0,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'top 64%',
            scrub: .65,
            invalidateOnRefresh: true,
          },
        },
      );
    });

  });

  return null;
}
