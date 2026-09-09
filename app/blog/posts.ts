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
  {
    slug: 'como-reduzir-custos-de-ti-sem-criar-riscos',
    title: 'Como reduzir custos de TI sem criar novos riscos',
    excerpt: 'Um roteiro para eliminar desperdícios, priorizar investimentos e economizar sem comprometer a operação.',
    category: 'Gestão de TI',
    publishedAt: '2026-08-27',
    updatedAt: '2026-08-27',
    readingTime: '10 min de leitura',
    image: '/blog-custos-ti.jpg',
    imageAlt: 'Especialista avaliando capacidade e custos de infraestrutura em um ambiente de TI',
    intro: 'Reduzir custos de tecnologia não deveria significar adiar atualizações importantes ou aceitar mais indisponibilidade. A economia sustentável aparece quando a empresa entende o que utiliza, remove desperdícios e direciona recursos para o que sustenta a operação.',
    sections: [
      {
        title: 'Comece pelo inventário e pelo custo total',
        paragraphs: ['Antes de cancelar contratos, reúna equipamentos, licenças, serviços em nuvem, links, suporte e garantias em uma visão única. Registre valor, responsável, quantidade contratada, uso real, renovação e processo atendido.', 'O preço de compra é apenas uma parte do custo. Inclua manutenção, energia, indisponibilidade, horas da equipe e risco de manter uma solução sem suporte. Um equipamento antigo pode parecer econômico até exigir intervenções frequentes ou interromper um setor.'],
        bullets: ['Licenças atribuídas e efetivamente utilizadas', 'Serviços duplicados com a mesma função', 'Equipamentos fora de garantia ou sem atualização', 'Contratos próximos da renovação automática', 'Recursos em nuvem ativos sem responsável definido'],
      },
      {
        title: 'Elimine desperdício antes de reduzir capacidade',
        paragraphs: ['Licenças de ex-colaboradores, máquinas virtuais esquecidas, armazenamento duplicado e planos superdimensionados são alvos melhores do que cortar redundância ou proteção. Primeiro remova aquilo que não entrega valor; depois redimensione o que permaneceu.', 'Use dados de utilização por um período representativo. Um servidor com baixo consumo hoje pode atender um fechamento mensal, uma integração noturna ou uma contingência. A decisão precisa considerar picos e dependências, não apenas a média.'],
      },
      {
        title: 'Padronização reduz custo invisível',
        paragraphs: ['Muitos modelos de computadores, fornecedores e versões de software aumentam o tempo necessário para suporte, atualização e reposição. Uma lista curta de padrões por perfil de trabalho facilita compras, estoque de peças e automação.', 'Documente configurações mínimas, ciclo de substituição e exceções aprovadas. Padronizar não significa oferecer o mesmo equipamento a todos, mas criar poucas categorias coerentes com as necessidades reais.'],
      },
      {
        title: 'Negocie contratos com evidências',
        paragraphs: ['Renegociar funciona melhor quando a empresa conhece consumo, nível de serviço e alternativas. Reúna chamados, períodos de indisponibilidade e recursos não utilizados antes da renovação. Compare propostas pelo escopo completo, não somente pela mensalidade.', 'Evite dependência sem plano de saída. Contratos importantes devem esclarecer propriedade dos dados, exportação, prazos de atendimento, reajustes e apoio em uma eventual migração. Uma solução barata pode se tornar cara quando a troca é difícil.'],
      },
      {
        title: 'Transforme economia em uma rotina',
        paragraphs: ['Defina revisões trimestrais de licenças, capacidade e contratos. Para cada ação, registre economia prevista, impacto, responsável e indicador de segurança ou disponibilidade que não pode piorar.', 'Parte do valor economizado deve financiar melhorias que diminuam riscos futuros, como gestão centralizada, automação, backup ou renovação de ativos críticos. Assim, a redução de custos fortalece a operação em vez de apenas transferir problemas para o próximo orçamento.'],
      },
    ],
  },
  {
    slug: 'mfa-como-proteger-contas-da-empresa',
    title: 'MFA: como proteger as contas da empresa além da senha',
    excerpt: 'Como escolher, implantar e manter a autenticação multifator sem transformar segurança em obstáculo.',
    category: 'Segurança',
    publishedAt: '2026-08-13',
    updatedAt: '2026-08-13',
    readingTime: '11 min de leitura',
    image: '/blog-mfa-contas.jpg',
    imageAlt: 'Profissional confirmando uma autenticação segura pelo celular ao lado de um notebook',
    intro: 'Senhas podem ser descobertas, reutilizadas ou entregues em uma página falsa. A autenticação multifator, conhecida como MFA, adiciona uma segunda verificação e reduz a chance de uma credencial roubada se transformar em acesso à empresa.',
    sections: [
      {
        title: 'Por que a senha não é suficiente',
        paragraphs: ['Mesmo uma senha longa pode ser exposta por phishing, malware ou vazamento de outro serviço. Quando a mesma credencial é reutilizada, um incidente fora da empresa também pode abrir caminho para o e-mail, arquivos e sistemas internos.', 'O MFA combina elementos diferentes: algo que a pessoa sabe, possui ou é. Para entrar, o invasor precisa superar mais de uma barreira. Isso não elimina todo risco, mas reduz significativamente os ataques baseados apenas em senha.'],
      },
      {
        title: 'Nem todo segundo fator oferece a mesma proteção',
        paragraphs: ['Códigos por SMS são melhores do que nenhuma camada adicional, mas podem ser expostos por fraude na linha telefônica e páginas falsas. Aplicativos autenticadores evitam parte desses riscos. Chaves físicas e métodos resistentes a phishing oferecem proteção superior para contas críticas.', 'A escolha deve equilibrar risco, compatibilidade e facilidade de recuperação. Administradores, financeiro e direção merecem os métodos mais fortes, pois suas contas podem autorizar mudanças, pagamentos ou acesso amplo.'],
        bullets: ['Priorize chaves de segurança ou passkeys quando disponíveis', 'Use aplicativo autenticador como alternativa consistente', 'Evite SMS como único método em contas privilegiadas', 'Desative métodos antigos depois da migração'],
      },
      {
        title: 'Implante por prioridade e com comunicação',
        paragraphs: ['Comece por e-mail, identidade central, acesso remoto, sistemas financeiros, armazenamento em nuvem e painéis administrativos. Teste com um grupo pequeno, documente as etapas e informe por que a mudança está acontecendo.', 'Uma implantação apressada gera bloqueios e atalhos inseguros. Prepare instruções curtas, canal de suporte e prazo claro. Depois do período de adaptação, torne o MFA obrigatório e acompanhe contas que ainda não concluíram o cadastro.'],
      },
      {
        title: 'Planeje recuperação sem criar uma porta dos fundos',
        paragraphs: ['Troca ou perda do celular não pode depender de improviso. Mantenha métodos alternativos protegidos, códigos de recuperação armazenados de forma segura e um processo de validação de identidade para redefinições.', 'O suporte nunca deve remover o MFA apenas porque alguém fez uma solicitação urgente. Defina quem pode aprovar a recuperação, quais evidências são necessárias e como a ação será registrada. Contas de emergência devem ser poucas, monitoradas e testadas.'],
      },
      {
        title: 'MFA faz parte de um conjunto de controles',
        paragraphs: ['Continue exigindo senhas exclusivas, removendo contas antigas e revisando permissões. Ative alertas de login, bloqueie protocolos obsoletos e investigue solicitações de aprovação inesperadas.', 'Treine a equipe para negar notificações que não iniciou e comunicar o ocorrido. Uma sequência de pedidos de aprovação pode indicar que a senha já foi comprometida. Nesse caso, altere a credencial, encerre sessões e revise os registros de acesso.'],
      },
    ],
  },
  {
    slug: 'cloud-servidor-local-ou-ambiente-hibrido',
    title: 'Cloud, servidor local ou ambiente híbrido: como decidir',
    excerpt: 'Critérios práticos para escolher onde executar sistemas e armazenar dados sem seguir modismos.',
    category: 'Cloud',
    publishedAt: '2026-07-30',
    updatedAt: '2026-07-30',
    readingTime: '12 min de leitura',
    image: '/blog-cloud-hibrida.jpg',
    imageAlt: 'Profissional caminhando entre servidores locais e uma área moderna de operações',
    intro: 'Não existe um destino único para toda carga de trabalho. Nuvem, servidor local e ambiente híbrido resolvem problemas diferentes. A decisão correta considera aplicações, conectividade, segurança, equipe, custos e o impacto de uma interrupção.',
    sections: [
      {
        title: 'Comece pela carga de trabalho',
        paragraphs: ['Liste sistemas, bancos de dados, arquivos, integrações, usuários e horários críticos. Identifique dependências de equipamentos locais, volume de tráfego e tolerância a latência. A pergunta não é onde a empresa inteira deve estar, mas onde cada serviço funciona melhor.', 'Um sistema acessado por equipes distribuídas pode ganhar flexibilidade na nuvem. Já uma aplicação industrial dependente de equipamentos internos pode exigir processamento local. Arquivos e identidades podem seguir uma estratégia diferente da aplicação principal.'],
      },
      {
        title: 'Quando a nuvem tende a fazer sentido',
        paragraphs: ['A nuvem facilita expansão rápida, acesso distribuído e contratação de serviços gerenciados. Ela pode reduzir o tempo dedicado a hardware e permitir que capacidade acompanhe projetos temporários ou crescimento imprevisível.', 'Isso não significa custo automaticamente menor. Recursos esquecidos, transferência de dados, armazenamento crescente e arquitetura inadequada podem elevar a fatura. É necessário definir orçamento, alertas, responsáveis e revisão periódica desde o início.'],
        bullets: ['Demanda variável ou crescimento rápido', 'Equipes em diferentes locais', 'Necessidade de provisionamento ágil', 'Uso de serviços gerenciados e automação', 'Capacidade interna limitada para manter hardware'],
      },
      {
        title: 'Quando manter recursos locais é coerente',
        paragraphs: ['Servidores locais podem ser adequados quando a aplicação exige baixa latência, conversa intensamente com máquinas do ambiente ou não pode depender integralmente do link. Investimentos já realizados e requisitos específicos também influenciam.', 'A infraestrutura local exige ciclo de renovação, energia protegida, refrigeração, monitoramento, peças e pessoas capacitadas. Compare o custo durante toda a vida útil e inclua contingência; não trate o equipamento comprado como custo encerrado.'],
      },
      {
        title: 'O híbrido precisa de integração e governo',
        paragraphs: ['Um ambiente híbrido combina recursos locais e nuvem. Ele pode manter aplicações próximas da operação enquanto usa serviços externos para colaboração, backup, contingência ou capacidade adicional.', 'A combinação só funciona bem quando identidade, rede, monitoramento e responsabilidades são integrados. Sem padrões, a empresa passa a administrar dois ambientes isolados, duplicando ferramentas e pontos cegos. Documente os fluxos de dados e defina qual ambiente é a fonte oficial de cada informação.'],
      },
      {
        title: 'Compare cenários, não promessas',
        paragraphs: ['Monte ao menos três cenários para um horizonte de três a cinco anos. Inclua implantação, migração, licenças, links, equipe, suporte, crescimento, backup e recuperação. Avalie também o custo de saída e a portabilidade dos dados.', 'Faça uma prova de conceito com uma carga representativa antes de migrar um sistema crítico. Meça desempenho, experiência dos usuários, consumo e operação diária. A arquitetura escolhida deve ser revisada com o tempo, pois preços, aplicações e necessidades do negócio mudam.'],
        bullets: ['Custo total e previsibilidade', 'Disponibilidade e recuperação', 'Segurança e requisitos contratuais', 'Desempenho e dependência de conectividade', 'Capacidade da equipe e facilidade de gestão'],
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
