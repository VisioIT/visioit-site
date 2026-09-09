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
    readingTime: '10 min de leitura',
    image: '/service-security-v2.jpg',
    imageAlt: 'Profissional trabalhando em ambiente de segurança e infraestrutura de TI',
    intro: 'Ter uma cópia dos arquivos não significa, por si só, estar protegido. Um backup confiável precisa sobreviver a falhas de equipamento, exclusões acidentais, ataques e problemas no local onde a empresa opera. A regra 3-2-1 transforma essa necessidade em uma estratégia simples de entender, executar e auditar.',
    sections: [
      {
        title: 'O que significa a regra 3-2-1',
        paragraphs: ['A regra organiza as cópias de forma que um único incidente não consiga atingir tudo ao mesmo tempo. Ela serve como ponto de partida para empresas de diferentes portes.', 'Na prática, o arquivo de produção é a primeira cópia. Uma segunda pode ficar em um repositório local dedicado, separado do servidor, enquanto a terceira permanece em outro local físico ou em uma nuvem com controles próprios. O importante é evitar que todas dependam do mesmo equipamento, credencial ou ambiente.'],
        bullets: ['3 cópias dos dados, contando o arquivo em uso', '2 tipos de armazenamento ou ambientes diferentes', '1 cópia mantida fora do ambiente principal'],
      },
      {
        title: 'Por que uma cópia conectada não basta',
        paragraphs: ['Um disco externo permanentemente conectado pode ser atingido pelo mesmo ransomware, falha elétrica ou erro humano que afeta o servidor. Da mesma forma, sincronização em nuvem não substitui automaticamente um backup: um arquivo apagado ou corrompido pode ser sincronizado para todos os dispositivos.', 'A cópia deve ter algum grau de isolamento. Isso pode ser obtido com armazenamento imutável, retenção de versões, credenciais exclusivas para o serviço de backup ou uma mídia desconectada após o uso. Se a mesma conta administrativa acessa produção e backup, um invasor pode apagar os dois ambientes.'],
      },
      {
        title: 'Defina RPO e RTO antes da ferramenta',
        paragraphs: ['RPO é a quantidade de informação que a empresa aceita perder, medida em tempo. Se o financeiro pode perder no máximo duas horas de lançamentos, o intervalo entre cópias precisa ser menor ou igual a esse período. RTO é quanto tempo a operação pode ficar parada até a restauração.', 'Essas metas não precisam começar com cálculos complexos. Converse com cada área, identifique os processos que geram receita ou cumprem obrigações e classifique-os por prioridade. O sistema de emissão fiscal pode exigir recuperação em poucas horas, enquanto um arquivo histórico talvez aceite um prazo maior.'],
        bullets: ['Qual foi a última versão recuperável?', 'Quanto tempo leva para baixar e restaurar os dados?', 'Quais sistemas precisam voltar primeiro?', 'Quem decide que o ambiente já pode retornar à operação?'],
      },
      {
        title: 'O teste de restauração é parte do backup',
        paragraphs: ['O momento de descobrir que uma cópia está incompleta não pode ser durante uma emergência. Defina testes periódicos, registre o tempo de recuperação e confirme se os sistemas prioritários voltam a funcionar com os dados restaurados.', 'Um painel indicando “backup concluído” prova apenas que uma tarefa terminou. O teste de restauração confirma que arquivos abrem, bancos de dados mantêm consistência, permissões continuam corretas e dependências da aplicação também foram preservadas. Faça o teste em ambiente isolado para não colocar a produção em risco.'],
        bullets: ['Escolha arquivos e sistemas críticos para o teste', 'Registre a data, o resultado e o tempo necessário', 'Corrija falhas antes do próximo ciclo', 'Revise a estratégia sempre que a infraestrutura mudar'],
      },
      {
        title: 'Comece pelo impacto no negócio',
        paragraphs: ['Liste o que a empresa não pode perder e por quanto tempo cada operação pode ficar indisponível. Essa análise orienta frequência, retenção e investimento sem transformar o backup em uma coleção desorganizada de cópias.', 'Inclua servidores, sistemas em nuvem, estações com arquivos locais e dados de serviços como e-mail e colaboração. Muitos fornecedores protegem a disponibilidade da plataforma, mas a retenção, a exclusão indevida e a recuperação dos dados continuam sendo responsabilidades que precisam estar claras no contrato.', 'O resultado esperado é um plano curto: dados cobertos, frequência, retenção, responsáveis, local das cópias e roteiro de recuperação. Revise esse documento a cada mudança relevante na operação e pelo menos uma vez por ano.'],
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
    readingTime: '11 min de leitura',
    image: '/service-infrastructure-v2.jpg',
    imageAlt: 'Infraestrutura de rede e conectividade empresarial',
    intro: 'Quando a rede cresce sem planejamento, pequenos improvisos começam a afetar reuniões, sistemas, telefonia, câmeras e o trabalho diário. Alguns sinais ajudam a identificar a hora de revisar a infraestrutura.',
    sections: [
      {
        title: 'Os sinais mais comuns',
        paragraphs: ['Um evento isolado pode ter muitas causas. A repetição e a combinação dos sintomas indicam que vale investigar a rede como um sistema completo.', 'Registre horário, ambiente, dispositivo e serviço afetado. Esse histórico ajuda a separar uma falha de operadora de interferência no Wi-Fi, saturação de equipamento ou problema de cabeamento. Sem evidências, a equipe tende a reiniciar equipamentos e o sintoma retorna sem que a causa seja removida.'],
        bullets: ['Wi-Fi muda muito de desempenho entre ambientes', 'Chamadas e videoconferências travam em horários de pico', 'Equipamentos precisam ser reiniciados com frequência', 'Existem switches domésticos ou cabos sem identificação', 'Câmeras ou telefones IP perdem conexão', 'Não há documentação da rede', 'Uma falha simples paralisa vários setores'],
      },
      {
        title: 'Internet rápida não corrige uma rede ruim',
        paragraphs: ['A velocidade contratada é apenas uma parte do caminho. Cabeamento, switches, pontos de acesso, interferência, configuração e capacidade dos equipamentos influenciam a experiência. Aumentar o plano de internet pode não resolver gargalos internos.', 'Uma videoconferência pode travar mesmo com muita banda disponível quando existe perda de pacotes, latência variável ou roaming inadequado entre pontos de acesso. Já um servidor pode parecer lento porque a porta do switch negociou em velocidade inferior ou porque um enlace central concentra tráfego demais.', 'O diagnóstico precisa medir internet e rede local separadamente. Testes por cabo, análise de latência até o gateway, uso das portas e ocupação dos canais sem fio ajudam a localizar em qual trecho a degradação começa.'],
      },
      {
        title: 'Wi-Fi precisa de projeto, não de repetidores',
        paragraphs: ['Cobertura forte não garante capacidade. Escritórios com muitas pessoas, paredes densas, estruturas metálicas e redes vizinhas exigem posicionamento e configuração adequados dos pontos de acesso. Adicionar repetidores sem planejamento pode aumentar a interferência e reduzir o desempenho.', 'Um levantamento considera área, materiais, quantidade de dispositivos, aplicações críticas e movimentação das pessoas. A partir dele, são definidos canais, potência, densidade e pontos de instalação. Redes corporativas também devem separar colaboradores, visitantes e dispositivos como câmeras ou automação.'],
      },
      {
        title: 'O que uma revisão deve verificar',
        paragraphs: ['O diagnóstico deve combinar inspeção física e análise lógica. O objetivo é localizar gargalos, riscos e dependências antes de recomendar compras.', 'Também é importante descobrir equipamentos sem gerenciamento, fontes improvisadas, portas expostas e enlaces únicos dos quais toda a empresa depende. Fotos, etiquetas e um diagrama atualizado tornam futuras manutenções mais rápidas e reduzem a chance de desligar o equipamento errado.'],
        bullets: ['Topologia e documentação', 'Estado e categoria do cabeamento', 'Cobertura e interferência do Wi-Fi', 'Capacidade dos switches e pontos de acesso', 'Segmentação de dispositivos e visitantes', 'Redundância dos pontos críticos'],
      },
      {
        title: 'Planejar evita trocar tudo',
        paragraphs: ['Uma boa revisão diferencia o que precisa ser corrigido imediatamente do que pode ser modernizado em etapas. Isso reduz interrupções e direciona o investimento para os pontos que realmente limitam a operação.', 'Priorize primeiro riscos de segurança, pontos únicos de falha e problemas que interrompem processos críticos. Depois, organize capacidade, padronização e melhorias de experiência. Cada etapa deve ter objetivo mensurável, como reduzir quedas, melhorar a cobertura de uma área ou permitir a troca automática para um segundo link.', 'Ao final, a empresa deve receber inventário, diagrama, configurações essenciais protegidas por backup e uma lista priorizada de ações. Uma rede saudável não é a que nunca muda; é a que pode crescer sem perder visibilidade e controle.'],
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
    readingTime: '12 min de leitura',
    image: '/service-development-v1.jpg',
    imageAlt: 'Equipe analisando sistemas e processos de tecnologia',
    intro: 'Segurança não começa pela compra de uma ferramenta isolada. Ela começa por conhecer os ativos, reduzir acessos desnecessários e criar rotinas que continuem funcionando mesmo quando a equipe está ocupada.',
    sections: [
      {
        title: 'Identidades e acessos',
        paragraphs: ['Cada pessoa deve usar sua própria conta. Contas compartilhadas dificultam descobrir o que aconteceu e permanecem ativas quando alguém muda de função ou deixa a empresa.', 'Comece pelo e-mail, sistema financeiro, arquivos, VPN, painel do site e serviços em nuvem. Use um gerenciador de senhas para criar credenciais exclusivas e mantenha contas administrativas separadas das contas usadas no trabalho cotidiano.', 'A entrada, a mudança de função e o desligamento de colaboradores precisam acionar um processo formal. O responsável deve saber quais acessos conceder ou remover, em que prazo e onde registrar a conclusão.'],
        bullets: ['Ative autenticação em dois fatores', 'Remova acessos de ex-colaboradores imediatamente', 'Evite privilégios de administrador no uso diário', 'Revise permissões em ciclos definidos'],
      },
      {
        title: 'Equipamentos e atualizações',
        paragraphs: ['Computadores, servidores, roteadores e aplicativos desatualizados acumulam vulnerabilidades conhecidas. Mantenha um inventário simples, defina responsáveis e acompanhe atualizações críticas.', 'O inventário deve indicar usuário, modelo, sistema, situação da garantia, software de proteção e data da última verificação. Equipamentos que não recebem mais atualizações precisam de plano de substituição ou de controles compensatórios até a troca.', 'Sempre que possível, centralize atualizações, criptografia de disco, bloqueio automático e proteção contra ameaças. Isso reduz a dependência de cada pessoa lembrar de executar tarefas de manutenção.'],
      },
      {
        title: 'Proteja e-mail e pagamentos contra fraude',
        paragraphs: ['O e-mail costuma ser a porta de entrada para roubo de credenciais e fraude financeira. Além da autenticação em dois fatores, configure filtros, proteções do domínio e alertas para acessos incomuns. Mudanças de conta bancária e pedidos urgentes de pagamento devem ser confirmados por um segundo canal conhecido.', 'Crie uma regra simples de dupla verificação para transferências, alterações de fornecedores e compartilhamento de dados sensíveis. O processo precisa funcionar mesmo quando a solicitação parece vir de um diretor ou cliente importante.'],
        bullets: ['Não aprove pagamentos apenas com base em uma mensagem', 'Confirme mudanças bancárias usando um contato já cadastrado', 'Desconfie de urgência, sigilo e alteração repentina de procedimento', 'Relate a suspeita antes de responder ou abrir anexos'],
      },
      {
        title: 'Backup e continuidade',
        paragraphs: ['Defina quais dados são essenciais, onde ficam as cópias e quem acompanha os alertas. O plano também deve explicar o que fazer quando um sistema, link ou equipamento importante fica indisponível.', 'Inclua contatos de fornecedores, ordem de recuperação e alternativas temporárias para processos críticos. Uma cópia só deve ser considerada confiável depois de um teste de restauração documentado.'],
        bullets: ['Use cópias em ambientes diferentes', 'Teste a restauração', 'Documente contatos e prioridades', 'Mantenha procedimentos acessíveis durante uma falha'],
      },
      {
        title: 'Pessoas fazem parte da proteção',
        paragraphs: ['Treinamentos curtos e frequentes funcionam melhor do que uma orientação anual extensa. Mostre exemplos de mensagens suspeitas, estabeleça um canal para dúvidas e evite punir quem relata rapidamente um possível incidente.', 'A equipe deve saber como agir ao clicar em um link suspeito, perder um equipamento ou perceber um acesso incomum. Quanto mais cedo o incidente é comunicado, maior a chance de bloquear contas, preservar evidências e limitar o impacto.'],
      },
      {
        title: 'Prepare uma resposta a incidentes',
        paragraphs: ['Mesmo com bons controles, falhas podem acontecer. Defina antecipadamente quem coordena a resposta, quem fala com clientes e fornecedores e quais sistemas devem ser isolados. Não improvise comunicações ou apague evidências antes de avaliar o ocorrido.', 'Faça um exercício simples: suponha que o e-mail de um colaborador foi invadido ou que o servidor está inacessível. Percorra os contatos, decisões e recursos necessários. As dúvidas encontradas no exercício viram tarefas de melhoria.'],
      },
      {
        title: 'Transforme o checklist em rotina',
        paragraphs: ['O checklist é útil quando gera responsáveis, prazos e evidências. Comece pelos riscos de maior impacto, acompanhe o progresso e faça uma nova revisão sempre que a empresa adotar sistemas ou processos importantes.', 'Uma primeira rodada pode priorizar autenticação em dois fatores, remoção de contas antigas, atualização de equipamentos críticos e teste de backup. Depois, avance para segmentação da rede, gestão centralizada, registros de acesso e exercícios de resposta.', 'Segurança sustentável é uma rotina de redução de risco. O objetivo não é acumular ferramentas, mas conhecer o ambiente, tomar decisões proporcionais ao negócio e conseguir demonstrar que os controles realmente funcionam.'],
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
