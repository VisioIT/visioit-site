export type ServiceFaq = { question: string; answer: string };

export type Service = {
  slug: string;
  name: string;
  category: 'Gestão de TI & Segurança' | 'Desenvolvimento & Cloud' | 'Infraestrutura & Conectividade';
  description: string;
  promise: string;
  image: string;
  imageAlt: string;
  situations: string[];
  scope: string[];
  process: { title: string; text: string }[];
  outcomes: string[];
  faq: ServiceFaq[];
};

const securityImage = '/service-security-v2.jpg';
const developmentImage = '/service-development-v2.jpg';
const infrastructureImage = '/service-infrastructure-v2.jpg';

export const services: Service[] = [
  {
    slug: 'gestao-e-suporte-de-ti', name: 'Gestão e suporte de TI', category: 'Gestão de TI & Segurança', image: securityImage,
    imageAlt: 'Equipe técnica acompanhando a gestão e o suporte de TI de uma empresa',
    description: 'Suporte de TI para empresas em Araraquara e região, com atendimento organizado, prevenção de falhas e visão completa do ambiente tecnológico.',
    promise: 'Transformamos chamados isolados em uma operação de TI acompanhada, documentada e previsível.',
    situations: ['A equipe perde tempo com falhas recorrentes e não sabe quem acionar.', 'Computadores, acessos e fornecedores cresceram sem documentação.', 'A empresa precisa de apoio técnico contínuo sem montar uma equipe interna completa.'],
    scope: ['Atendimento remoto e presencial', 'Inventário de ativos e acessos', 'Manutenção preventiva', 'Gestão de fornecedores e licenças', 'Documentação do ambiente', 'Relatórios e plano de melhorias'],
    process: [{ title: 'Diagnóstico', text: 'Mapeamos usuários, equipamentos, sistemas, riscos e demandas recorrentes.' }, { title: 'Organização', text: 'Definimos prioridades, canais de atendimento, rotinas e responsáveis.' }, { title: 'Acompanhamento', text: 'Tratamos incidentes, prevenimos recorrências e evoluímos o ambiente continuamente.' }],
    outcomes: ['Menos interrupções no trabalho', 'Chamados com prioridade e histórico', 'Custos e ativos visíveis', 'Decisões técnicas com orientação especializada'],
    faq: [{ question: 'O atendimento pode ser remoto e presencial?', answer: 'Sim. O modelo é definido conforme o ambiente e a necessidade da empresa, combinando agilidade remota com visitas técnicas quando a intervenção física é necessária.' }, { question: 'A Visio IT substitui a equipe interna?', answer: 'Podemos assumir a operação ou atuar em conjunto com a equipe existente, cobrindo especialidades, demandas e projetos.' }, { question: 'Vocês atendem empresas pequenas?', answer: 'Sim. O escopo é dimensionado pelo número de usuários, criticidade dos sistemas e nível de atendimento necessário.' }],
  },
  {
    slug: 'firewall-vpn-e-seguranca', name: 'Firewall, VPN e segurança', category: 'Gestão de TI & Segurança', image: securityImage,
    imageAlt: 'Profissional monitorando firewall, VPN e segurança de rede corporativa',
    description: 'Implantação e gestão de firewall, VPN e controles de segurança para proteger redes, acessos remotos e dados empresariais.',
    promise: 'Controlamos quem acessa a rede, por onde o tráfego passa e como conexões remotas são protegidas.',
    situations: ['A empresa utiliza acesso remoto sem política definida.', 'Não há separação entre visitantes, colaboradores e equipamentos.', 'O firewall atual está desatualizado ou ninguém acompanha alertas e regras.'],
    scope: ['Firewall corporativo', 'VPN para usuários e unidades', 'Segmentação de redes', 'Políticas de acesso', 'Filtragem e registros', 'Revisão e monitoramento'],
    process: [{ title: 'Levantamento', text: 'Identificamos serviços publicados, usuários remotos, unidades e fluxos essenciais.' }, { title: 'Políticas', text: 'Desenhamos regras proporcionais ao risco e às necessidades da operação.' }, { title: 'Implantação', text: 'Configuramos, testamos, documentamos e acompanhamos eventos relevantes.' }],
    outcomes: ['Acessos remotos controlados', 'Menor exposição da rede', 'Regras documentadas', 'Mais visibilidade sobre eventos de segurança'],
    faq: [{ question: 'VPN deixa a conexão mais lenta?', answer: 'A criptografia adiciona processamento, mas um projeto dimensionado corretamente mantém desempenho adequado para as aplicações da empresa.' }, { question: 'Um firewall elimina todos os riscos?', answer: 'Não. Ele é uma camada importante e deve trabalhar com atualização, gestão de identidades, proteção de dispositivos, backup e orientação dos usuários.' }, { question: 'É possível conectar filiais com segurança?', answer: 'Sim. Avaliamos links, disponibilidade e tráfego para definir túneis protegidos entre unidades.' }],
  },
  {
    slug: 'servidores-fisicos-e-virtuais', name: 'Servidores físicos e virtuais', category: 'Gestão de TI & Segurança', image: securityImage,
    imageAlt: 'Infraestrutura de servidores físicos e virtuais em data center empresarial',
    description: 'Projeto, implantação, virtualização e manutenção de servidores para aplicações, arquivos e serviços corporativos.',
    promise: 'Dimensionamos servidores pela carga real e pela continuidade que o negócio precisa.',
    situations: ['O servidor atual está lento, sem garantia ou próximo do limite.', 'Há vários equipamentos físicos com baixa utilização.', 'A empresa precisa consolidar aplicações ou planejar uma migração segura.'],
    scope: ['Dimensionamento de hardware', 'Virtualização de servidores', 'Armazenamento e redundância', 'Migração de cargas', 'Atualização e monitoramento', 'Documentação e plano de capacidade'],
    process: [{ title: 'Capacidade', text: 'Medimos processamento, memória, armazenamento, crescimento e dependências.' }, { title: 'Arquitetura', text: 'Definimos plataforma, redundância, licenças e estratégia de migração.' }, { title: 'Transição', text: 'Implantamos por etapas, validamos aplicações e documentamos o novo ambiente.' }],
    outcomes: ['Recursos adequados à demanda', 'Menos equipamentos subutilizados', 'Manutenção planejada', 'Base preparada para recuperação e crescimento'],
    faq: [{ question: 'Virtualização é indicada para qualquer empresa?', answer: 'Ela é vantajosa em muitos cenários, mas depende das aplicações, licenças, capacidade e requisitos de disponibilidade.' }, { question: 'É preciso parar a empresa durante a migração?', answer: 'Planejamos janelas e etapas para reduzir a interrupção. O tempo depende do volume de dados e das aplicações envolvidas.' }, { question: 'Servidor local ainda faz sentido?', answer: 'Sim, especialmente para cargas com baixa latência, integração física ou requisitos específicos. A decisão deve comparar local, nuvem e modelo híbrido.' }],
  },
  {
    slug: 'backup-e-recuperacao-de-dados', name: 'Backup e recuperação de dados', category: 'Gestão de TI & Segurança', image: securityImage,
    imageAlt: 'Especialista verificando backup e recuperação de dados empresariais',
    description: 'Backup empresarial com retenção, cópias protegidas, monitoramento e testes de recuperação para arquivos, servidores e sistemas.',
    promise: 'Uma cópia só é confiável quando pode ser restaurada no prazo que a operação exige.',
    situations: ['O backup existe, mas nunca foi testado.', 'As cópias ficam conectadas ao mesmo servidor ou dependem da mesma credencial.', 'A empresa não sabe quanto dado perderia nem quanto tempo levaria para voltar.'],
    scope: ['Mapeamento de dados críticos', 'Estratégia 3-2-1', 'Cópias locais e externas', 'Retenção e imutabilidade', 'Alertas e acompanhamento', 'Testes de restauração'],
    process: [{ title: 'Prioridades', text: 'Definimos dados, sistemas, RPO, RTO e ordem de recuperação.' }, { title: 'Proteção', text: 'Implantamos cópias separadas, retenção e controles de acesso.' }, { title: 'Prova', text: 'Executamos restaurações periódicas e registramos resultado e tempo.' }],
    outcomes: ['Cópias protegidas de incidentes locais', 'Falhas identificadas antes da emergência', 'Recuperação documentada', 'Retenção alinhada ao negócio'],
    faq: [{ question: 'Sincronização em nuvem é backup?', answer: 'Nem sempre. Exclusões e corrupções podem ser sincronizadas. O backup exige histórico, retenção, isolamento e capacidade de restauração.' }, { question: 'Com que frequência o backup deve rodar?', answer: 'Depende do volume de dados que a empresa aceita perder. Sistemas críticos podem exigir intervalos menores.' }, { question: 'Por que testar a restauração?', answer: 'Porque o teste confirma integridade, permissões, dependências e tempo real de recuperação.' }],
  },
  {
    slug: 'monitoramento-preventivo-de-ti', name: 'Monitoramento preventivo de TI', category: 'Gestão de TI & Segurança', image: securityImage,
    imageAlt: 'Painel técnico de monitoramento preventivo de infraestrutura de TI',
    description: 'Monitoramento de servidores, rede, armazenamento e serviços para detectar falhas antes que interrompam a empresa.',
    promise: 'Trocamos a reação tardia por alertas úteis, responsáveis definidos e ação preventiva.',
    situations: ['Problemas só são percebidos quando usuários reclamam.', 'Discos, links ou serviços atingem o limite sem aviso.', 'A empresa tem ferramentas de alerta, mas ninguém trata os eventos.'],
    scope: ['Disponibilidade de serviços', 'Capacidade de disco e recursos', 'Links e equipamentos de rede', 'Alertas de backup', 'Histórico e tendências', 'Escalonamento técnico'],
    process: [{ title: 'Indicadores', text: 'Selecionamos sinais que representam disponibilidade, capacidade e risco real.' }, { title: 'Alertas', text: 'Configuramos limites e escalonamento para reduzir ruído e priorizar impacto.' }, { title: 'Prevenção', text: 'Analisamos tendências e executamos correções antes da indisponibilidade.' }],
    outcomes: ['Falhas detectadas mais cedo', 'Capacidade planejada', 'Menos alertas sem ação', 'Histórico para decisões e diagnóstico'],
    faq: [{ question: 'O monitoramento funciona 24 horas?', answer: 'A coleta pode ser contínua. O modelo de resposta e escalonamento é definido no escopo contratado.' }, { question: 'Todo alerta gera atendimento?', answer: 'Não. Os limites são classificados por severidade para que a equipe concentre esforço no que exige ação.' }, { question: 'É possível monitorar filiais?', answer: 'Sim, desde que exista conectividade e acesso seguro aos indicadores dos equipamentos e serviços.' }],
  },
  {
    slug: 'continuidade-operacional-de-ti', name: 'Continuidade operacional de TI', category: 'Gestão de TI & Segurança', image: securityImage,
    imageAlt: 'Equipe planejando continuidade operacional e recuperação de TI',
    description: 'Planejamento de continuidade de TI para manter processos críticos ou recuperá-los após falhas, incidentes e indisponibilidade.',
    promise: 'Definimos como a empresa continua trabalhando quando um recurso importante deixa de funcionar.',
    situations: ['Uma falha de internet, energia ou servidor paralisa vários setores.', 'Não existe ordem de recuperação nem responsáveis definidos.', 'O conhecimento de contingência está concentrado em uma única pessoa.'],
    scope: ['Análise de impacto', 'Mapeamento de dependências', 'Planos de contingência', 'Prioridades de recuperação', 'Contatos e responsabilidades', 'Testes e exercícios'],
    process: [{ title: 'Impacto', text: 'Identificamos processos críticos, tolerância de parada e dependências.' }, { title: 'Alternativas', text: 'Desenhamos contingências viáveis para pessoas, sistemas, links e dados.' }, { title: 'Exercício', text: 'Simulamos cenários, registramos lacunas e atualizamos o plano.' }],
    outcomes: ['Decisões mais rápidas durante incidentes', 'Prioridades conhecidas', 'Menor dependência de pessoas-chave', 'Contingências testadas'],
    faq: [{ question: 'Plano de continuidade é o mesmo que backup?', answer: 'Não. O backup protege dados; a continuidade inclui pessoas, comunicação, equipamentos, links, sistemas e formas temporárias de trabalhar.' }, { question: 'Pequenas empresas precisam desse plano?', answer: 'Sim. O documento pode ser simples, mas deve refletir os riscos e processos que não podem parar.' }, { question: 'Com que frequência o plano deve ser testado?', answer: 'Ao menos periodicamente e sempre após mudanças relevantes em sistemas, equipe ou infraestrutura.' }],
  },
  {
    slug: 'desenvolvimento-de-sistemas-sob-medida', name: 'Sistemas sob medida', category: 'Desenvolvimento & Cloud', image: developmentImage,
    imageAlt: 'Equipe desenvolvendo um sistema empresarial sob medida',
    description: 'Desenvolvimento de sistemas sob medida para integrar informações, reduzir trabalho manual e apoiar processos específicos da empresa.',
    promise: 'Criamos software a partir do processo real, sem obrigar a operação a caber em uma ferramenta genérica.',
    situations: ['Planilhas críticas cresceram além do controle.', 'Sistemas prontos não atendem regras importantes do negócio.', 'Informações são digitadas várias vezes em ferramentas desconectadas.'],
    scope: ['Levantamento de requisitos', 'Experiência e interfaces', 'Aplicações web', 'Bancos de dados', 'Integrações', 'Implantação e evolução'],
    process: [{ title: 'Descoberta', text: 'Entendemos usuários, regras, exceções e resultado esperado.' }, { title: 'Entrega incremental', text: 'Construímos e validamos módulos em ciclos curtos com usuários reais.' }, { title: 'Operação', text: 'Implantamos, acompanhamos o uso e priorizamos melhorias.' }],
    outcomes: ['Processos adaptados à operação', 'Informações centralizadas', 'Menos retrabalho', 'Evolução guiada pelo negócio'],
    faq: [{ question: 'Quanto tempo leva para desenvolver um sistema?', answer: 'Depende do escopo e das integrações. Após a descoberta, organizamos entregas incrementais para gerar valor antes da conclusão total.' }, { question: 'A empresa participa do desenvolvimento?', answer: 'Sim. Validações frequentes com usuários reduzem suposições e orientam prioridades.' }, { question: 'O sistema pode integrar ferramentas existentes?', answer: 'Sim, quando os sistemas oferecem APIs, bancos ou métodos seguros de integração.' }],
  },
  {
    slug: 'desenvolvimento-de-aplicativos-ios-android', name: 'Aplicativos iOS e Android', category: 'Desenvolvimento & Cloud', image: developmentImage,
    imageAlt: 'Desenvolvimento e testes de aplicativo para iOS e Android',
    description: 'Desenvolvimento de aplicativos empresariais para iOS e Android, integrados aos processos e sistemas da organização.',
    promise: 'Levamos processos e serviços ao celular com uma experiência simples, segura e sustentável.',
    situations: ['Clientes ou equipes precisam executar tarefas fora do computador.', 'O processo depende de papel, mensagens ou digitação posterior.', 'A empresa quer oferecer um canal móvel integrado ao sistema central.'],
    scope: ['Estratégia do produto', 'Design de experiência', 'Aplicativo multiplataforma ou nativo', 'Integração com APIs', 'Notificações e recursos do aparelho', 'Publicação e manutenção'],
    process: [{ title: 'Jornada', text: 'Definimos usuários, contexto móvel e tarefas que realmente precisam estar no aplicativo.' }, { title: 'Protótipo', text: 'Validamos fluxos e interface antes de investir na implementação completa.' }, { title: 'Produto', text: 'Desenvolvemos, testamos, publicamos e acompanhamos versões.' }],
    outcomes: ['Serviços acessíveis em mobilidade', 'Coleta de dados no ponto de origem', 'Menos etapas manuais', 'Canal digital integrado'],
    faq: [{ question: 'É possível criar um único app para iOS e Android?', answer: 'Sim. Avaliamos recursos, desempenho e manutenção para escolher entre desenvolvimento multiplataforma e nativo.' }, { question: 'A Visio IT publica nas lojas?', answer: 'Podemos apoiar preparação, requisitos técnicos e publicação nas contas da empresa.' }, { question: 'O aplicativo funciona sem internet?', answer: 'Algumas funções podem operar offline, desde que a sincronização e os conflitos sejam planejados desde o início.' }],
  },
  {
    slug: 'criacao-de-sites-e-portais-corporativos', name: 'Sites e portais corporativos', category: 'Desenvolvimento & Cloud', image: developmentImage,
    imageAlt: 'Criação de site e portal corporativo responsivo',
    description: 'Criação de sites empresariais e portais corporativos rápidos, responsivos, acessíveis e preparados para SEO.',
    promise: 'Transformamos o site em um ativo claro, encontrável e conectado aos objetivos comerciais da empresa.',
    situations: ['O site não representa mais os serviços nem a identidade da empresa.', 'Páginas são lentas, difíceis de usar no celular ou não aparecem nas buscas.', 'A equipe precisa publicar conteúdo ou integrar formulários e sistemas.'],
    scope: ['Arquitetura de informação', 'Design responsivo', 'Desenvolvimento front-end', 'SEO técnico e conteúdo', 'Formulários e integrações', 'Hospedagem e acompanhamento'],
    process: [{ title: 'Estratégia', text: 'Organizamos público, oferta, busca, conteúdo e ações importantes.' }, { title: 'Design e conteúdo', text: 'Criamos páginas claras com hierarquia, linguagem e identidade próprias.' }, { title: 'Publicação', text: 'Testamos desempenho, acessibilidade, indexação e conversões antes do lançamento.' }],
    outcomes: ['Mensagem mais clara', 'Navegação responsiva', 'Base técnica indexável', 'Canais de contato mensuráveis'],
    faq: [{ question: 'O site já inclui SEO?', answer: 'Incluímos fundamentos técnicos, metadados, conteúdo estruturado e rastreabilidade. Resultados orgânicos também dependem de autoridade, concorrência e evolução contínua.' }, { question: 'O site funciona em celular?', answer: 'Sim. O projeto é responsivo e validado em diferentes tamanhos de tela.' }, { question: 'Vocês cuidam da hospedagem?', answer: 'Sim. Podemos dimensionar, publicar, monitorar e manter o ambiente de hospedagem.' }],
  },
  {
    slug: 'integracoes-de-sistemas-e-apis', name: 'Integrações e APIs', category: 'Desenvolvimento & Cloud', image: developmentImage,
    imageAlt: 'Desenvolvedor trabalhando em integrações de sistemas e APIs',
    description: 'Integração de sistemas e desenvolvimento de APIs para conectar dados, reduzir digitação e automatizar fluxos empresariais.',
    promise: 'Fazemos informações circularem entre sistemas com regras claras, segurança e rastreabilidade.',
    situations: ['Os mesmos dados são digitados em mais de um sistema.', 'Erros acontecem durante exportações e importações manuais.', 'A empresa precisa conectar ERP, e-commerce, aplicativos ou parceiros.'],
    scope: ['Mapeamento de dados', 'APIs REST e webhooks', 'Integração com sistemas existentes', 'Autenticação e segurança', 'Tratamento de erros', 'Logs e monitoramento'],
    process: [{ title: 'Contrato', text: 'Definimos origem, destino, formato, frequência e regras de cada informação.' }, { title: 'Construção', text: 'Implementamos integração, segurança, validações e tratamento de falhas.' }, { title: 'Observação', text: 'Monitoramos execuções e criamos mecanismos seguros de reprocessamento.' }],
    outcomes: ['Menos digitação duplicada', 'Dados mais consistentes', 'Processos mais rápidos', 'Falhas identificadas e rastreáveis'],
    faq: [{ question: 'É possível integrar qualquer sistema?', answer: 'Depende dos acessos oferecidos pelo fornecedor. APIs, webhooks, arquivos ou bancos podem viabilizar a integração.' }, { question: 'O que acontece se um sistema ficar fora do ar?', answer: 'Projetamos filas, tentativas, registros e alertas conforme a criticidade do processo.' }, { question: 'Como as credenciais são protegidas?', answer: 'Aplicamos armazenamento seguro, privilégios mínimos, rotação e separação entre ambientes.' }],
  },
  {
    slug: 'automacao-de-processos-empresariais', name: 'Automação de processos', category: 'Desenvolvimento & Cloud', image: developmentImage,
    imageAlt: 'Equipe analisando a automação de um processo empresarial',
    description: 'Automação de processos empresariais para reduzir tarefas repetitivas, erros e tempo entre etapas.',
    promise: 'Automatizamos o que é repetitivo sem esconder regras importantes nem criar uma caixa-preta.',
    situations: ['A equipe copia dados, envia avisos ou monta relatórios manualmente.', 'Uma tarefa depende de alguém lembrar do próximo passo.', 'O crescimento exige mais pessoas apenas para repetir o mesmo processo.'],
    scope: ['Mapeamento do fluxo', 'Automação de tarefas', 'Aprovações e notificações', 'Integrações', 'Painéis e registros', 'Acompanhamento de exceções'],
    process: [{ title: 'Escolha', text: 'Priorizamos tarefas frequentes, estáveis e com impacto mensurável.' }, { title: 'Modelo', text: 'Documentamos regras, exceções, responsáveis e pontos de controle.' }, { title: 'Automação', text: 'Implementamos, medimos e ajustamos sem perder visibilidade do processo.' }],
    outcomes: ['Menos tarefas repetitivas', 'Prazos mais previsíveis', 'Redução de erros de transcrição', 'Histórico de execução'],
    faq: [{ question: 'Por onde começar a automatizar?', answer: 'Comece por tarefas repetitivas, bem definidas e com volume suficiente para justificar o investimento.' }, { question: 'Automação substitui todas as decisões humanas?', answer: 'Não. Decisões, exceções e aprovações importantes podem permanecer com pessoas, apoiadas por informação melhor.' }, { question: 'É possível automatizar planilhas?', answer: 'Sim, mas avaliamos se a planilha deve continuar como base ou se o processo precisa de uma estrutura mais confiável.' }],
  },
  {
    slug: 'hospedagem-e-cloud-para-empresas', name: 'Hospedagem e cloud', category: 'Desenvolvimento & Cloud', image: developmentImage,
    imageAlt: 'Infraestrutura de hospedagem e cloud para aplicações empresariais',
    description: 'Hospedagem e cloud para sites, sistemas e dados empresariais com capacidade, segurança e acompanhamento técnico.',
    promise: 'Construímos o ambiente pela necessidade da aplicação, com custos e responsabilidades visíveis.',
    situations: ['O sistema apresenta lentidão ou indisponibilidade em horários críticos.', 'A hospedagem cresceu sem arquitetura, monitoramento ou controle de custos.', 'A empresa precisa migrar uma aplicação ou preparar um novo lançamento.'],
    scope: ['Arquitetura cloud', 'Hospedagem de aplicações', 'Bancos e armazenamento', 'Backups e monitoramento', 'Segurança e acessos', 'Migração e otimização'],
    process: [{ title: 'Perfil', text: 'Analisamos aplicação, tráfego, dados, integrações e disponibilidade.' }, { title: 'Ambiente', text: 'Dimensionamos recursos, rede, proteção, backup e observabilidade.' }, { title: 'Operação', text: 'Publicamos, monitoramos consumo e ajustamos capacidade com evidências.' }],
    outcomes: ['Ambiente alinhado à aplicação', 'Custos acompanhados', 'Capacidade de expansão', 'Responsabilidades documentadas'],
    faq: [{ question: 'Cloud é sempre mais barato?', answer: 'Não. A vantagem depende da arquitetura, consumo, operação e flexibilidade necessária. Comparamos custo total, não apenas mensalidade.' }, { question: 'Vocês fazem migração?', answer: 'Sim. Planejamos dados, compatibilidade, testes, janela e retorno em caso de falha.' }, { question: 'Como evitar uma conta inesperada?', answer: 'Usamos dimensionamento, alertas de orçamento, identificação de recursos e revisões periódicas.' }],
  },
  {
    slug: 'cabeamento-estruturado', name: 'Cabeamento estruturado', category: 'Infraestrutura & Conectividade', image: infrastructureImage,
    imageAlt: 'Instalação profissional de cabeamento estruturado em empresa',
    description: 'Projeto e instalação de cabeamento estruturado para dados, voz, câmeras e pontos de acesso em empresas de Araraquara e região.',
    promise: 'Entregamos uma rede física organizada, identificada e pronta para manutenção e crescimento.',
    situations: ['Cabos improvisados causam falhas ou dificultam mudanças.', 'A empresa vai construir, reformar ou ampliar o espaço.', 'Novos equipamentos exigem pontos, capacidade e organização do rack.'],
    scope: ['Levantamento e projeto', 'Instalação de cabos e tomadas', 'Organização de rack e patch panels', 'Identificação dos pontos', 'Testes e certificação conforme escopo', 'Documentação da infraestrutura'],
    process: [{ title: 'Projeto', text: 'Mapeamos posições, caminhos, distâncias, capacidade e interferências.' }, { title: 'Execução', text: 'Instalamos e organizamos os componentes com padrão técnico e identificação.' }, { title: 'Entrega', text: 'Testamos pontos, registramos resultados e fornecemos documentação.' }],
    outcomes: ['Menos falhas físicas', 'Manutenção mais rápida', 'Rack organizado', 'Infraestrutura preparada para expansão'],
    faq: [{ question: 'Qual categoria de cabo deve ser usada?', answer: 'A escolha considera velocidade, distância, interferência, aplicação e vida útil esperada. O levantamento define a categoria adequada.' }, { question: 'Vocês organizam redes existentes?', answer: 'Sim. Podemos identificar, testar, substituir trechos e reorganizar racks e terminações.' }, { question: 'O serviço inclui documentação?', answer: 'Sim, conforme o escopo, com identificação dos pontos e registros necessários para manutenção.' }],
  },
  {
    slug: 'instalacao-e-fusao-de-fibra-optica', name: 'Fibra óptica', category: 'Infraestrutura & Conectividade', image: infrastructureImage,
    imageAlt: 'Técnico realizando instalação e fusão de fibra óptica',
    description: 'Instalação, lançamento, fusão e testes de fibra óptica para interligar prédios, galpões, racks e longas distâncias.',
    promise: 'Conectamos pontos distantes com capacidade, estabilidade e acabamento apropriados ao ambiente.',
    situations: ['A distância ultrapassa o limite seguro do cabeamento metálico.', 'Prédios ou galpões precisam ser interligados.', 'Interferência elétrica ou necessidade de maior capacidade limita a rede atual.'],
    scope: ['Definição de rota e cabo', 'Lançamento interno ou externo', 'Fusão e terminações', 'DIO e organização', 'Medições e testes', 'Identificação e documentação'],
    process: [{ title: 'Rota', text: 'Avaliamos distância, ambiente, infraestrutura disponível e quantidade de fibras.' }, { title: 'Instalação', text: 'Executamos lançamento, acomodação, fusões e terminações adequadas.' }, { title: 'Teste', text: 'Medimos o enlace, identificamos fibras e registramos a entrega.' }],
    outcomes: ['Conectividade em longas distâncias', 'Imunidade a interferência elétrica', 'Capacidade para expansão', 'Enlaces organizados e testados'],
    faq: [{ question: 'Fibra óptica pode ser instalada entre prédios?', answer: 'Sim. O projeto considera rota, proteção, ambiente externo, aterramento dos elementos aplicáveis e tipo correto de cabo.' }, { question: 'Vocês fazem apenas a fusão?', answer: 'Podemos executar fusão, reparo, lançamento ou o projeto completo, conforme a necessidade.' }, { question: 'Como saber se a fibra está boa?', answer: 'Testes ópticos medem perdas e ajudam a confirmar a qualidade do enlace e localizar problemas.' }],
  },
  {
    slug: 'racks-e-data-center', name: 'Racks e data center', category: 'Infraestrutura & Conectividade', image: infrastructureImage,
    imageAlt: 'Rack e data center corporativo organizados e identificados',
    description: 'Projeto, montagem e organização de racks e ambientes de data center para servidores, rede, energia e conectividade.',
    promise: 'Organizamos o centro físico da TI para facilitar manutenção, refrigeração e continuidade.',
    situations: ['O rack está sem espaço, identificação ou ventilação adequada.', 'Equipamentos e fontes estão apoiados ou conectados de forma improvisada.', 'A empresa vai centralizar rede, servidores, câmeras ou telefonia.'],
    scope: ['Dimensionamento de racks', 'Layout e organização', 'Patch panels e guias', 'Distribuição elétrica e nobreak', 'Ventilação e ambiente', 'Identificação e documentação'],
    process: [{ title: 'Inventário', text: 'Levantamos equipamentos, conexões, energia, peso, espaço e crescimento.' }, { title: 'Organização', text: 'Definimos posições, caminhos de cabos, alimentação e identificação.' }, { title: 'Transição', text: 'Executamos mudanças por etapas e validamos os serviços conectados.' }],
    outcomes: ['Acesso técnico facilitado', 'Cabos e equipamentos identificados', 'Melhor uso do espaço', 'Menos risco durante manutenções'],
    faq: [{ question: 'É possível reorganizar um rack sem parar tudo?', answer: 'Muitas etapas podem ser preparadas antes, mas algumas mudanças exigem janelas controladas. Planejamos a sequência para reduzir impacto.' }, { question: 'Vocês dimensionam nobreak?', answer: 'Sim, considerando carga, autonomia esperada, expansão e condições elétricas.' }, { question: 'O rack precisa de refrigeração?', answer: 'Depende da carga térmica e do ambiente. Avaliamos ventilação, temperatura e operação dos equipamentos.' }],
  },
  {
    slug: 'redes-corporativas', name: 'Redes corporativas', category: 'Infraestrutura & Conectividade', image: infrastructureImage,
    imageAlt: 'Projeto e gerenciamento de rede corporativa',
    description: 'Projeto, implantação e revisão de redes corporativas com desempenho, segmentação, segurança e capacidade para crescimento.',
    promise: 'Tratamos a rede como um sistema completo, do acesso do usuário ao link e aos serviços críticos.',
    situations: ['Lentidão e quedas persistem mesmo com um link rápido.', 'Switches foram adicionados sem planejamento ou gerenciamento.', 'Uma única falha afeta vários setores e não existe diagrama da rede.'],
    scope: ['Topologia e endereçamento', 'Switches gerenciáveis', 'VLANs e segmentação', 'Qualidade de serviço', 'Redundância', 'Monitoramento e documentação'],
    process: [{ title: 'Diagnóstico', text: 'Medimos tráfego, latência, capacidade, erros e dependências físicas e lógicas.' }, { title: 'Projeto', text: 'Definimos topologia, segmentação, equipamentos e etapas de implantação.' }, { title: 'Validação', text: 'Testamos conectividade, desempenho, contingência e documentação.' }],
    outcomes: ['Gargalos identificados', 'Dispositivos separados por função', 'Mudanças mais seguras', 'Base preparada para voz, vídeo e sistemas'],
    faq: [{ question: 'Trocar o link resolve a lentidão?', answer: 'Somente quando o gargalo está na internet. Cabeamento, switches, Wi-Fi e configurações também podem limitar a experiência.' }, { question: 'O que é segmentação de rede?', answer: 'É a separação lógica de grupos, como usuários, visitantes, câmeras e servidores, para melhorar controle e segurança.' }, { question: 'Vocês documentam a topologia?', answer: 'Sim. A documentação torna manutenção e expansão mais seguras e rápidas.' }],
  },
  {
    slug: 'wifi-empresarial-indoor-outdoor', name: 'Wireless indoor e outdoor', category: 'Infraestrutura & Conectividade', image: infrastructureImage,
    imageAlt: 'Planejamento de cobertura Wi-Fi empresarial interna e externa',
    description: 'Projeto de Wi-Fi empresarial indoor e outdoor com cobertura, capacidade, roaming e segurança para escritórios, galpões e áreas externas.',
    promise: 'Projetamos Wi-Fi pela área, pelos usuários e pelas aplicações — não apenas pela intensidade do sinal.',
    situations: ['O sinal existe, mas chamadas e sistemas continuam instáveis.', 'Usuários perdem conexão ao circular entre ambientes.', 'Galpões ou áreas externas precisam de cobertura confiável.'],
    scope: ['Levantamento de cobertura', 'Dimensionamento de capacidade', 'Posicionamento de pontos de acesso', 'Canais e potência', 'Roaming e redes separadas', 'Enlaces sem fio externos'],
    process: [{ title: 'Ambiente', text: 'Avaliamos planta, materiais, interferências, usuários e aplicações.' }, { title: 'Projeto', text: 'Definimos quantidade, posição, configuração e infraestrutura de cada ponto.' }, { title: 'Ajuste', text: 'Instalamos, medimos cobertura e refinamos canais, potência e roaming.' }],
    outcomes: ['Cobertura mais uniforme', 'Capacidade adequada à densidade', 'Mobilidade entre áreas', 'Visitantes e dispositivos separados'],
    faq: [{ question: 'Repetidor resolve falta de sinal?', answer: 'Pode ampliar cobertura em casos simples, mas também reduzir capacidade e aumentar interferência. Ambientes empresariais pedem projeto de pontos de acesso.' }, { question: 'Wi-Fi funciona em galpões e pátios?', answer: 'Sim, com equipamentos, antenas, proteção e posicionamento adequados ao ambiente.' }, { question: 'É possível separar visitantes?', answer: 'Sim. Criamos redes e políticas distintas para visitantes, colaboradores e dispositivos.' }],
  },
  {
    slug: 'links-de-internet-e-telecom', name: 'Links e telecom', category: 'Infraestrutura & Conectividade', image: infrastructureImage,
    imageAlt: 'Gestão de links de internet e telecom para empresas',
    description: 'Dimensionamento, contratação e integração de links de internet e telecom para empresas que precisam de desempenho e redundância.',
    promise: 'Alinhamos operadoras, links e contingência ao impacto real da conectividade no negócio.',
    situations: ['A internet é crítica e uma queda interrompe toda a empresa.', 'Planos foram contratados sem medir uso, latência ou qualidade.', 'A empresa precisa integrar unidades ou implantar um segundo link.'],
    scope: ['Análise de consumo', 'Dimensionamento de banda', 'Apoio na contratação', 'Redundância e failover', 'Balanceamento conforme cenário', 'Monitoramento e gestão de chamados'],
    process: [{ title: 'Necessidade', text: 'Mapeamos aplicações, horários, unidades e tolerância à indisponibilidade.' }, { title: 'Estratégia', text: 'Comparamos tecnologias, operadoras, rotas, SLA e contingência.' }, { title: 'Integração', text: 'Configuramos equipamentos, testes de falha e acompanhamento.' }],
    outcomes: ['Banda adequada ao uso', 'Menor impacto de falhas', 'Contratos comparados tecnicamente', 'Diagnóstico baseado em medições'],
    faq: [{ question: 'Dois links garantem continuidade?', answer: 'Ajudam, mas precisam de rotas, equipamentos e configuração adequados. Links diferentes podem compartilhar a mesma infraestrutura externa.' }, { question: 'Qual velocidade a empresa precisa?', answer: 'Depende de usuários, aplicações, upload, picos e qualidade exigida. Medimos e dimensionamos pelo uso.' }, { question: 'Vocês vendem o link?', answer: 'Podemos apoiar a escolha e coordenar fornecedores, mantendo foco na solução mais adequada ao ambiente.' }],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const serviceCategories = [...new Set(services.map((service) => service.category))];
