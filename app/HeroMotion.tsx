'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function HeroMotion({ whatsapp }: { whatsapp: string }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -80]);
  const copyOpacity = useTransform(scrollYProgress, [0, .75], [1, reduced ? 1 : 0]);
  const signalY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 130]);
  const group = { hidden: {}, visible: { transition: { delayChildren: .12, staggerChildren: .1 } } };
  const item = { hidden: { y: reduced ? 0 : 28, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: reduced ? 0 : .72, ease: [0.23, 1, 0.32, 1] as const } } };
  return <section className="hero" id="inicio" ref={ref}>
    <motion.div className="hero-copy" style={{ y: copyY, opacity: copyOpacity }} variants={group} initial="hidden" animate="visible">
      <motion.p className="overline" variants={item}><span /> Tecnologia com visão de conjunto</motion.p>
      <motion.h1 variants={item}>Três frentes.<br /><em>Uma operação</em><br />que evolui.</motion.h1>
      <motion.p className="hero-summary" variants={item}>A Visio IT conecta infraestrutura, software sob medida e presença digital para sua empresa trabalhar com segurança e avançar sem improviso.</motion.p>
      <motion.div className="hero-actions" variants={item}><motion.a whileHover={reduced ? undefined : { y: -3 }} whileTap={reduced ? undefined : { scale: .98 }} className="button button-solid" href={whatsapp} target="_blank" rel="noreferrer">Conversar com a Visio IT <span aria-hidden="true">↗</span></motion.a><a className="quiet-link" href="#pilares">Conheça as três frentes <span aria-hidden="true">↓</span></a></motion.div>
    </motion.div>
    <motion.div className="signal-system" style={{ y: signalY }} aria-hidden="true">
      <svg viewBox="0 0 620 720" preserveAspectRatio="xMidYMid meet"><path className="signal-ghost" d="M92 30 C92 205 500 110 500 300 S160 420 160 690" /><motion.path className="signal-live" d="M92 30 C92 205 500 110 500 300 S160 420 160 690" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduced ? 0 : 1.8, ease: [0.23,1,0.32,1] }} /></svg>
      <div className="signal-node node-one"><b>INFRA</b><span>Base protegida</span></div><div className="signal-node node-two"><b>SISTEMAS</b><span>Processos sob medida</span></div><div className="signal-node node-three"><b>WEB</b><span>Presença disponível</span></div>
    </motion.div>
    <p className="hero-footnote">ARARAQUARA · SP <span /> ATENDIMENTO B2B</p>
  </section>;
}
