const destaquesHero = [
  'Flutter + Java',
  'Apps, APIs e sistemas internos',
  'Projetos para empresas',
  'Experiência com sistemas corporativos reais',
]

const diferenciaisPonto = [
  'Desenvolvimento mobile em Flutter',
  'Batida de ponto online/offline',
  'Espelho de ponto',
  'Solicitação de ajuste manual e abono',
  'Histórico de comprovantes',
  'Assinatura de relatório',
  'Publicação em loja',
  'Integração com backend',
]

const servicos = [
  {
    titulo: 'Manutenção e evolução de apps Flutter',
    descricao: 'Sustentação, melhorias contínuas e novas entregas sem comprometer a operação.',
  },
  {
    titulo: 'Desenvolvimento de apps sob medida',
    descricao: 'Aplicativos mobile para processos internos e produtos digitais de empresas.',
  },
  {
    titulo: 'Backends e APIs em Java',
    descricao: 'APIs seguras para autenticação, regras de negócio, relatórios e integrações.',
  },
  {
    titulo: 'Integrações entre sistemas',
    descricao: 'Conexão entre aplicativos, ERP, banco de dados e serviços de terceiros.',
  },
  {
    titulo: 'Publicação e ajustes para lojas',
    descricao: 'Pipeline de release, validações e correções para Android e iOS.',
  },
  {
    titulo: 'Sistemas internos para empresas',
    descricao: 'Soluções orientadas à produtividade, fluxo operacional e controle interno.',
  },
  {
    titulo: 'Correção de bugs e sustentação',
    descricao: 'Diagnóstico técnico e estabilização de sistemas em produção.',
  },
]

const projetosInternosCrf = [
  {
    titulo: 'Portal institucional em evolução contínua',
    valor:
      'Gestão técnica e melhorias recorrentes no site oficial para manter desempenho, estabilidade e uma comunicação digital confiável.',
  },
  {
    titulo: 'Demandas internas sob medida',
    valor:
      'Implementação de funcionalidades solicitadas pelos setores para reduzir tarefas manuais e acelerar o atendimento interno.',
  },
  {
    titulo: 'Digitalização de processos operacionais',
    valor:
      'Ajustes em fluxos administrativos com foco em rastreabilidade, produtividade e menor retrabalho.',
  },
  {
    titulo: 'Evolução de sistemas existentes',
    valor:
      'Integrações e melhorias em plataformas já utilizadas, preservando a continuidade operacional.',
  },
]

const diferenciais = [
  'Experiência com app publicado em loja',
  'Atuação completa em mobile + backend',
  'Vivência em sistemas corporativos reais',
  'Sincronização offline para operação de campo',
  'Manutenção evolutiva com foco em continuidade',
  'Integração com APIs e geração de documentos PDF',
]

const tecnologiaPorGrupo = [
  { grupo: 'Mobile', itens: ['Flutter', 'Dart'] },
  { grupo: 'Front-end', itens: ['JavaScript', 'React', 'Vue.js'] },
  { grupo: 'Backend', itens: ['Java', 'Spring Boot', 'PHP', 'Yii2'] },
  { grupo: 'Banco de dados', itens: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  { grupo: 'Integrações', itens: ['REST APIs', 'Webhooks', 'Firebase'] },
  { grupo: 'Ferramentas', itens: ['Git', 'Publicação em loja', 'CI/CD'] },
]

const ui = {
  section: 'rounded-3xl border border-slate-700 bg-slate-900/70 p-6 md:p-10',
  article: 'rounded-2xl border border-slate-700 bg-slate-950/80 p-5',
  smallArticle: 'rounded-2xl border border-slate-700 bg-slate-900/70 p-4',
  primaryButton:
    'rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400',
  secondaryButton:
    'rounded-full border border-slate-600 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300',
}

function SectionHeader({ title, eyebrow, description, descriptionClassName = 'section-text max-w-3xl' }) {
  return (
    <>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{eyebrow}</p>
      )}
      <h2 className="section-title">{title}</h2>
      {description && <p className={descriptionClassName}>{description}</p>}
    </>
  )
}

function App() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 pb-20 pt-6 md:px-10 md:pt-10">
      <header className="fade-up mb-10 flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 backdrop-blur md:mb-16 md:px-6">
        <div>
          <p className="title-font text-xl font-bold tracking-tight text-slate-100 md:text-2xl">
            Matheus Silveira Sergio
          </p>
          <p className="mt-1 text-sm font-medium text-slate-300 md:text-base">
            Desenvolvedor Flutter, Java e sistemas corporativos
          </p>
        </div>
        <a href="https://wa.me/5541987822514" target="_blank" rel="noreferrer" className={ui.primaryButton}>
          Chamar no WhatsApp
        </a>
      </header>

      <main className="space-y-10 md:space-y-14">
        <section id="hero" className="glass-card fade-up delay-1 overflow-hidden rounded-3xl p-6 md:p-10">
          <div className="grid items-center gap-10 md:grid-cols-[1.25fr_0.75fr]">
            <div>
              <span className="tag mb-4">Disponível para novos projetos B2B</span>
              <h1 className="title-font mb-6 max-w-4xl text-4xl font-bold leading-[1.08] text-slate-100 md:text-6xl">
                <span className="block">Apps, APIs e sistemas internos</span>
                <span className="block">para empresas que precisam</span>
                <span className="block">de mais eficiência operacional</span>
              </h1>
              <p className="section-text max-w-2xl md:max-w-3xl">
                Eu assumo projetos em Flutter, Java e integrações com foco em continuidade,
                previsibilidade e resultados de negócio. O objetivo é simples: entregar software
                confiável para que sua operação funcione melhor todos os dias.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="https://wa.me/5541987822514" target="_blank" rel="noreferrer" className={ui.primaryButton}>
                  Pedir orçamento no WhatsApp
                </a>
                <a href="#projeto-principal" className={ui.secondaryButton}>
                  Ver case principal
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-cyan-900 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/80 p-6">
                <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Destaques</p>
                <ul className="space-y-3">
                  {destaquesHero.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm font-medium text-slate-200 md:text-base"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className={`fade-up delay-2 ${ui.section}`}>
          <SectionHeader title="Sobre" />
          <p className="section-text max-w-3xl">
            Trabalho com empresas que precisam evoluir produtos digitais sem comprometer a operação.
            Combino mobile, backend e integrações para resolver gargalos reais com qualidade técnica,
            manutenção sustentável e visão de longo prazo.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="premium-chip">Sistemas corporativos em produção</div>
            <div className="premium-chip">Mobile e backend no mesmo projeto</div>
            <div className="premium-chip">Manutenção evolutiva orientada a negócio</div>
          </div>
          <div className="mt-6 max-w-3xl rounded-2xl border border-cyan-900/70 bg-cyan-950/30 p-5 text-sm leading-relaxed text-cyan-100 md:text-base">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Credibilidade institucional
            </p>
            <p>
              Atualmente, atuo como assessor de análise de sistemas no CRF-PR e também sou
              responsável pela gestão do site oficial
              <a
                href="https://www.crf-pr.org.br"
                target="_blank"
                rel="noreferrer"
                className="ml-1 inline-flex font-semibold text-cyan-300 underline underline-offset-4 transition hover:text-cyan-200"
              >
                (www.crf-pr.org.br)
              </a>
              , além de atender demandas internas estratégicas.
            </p>
          </div>
        </section>

        <section id="projeto-principal" className="fade-up delay-3 overflow-hidden rounded-3xl border border-cyan-900 bg-slate-950 p-6 text-slate-100 md:p-10">
          <SectionHeader title="Sistema de Controle de Ponto" eyebrow="Case principal" />
          <div className="mt-2 grid gap-4 md:grid-cols-2">
            {[
              {
                titulo: 'Contexto',
                texto:
                  'A operação envolvia equipes em campo e exigia registro de jornada confiável, inclusive em locais com conexão instável.',
              },
              {
                titulo: 'Desafio',
                texto:
                  'Manter o controle de ponto sem perda de dados e com rastreabilidade para RH, operação e lideranças.',
              },
              {
                titulo: 'Solução',
                texto:
                  'Desenvolvimento de aplicativo em Flutter integrado ao backend, com sincronização online/offline, validação de regras, emissão de comprovantes e assinatura de relatórios.',
              },
              {
                titulo: 'Impacto',
                texto:
                  'O processo se tornou mais rastreável, reduziu o retrabalho manual e trouxe mais previsibilidade para a rotina de controle de jornada.',
              },
            ].map((item) => (
              <article key={item.titulo} className={ui.smallArticle}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">{item.titulo}</p>
                <p className="text-sm leading-relaxed text-slate-300 md:text-base">{item.texto}</p>
              </article>
            ))}
          </div>

          <ul className="mt-7 grid gap-3 md:grid-cols-2">
            {diferenciaisPonto.map((item) => (
              <li
                key={item}
                className="list-none rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-sm md:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="projetos-crf" className={ui.section}>
          <SectionHeader
            title="Projetos internos do CRF-PR"
            eyebrow="Experiência institucional"
            description="Além da gestão do portal oficial, atuo em demandas internas com foco em valor operacional: menos retrabalho, mais rastreabilidade e maior continuidade dos sistemas."
          />

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {projetosInternosCrf.map((projeto) => (
              <article key={projeto.titulo} className={ui.article}>
                <h3 className="title-font mb-2 text-lg font-bold text-slate-100">{projeto.titulo}</h3>
                <p className="text-sm leading-relaxed text-slate-300 md:text-base">{projeto.valor}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="servicos" className={ui.section}>
          <SectionHeader
            title="Serviços oferecidos"
            description="Serviços orientados a contratos de desenvolvimento, evolução de produto e sustentação técnica."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {servicos.map((servico) => (
              <article key={servico.titulo} className={ui.article}>
                <h3 className="title-font mb-3 text-xl font-bold text-slate-100">{servico.titulo}</h3>
                <p className="text-sm leading-relaxed text-slate-300 md:text-base">{servico.descricao}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="diferenciais" className={ui.section}>
          <SectionHeader title="Diferenciais" />
          <ul className="grid gap-3 md:grid-cols-2">
            {diferenciais.map((item) => (
              <li
                key={item}
                className="list-none rounded-xl border border-cyan-900 bg-cyan-950/30 px-4 py-3 text-sm font-medium text-slate-100 md:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="tecnologias" className={ui.section}>
          <SectionHeader title="Tecnologias" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {tecnologiaPorGrupo.map((grupo) => (
              <article key={grupo.grupo} className={ui.article}>
                <h3 className="title-font mb-3 text-lg font-bold text-slate-100">{grupo.grupo}</h3>
                <ul className="flex flex-wrap gap-2">
                  {grupo.itens.map((tech) => (
                    <li
                      key={tech}
                      className="list-none rounded-full border border-cyan-900 bg-cyan-950/60 px-3 py-1 text-xs font-semibold text-cyan-200 md:text-sm"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contato" className="rounded-3xl border border-cyan-900 bg-slate-900/80 p-6 md:p-10">
          <SectionHeader
            title="Contato"
            descriptionClassName="section-text max-w-2xl"
            description="Se sua empresa precisa tirar um projeto do papel ou evoluir uma solução que já está em produção, eu posso te ajudar. Me envie o escopo e retorno com proposta técnica clara e objetiva."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://wa.me/5541987822514" target="_blank" rel="noreferrer" className={ui.primaryButton}>
              Falar sobre o projeto no WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/matheus-silveira-sergio-885aa5182/"
              target="_blank"
              rel="noreferrer"
              className={ui.secondaryButton}
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
