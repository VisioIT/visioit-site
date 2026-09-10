'use client';

import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { id:'gestao-ti', number:'01', short:'Gestão de TI & Segurança', verb:'Protegemos', mode:'protect', image:'/service-security-v2.jpg', title:<>TI administrada,<br />protegida e <em>disponível.</em></>, promise:'Assumimos a gestão do ambiente tecnológico para sua equipe trabalhar com segurança e continuidade.', when:'Para reduzir falhas, controlar riscos e recuperar a visibilidade sobre todo o ambiente de tecnologia.', items:['Gestão e suporte de TI','Firewall, VPN e segurança','Servidores físicos e virtuais','Backup e recuperação','Monitoramento preventivo','Continuidade operacional'], result:'Menos interrupções, riscos controlados e decisões técnicas acompanhadas por especialistas.' },
  { id:'desenvolvimento', number:'02', short:'Desenvolvimento & Cloud', verb:'Desenvolvemos', mode:'build', image:'/service-development-v2.jpg', title:<>Sistemas, aplicativos,<br />sites e <em>cloud.</em></>, promise:'Criamos soluções digitais sob medida e cuidamos da estrutura necessária para mantê-las disponíveis.', when:'Para transformar processos manuais, planilhas ou sistemas desconectados em uma operação integrada.', items:['Sistemas sob demanda','Aplicativos iOS e Android','Sites e portais corporativos','Integrações e APIs','Automação de processos','Hospedagem e cloud'], result:'Processos mais simples, informações conectadas e uma solução que acompanha o negócio.' },
  { id:'infraestrutura', number:'03', short:'Infraestrutura & Conectividade', verb:'Conectamos', mode:'connect', image:'/service-infrastructure-v2.jpg', title:<>A estrutura física<br />que mantém tudo <em>conectado.</em></>, promise:'Projetamos e executamos redes corporativas do rack ao ponto mais distante da operação.', when:'Para implantar, ampliar ou organizar a conectividade da empresa com padrão profissional.', items:['Cabeamento estruturado','Fibra óptica','Racks e data center','Redes corporativas','Wireless indoor e outdoor','Links e telecom'], result:'Uma base organizada, documentada e preparada para suportar pessoas, sistemas e crescimento.' },
] as const;

const serviceLinks: Record<string, string> = {
  'Gestão e suporte de TI':'gestao-e-suporte-de-ti', 'Firewall, VPN e segurança':'firewall-vpn-e-seguranca',
  'Servidores físicos e virtuais':'servidores-fisicos-e-virtuais', 'Backup e recuperação':'backup-e-recuperacao-de-dados',
  'Monitoramento preventivo':'monitoramento-preventivo-de-ti', 'Continuidade operacional':'continuidade-operacional-de-ti',
  'Sistemas sob demanda':'desenvolvimento-de-sistemas-sob-medida', 'Aplicativos iOS e Android':'desenvolvimento-de-aplicativos-ios-android',
  'Sites e portais corporativos':'criacao-de-sites-e-portais-corporativos', 'Integrações e APIs':'integracoes-de-sistemas-e-apis',
  'Automação de processos':'automacao-de-processos-empresariais', 'Hospedagem e cloud':'hospedagem-e-cloud-para-empresas',
  'Cabeamento estruturado':'cabeamento-estruturado', 'Fibra óptica':'instalacao-e-fusao-de-fibra-optica',
  'Racks e data center':'racks-e-data-center', 'Redes corporativas':'redes-corporativas',
  'Wireless indoor e outdoor':'wifi-empresarial-indoor-outdoor', 'Links e telecom':'links-de-internet-e-telecom',
};

export function ServicesExperience({ whatsapp }: { whatsapp: string }) {
  const rootRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const active = services[activeIndex];
  const transition = reduceMotion ? { duration:0 } : { duration:.48, ease:[.23,1,.32,1] as [number,number,number,number] };

  useEffect(() => {
    if (reduceMotion || !rootRef.current) return;
    const media = gsap.matchMedia();
    media.add('(min-width: 601px)', () => {
      const reveal = gsap.timeline({
        scrollTrigger:{
          trigger:rootRef.current,
          start:'top bottom',
          end:'top 72%',
          scrub:.6,
        },
      });
      reveal
        .fromTo('.services-switcher-head', { y:-118, opacity:.18 }, { y:0, opacity:1, ease:'none' }, 0)
        .fromTo('.services-switcher-controls', { y:-54, opacity:.3 }, { y:0, opacity:1, ease:'none' }, .08);

      const trigger = ScrollTrigger.create({
        trigger:rootRef.current,
        start:'top top',
        end:'bottom bottom',
        onUpdate:self => {
          const nextIndex = Math.min(2, Math.floor(self.progress * 3));
          setActiveIndex(current => current === nextIndex ? current : nextIndex);
        },
      });
      return () => {
        reveal.scrollTrigger?.kill();
        reveal.kill();
        trigger.kill();
      };
    });
    media.add('(max-width: 600px)', () => {
      const reveal = gsap.timeline({
        scrollTrigger:{
          trigger:rootRef.current,
          start:'top bottom',
          end:'top 76%',
          scrub:.6,
        },
      });
      reveal
        .fromTo('.services-switcher-head', { y:-82, opacity:.2 }, { y:0, opacity:1, ease:'none' }, 0)
        .fromTo('.services-switcher-controls', { y:-34, opacity:.35 }, { y:0, opacity:1, ease:'none' }, .08);
      return () => {
        reveal.scrollTrigger?.kill();
        reveal.kill();
      };
    });
    return () => media.revert();
  }, [reduceMotion]);

  function selectService(index:number) {
    setActiveIndex(index);
    if (window.innerWidth <= 600 || reduceMotion || !rootRef.current) return;
    const sectionTop = window.scrollY + rootRef.current.getBoundingClientRect().top;
    const availableScroll = rootRef.current.offsetHeight - window.innerHeight;
    window.scrollTo({ top:sectionTop + availableScroll * (index / 2), behavior:'smooth' });
  }

  return <section ref={rootRef} className={`services-switcher services-switcher-${active.mode}`} id="servicos" aria-labelledby="services-title">
    <div className="services-switcher-sticky">
    <AnimatePresence mode="popLayout">
      <motion.div key={active.image} className="services-switcher-photo" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={transition} aria-hidden="true">
        <img src={active.image} alt="" />
      </motion.div>
    </AnimatePresence>
    <div className="services-switcher-grid" aria-hidden="true" />
    <header className="services-switcher-head">
      <p><span /> Serviços Visio IT</p>
      <h2 id="services-title">Três pilares.<br /><em>Uma visão completa.</em></h2>
      <p>Escolha uma frente para entender quando ela faz sentido, o que entregamos e qual resultado sua empresa pode esperar.</p>
    </header>

    <div className="services-switcher-controls" role="tablist" aria-label="Pilares de serviços">
      {services.map((service,index) => <button type="button" role="tab" aria-selected={activeIndex===index} aria-controls={`service-panel-${service.id}`} id={`service-tab-${service.id}`} key={service.id} className={activeIndex===index?'is-active':undefined} onClick={() => selectService(index)}>
        <b>{service.number}</b><span>{service.short}</span><i aria-hidden="true">↗</i>
        {activeIndex===index && <motion.u layoutId="active-service" transition={transition} />}
      </button>)}
    </div>

    <div className="services-switcher-stage">
      <AnimatePresence mode="wait">
        <motion.article key={active.id} id={`service-panel-${active.id}`} role="tabpanel" aria-labelledby={`service-tab-${active.id}`} className="services-switcher-panel" initial={{opacity:0,transform:'translate3d(32px,0,0)'}} animate={{opacity:1,transform:'translate3d(0,0,0)'}} exit={{opacity:0,transform:'translate3d(-22px,0,0)'}} transition={transition}>
          <p className="services-switcher-index">{active.number} — {active.short}</p>
          <h3>{active.title}</h3>
          <p className="services-switcher-promise">{active.promise}</p>
          <div className="services-switcher-info">
            <div><span>Quando procurar a Visio</span><p>{active.when}</p></div>
            <div><span>O que entregamos</span><ul>{active.items.map(item => <li key={item}>+ <a href={`/servicos/${serviceLinks[item]}`}>{item}</a></li>)}</ul></div>
          </div>
          <div className="services-switcher-result"><span>Resultado</span><p>{active.result}</p><a href={whatsapp} target="_blank" rel="noreferrer">Falar sobre esta solução <b>↗</b></a></div>
        </motion.article>
      </AnimatePresence>
    </div>
    </div>
  </section>;
}
