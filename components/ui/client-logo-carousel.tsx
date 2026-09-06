'use client';

import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';

type Client = { name:string; logo:string; fit?:'wide'|'square'|'tall' };

const clients:Client[] = [
  { name:'Alarm System Tecnologia', logo:'/clients/alarm-system.png', fit:'wide' },
  { name:'Grupo NCS', logo:'/clients/grupo-ncs.png', fit:'square' },
  { name:'Soffner', logo:'/clients/soffner.png', fit:'wide' },
  { name:'Mendonça Radiocomunicação', logo:'/clients/mendonca.png', fit:'wide' },
  { name:'Nacon', logo:'/clients/nucon.png', fit:'wide' },
  { name:'KingKeg', logo:'/clients/kingkeg.png', fit:'tall' },
];

const cycleInterval = 2000;

function shuffledClients(seed:number) {
  const result = [...clients];
  let value = (seed + 1) * 2654435761;
  for (let index=result.length-1; index>0; index--) {
    value = (value * 1664525 + 1013904223) >>> 0;
    const target = value % (index + 1);
    [result[index],result[target]] = [result[target],result[index]];
  }
  return result;
}

function LogoColumn({ client, index }:{ client:Client; index:number }) {
  const reduceMotion = useReducedMotion();

  return <motion.div className="client-carousel-slot" initial={reduceMotion ? false : { opacity:0, y:50 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:.5 }} transition={{ delay:index*.1, duration:.5, ease:'easeOut' }}>
    <AnimatePresence mode="wait">
      <motion.div key={client.name} className="client-carousel-logo" initial={reduceMotion ? false : { opacity:0, y:'10%', filter:'blur(8px)' }} animate={{ opacity:1, y:0, filter:'blur(0px)' }} exit={reduceMotion ? undefined : { opacity:0, y:'-20%', filter:'blur(8px)' }} transition={{ duration:.5, delay:index*.2, ease:'easeInOut' }}>
        <Image className={`client-logo-${client.fit ?? 'wide'}${client.name === 'Nacon' ? ' client-logo-nacon' : ''}`} src={client.logo} width={280} height={120} alt={client.name} />
      </motion.div>
    </AnimatePresence>
  </motion.div>;
}

export function ClientLogoCarousel() {
  const [time,setTime] = useState(0);
  const [paused,setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const selection = shuffledClients(Math.floor(time / cycleInterval)).slice(0,3);

  useEffect(() => {
    if (reduceMotion || paused) return;
    const interval = window.setInterval(() => setTime(value => value + 100),100);
    return () => window.clearInterval(interval);
  },[reduceMotion,paused]);

  return <section className="clients-showcase" id="clientes" aria-labelledby="clients-title">
    <div className="clients-showcase-grid" aria-hidden="true" />
    <div className="clients-showcase-inner" data-underlap-reveal>
      <header className="clients-showcase-head">
        <p><span /> Clientes Visio IT <span /></p>
        <h2 id="clients-title">Empresas que fazem parte<br /><em>da nossa trajetória.</em></h2>
        <p>Parcerias construídas com tecnologia próxima, confiável e presente na operação.</p>
      </header>
      <div className="client-carousel" aria-label="Alguns clientes da Visio IT" aria-live="off" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
        {selection.map((client,index) => <LogoColumn key={index} client={client} index={index} />)}
      </div>
    </div>
  </section>;
}
