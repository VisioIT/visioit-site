export type BlogSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'backup-3-2-1-para-empresas',
    title: 'Backup 3-2-1: como proteger os dados da empresa',
    excerpt: 'Uma estratégia prática para reduzir o risco de perder arquivos, sistemas e histórico operacional.',
    category: 'Segurança',
    publishedAt: '2026-09-09',
    updatedAt: '2026-09-09',
    readingTime: '6 min de leitura',
    image: '/service-security-v2.jpg',
    imageAlt: 'Profissional trabalhando em ambiente de segurança e infraestrutura de TI',
    intro: 'Ter uma cópia dos arquivos não significa, por si só, estar protegido. Um backup confiável precisa sobreviver a falhas de equipamento, exclusões acidentais, ataques e problemas no local onde a empresa opera.',
    sections: [
      {
        title: 'O que significa a regra 3-2-1',
        paragraphs: ['A regra organiza as cópias de forma que um único incidente não consiga atingir tudo ao mesmo tempo. Ela serve como ponto de partida para empresas de diferentes portes.'],
        bullets: ['3 cópias dos dados, contando o arquivo em uso', '2 tipos de armazenamento ou ambientes diferentes', '1 cópia mantida fora do ambiente principal'],
      },
      {
        title: 'Por que uma cópia conectada não basta',
        paragraphs: ['Um disco externo permanentemente conectado pode ser atingido pelo mesmo ransomware, falha elétrica ou erro humano que afeta o servidor. Da mesma forma, sincronização em nuvem não substitui automaticamente um backup: um arquivo apagado ou corrompido pode ser sincronizado para todos os dispositivos.'],
      },
      {
        title: 'O teste de restauração é parte do backup',
        paragraphs: ['O momento de descobrir que uma cópia está incompleta não pode ser durante uma emergência. Defina testes periódicos, registre o tempo de recuperação e confirme se os sistemas prioritários voltam a funcionar com os dados restaurados.'],
        bullets: ['Escolha arquivos e sistemas críticos para o teste', 'Registre a data, o resultado e o tempo necessário', 'Corrija falhas antes do próximo ciclo', 'Revise a estratégia sempre que a infraestrutura mudar'],
      },
      {
        title: 'Comece pelo impacto no negócio',
        paragraphs: ['Liste o que a empresa não pode perder e por quanto tempo cada operação pode ficar indisponível. Essa análise orienta frequência, retenção e investimento sem transformar o backup em uma coleção desorganizada de cópias.'],
      },
    ],
  },
  {
    slug: 'sinais-de-que-a-rede-precisa-de-revisao',
    title: '7 sinais de que a rede da empresa precisa de revisão',
    excerpt: 'Oscilações, lentidão e quedas recorrentes normalmente revelam problemas maiores do que a conexão com a internet.',
    category: 'Infraestrutura',
    publishedAt: '2026-09-09',
    updatedAt: '2026-09-09',
    readingTime: '7 min de leitura',
    image: '/service-infrastructure-v2.jpg',
    imageAlt: 'Infraestrutura de rede e conectividade empresarial',
    intro: 'Quando a rede cresce sem planejamento, pequenos improvisos começam a afetar reuniões, sistemas, telefonia, câmeras e o trabalho diário. Alguns sinais ajudam a identificar a hora de revisar a infraestrutura.',
    sections: [
      {
        title: 'Os sinais mais comuns',
        paragraphs: ['Um evento isolado pode ter muitas causas. A repetição e a combinação dos sintomas indicam que vale investigar a rede como um sistema completo.'],
        bullets: ['Wi-Fi muda muito de desempenho entre ambientes', 'Chamadas e videoconferências travam em horários de pico', 'Equipamentos precisam ser reiniciados com frequência', 'Existem switches domésticos ou cabos sem identificação', 'Câmeras ou telefones IP perdem conexão', 'Não há documentação da rede', 'Uma falha simples paralisa vários setores'],
      },
      {
        title: 'Internet rápida não corrige uma rede ruim',
        paragraphs: ['A velocidade contratada é apenas uma parte do caminho. Cabeamento, switches, pontos de acesso, interferência, configuração e capacidade dos equipamentos influenciam a experiência. Aumentar o plano de internet pode não resolver gargalos internos.'],
      },
      {
        title: 'O que uma revisão deve verificar',
        paragraphs: ['O diagnóstico deve combinar inspeção física e análise lógica. O objetivo é localizar gargalos, riscos e dependências antes de recomendar compras.'],
        bullets: ['Topologia e documentação', 'Estado e categoria do cabeamento', 'Cobertura e interferência do Wi-Fi', 'Capacidade dos switches e pontos de acesso', 'Segmentação de dispositivos e visitantes', 'Redundância dos pontos críticos'],
      },
      {
        title: 'Planejar evita trocar tudo',
        paragraphs: ['Uma boa revisão diferencia o que precisa ser corrigido imediatamente do que pode ser modernizado em etapas. Isso reduz interrupções e direciona o investimento para os pontos que realmente limitam a operação.'],
      },
    ],
  },
  {
    slug: 'checklist-seguranca-ti-pequenas-empresas',
    title: 'Checklist de segurança de TI para pequenas empresas',
    excerpt: 'Controles essenciais para diminuir riscos sem depender de uma estrutura complexa.',
    category: 'Gestão de TI',
    publishedAt: '2026-09-09',
    updatedAt: '2026-09-09',
    readingTime: '8 min de leitura',
    image: '/service-development-v1.jpg',
    imageAlt: 'Equipe analisando sistemas e processos de tecnologia',
    intro: 'Segurança não começa pela compra de uma ferramenta isolada. Ela começa por conhecer os ativos, reduzir acessos desnecessários e criar rotinas que continuem funcionando mesmo quando a equipe está ocupada.',
    sections: [
      {
        title: 'Identidades e acessos',
        paragraphs: ['Cada pessoa deve usar sua própria conta. Contas compartilhadas dificultam descobrir o que aconteceu e permanecem ativas quando alguém muda de função ou deixa a empresa.'],
        bullets: ['Ative autenticação em dois fatores', 'Remova acessos de ex-colaboradores imediatamente', 'Evite privilégios de administrador no uso diário', 'Revise permissões em ciclos definidos'],
      },
      {
        title: 'Equipamentos e atualizações',
        paragraphs: ['Computadores, servidores, roteadores e aplicativos desatualizados acumulam vulnerabilidades conhecidas. Mantenha um inventário simples, defina responsáveis e acompanhe atualizações críticas.'],
      },
      {
        title: 'Backup e continuidade',
        paragraphs: ['Defina quais dados são essenciais, onde ficam as cópias e quem acompanha os alertas. O plano também deve explicar o que fazer quando um sistema, link ou equipamento importante fica indisponível.'],
        bullets: ['Use cópias em ambientes diferentes', 'Teste a restauração', 'Documente contatos e prioridades', 'Mantenha procedimentos acessíveis durante uma falha'],
      },
      {
        title: 'Pessoas fazem parte da proteção',
        paragraphs: ['Treinamentos curtos e frequentes funcionam melhor do que uma orientação anual extensa. Mostre exemplos de mensagens suspeitas, estabeleça um canal para dúvidas e evite punir quem relata rapidamente um possível incidente.'],
      },
      {
        title: 'Transforme o checklist em rotina',
        paragraphs: ['O checklist é útil quando gera responsáveis, prazos e evidências. Comece pelos riscos de maior impacto, acompanhe o progresso e faça uma nova revisão sempre que a empresa adotar sistemas ou processos importantes.'],
      },
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T12:00:00Z`));
}
