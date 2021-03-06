import React from 'react';

export default () => (
  <div>
    <div id="body" className="wrapper">
      <aside className="sidebar-wrapper">
        <div className="profile-container">
          <img className="profile" src="images/profile.png" alt="Wallace Coelho" />
          <h1 className="name">Wallace Coelho</h1>
          <h3 className="tagline">Full Stack Developer</h3>
          <h4 className="print">(Versão de Impressão)</h4>
          <h5 className="print">Original em https://wac2007.github.io/profile</h5>
        </div>
        {/* //profile-container */}
        <div className="contact-container container-block">
          <ul className="list-unstyled contact-list">
            <li className="email">
              <i className="fa fa-envelope" />
              <a href="mailto: wac.almeida@gmail.com">wac.almeida@gmail.com</a>
            </li>
            <li className="phone">
              <i className="fa fa-phone" />
              <a href="tel:+55 21991753192">+55 (21) 99175-3192</a>
            </li>
            <li className="medium">
              <i className="fa fa-medium" />
              <a href="https://medium.com/@wac2007" rel="noopener noreferrer" target="_blank">
                Medium
              </a>
            </li>
            <li className="website">
              <i className="fa fa-globe" />
              <a href="http://wac2007.github.io/profile/" rel="noopener noreferrer" target="_blank">
                Website
              </a>
            </li>
            <li className="linkedin">
              <i className="fa fa-linkedin" />
              <a
                href="https://www.linkedin.com/in/wacoelho"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li className="github">
              <i className="fa fa-github" />
              <a href="https://github.com/wac2007" rel="noopener noreferrer" target="_blank">
                GitHub
              </a>
            </li>
            <li className="twitter">
              <i className="fa fa-twitter" />
              <a href="https://twitter.com/wac2007" rel="noopener noreferrer" target="_blank">
                Twitter
              </a>
            </li>
          </ul>
        </div>
        {/* //contact-container */}
        <div className="education-container container-block">
          <h2 className="container-block-title">Educação</h2>
          <div className="item">
            <h4 className="degree">Sistemas de Informação</h4>
            <h5 className="meta">Universidade Federal Fluminense</h5>
            <div className="time">2012 - Cursando</div>
          </div>
          {/* //item */}
        </div>
        {/* //education-container */}
        <div className="languages-container container-block page-break">
          <h2 className="container-block-title">Idiomas</h2>
          <ul className="list-unstyled interests-list">
            <li>
              Português <span className="lang-desc">(Nativo)</span>
            </li>
            <li>
              Inglês <span className="lang-desc">(Intermediário)</span>
            </li>
          </ul>
        </div>
        {/* //interests */}
        <div className="interests-container container-block">
          <h2 className="container-block-title">Interesses</h2>
          <ul className="list-unstyled interests-list">
            <li>Programação</li>
            <li>Empreendedorismo</li>
            <li>Games</li>
            <li>Leitura</li>
            <li>Cozinha</li>
          </ul>
        </div>
        {/* //interests */}
      </aside>
      {/* //sidebar-wrapper */}
      <main className="main-wrapper">
        <section className="section summary-section">
          <h2 className="section-title">
            <i className="fa fa-user" />Perfil de Carreira
          </h2>
          <div className="summary">
            <p>
              Como desenvolvedor <b>Full Stack</b> e <b>Empreendedor</b>, tenho uma grande paixão
              por startups. Com foco no <b>Front End</b>, procuro empresas e projetos que sejam
              inovadores e possuam uma cultura organizacional diferenciada -{' '}
              <i>Foco no cliente sem burocracia!</i>
            </p>
            <p>
              Como Cofundador de uma <i>Startup</i> e gerente de projetos, sei como funciona uma
              empresa com seus riscos e desafios. Por isso venho agregar valor não somente no campo
              técnico mas na comunidade empresarial como um todo.
            </p>
          </div>
          {/* //summary */}
        </section>
        {/* //section */}
        <section className="section experiences-section">
          <h2 className="section-title">
            <i className="fa fa-briefcase" />Experiências
          </h2>
          <article className="item">
            <div className="meta">
              <div className="upper-row">
                <h3 className="job-title">Concrete Solutions / Accenture</h3>
                <div className="time">2017 - Atualmente</div>
              </div>
              {/* //upper-row */}
              <div className="company">Front End Developer</div>
            </div>
            {/* //meta */}
            <div className="details">
              <p>
                A <i>Concrete Solutions</i> é uma <i>software house</i> que produz software sob
                encomenda e foi recém adquirida pela Accenture.
              </p>
              <p>
                Nela atuo como desenvolvedor Front End utilizando metodologias ágeis e Frameworks
                como Angular 2+, React, SASS, entre outros.
              </p>
            </div>
            {/* //details */}
          </article>
          {/* //item */}
          <article className="item">
            <div className="meta">
              <div className="upper-row">
                <h3 className="job-title">Full Stack Developer</h3>
                <div className="time">2016 - 2017</div>
              </div>
              {/* //upper-row */}
              <div className="company">Freelancer</div>
            </div>
            {/* //meta */}
            <div className="details">
              <p>
                Como trabalho paralelo à minha <i>Startup</i> (Tech 4) atuei como freelancer pegando
                projetos de back, front e/ou mobile.
              </p>
            </div>
            {/* //details */}
          </article>
          {/* //item */}
          <article className="item">
            <div className="meta">
              <div className="upper-row">
                <h3 className="job-title">Cofundador</h3>
                <div className="time">2015 - 2017</div>
              </div>
              {/* //upper-row */}
              <div className="company">
                <a href="http://tech4.com.br" rel="noopener noreferrer" target="_blank">
                  Tech 4 Soluções Tecnológicas
                </a>
              </div>
            </div>
            {/* //meta */}
            <div className="details">
              <p>
                A <i>Tech 4 (Tech Four)</i> é uma empresa criada para abrigar a nossa Startup:{' '}
                <b>o Imoja (Imóvel Já)</b>.
              </p>
              <p>
                Como cofundador fiquei responável pela parte de <b>Desenvolvimento do Produto</b>{' '}
                <i>(Funcionalidades e Software)</i>, <b>Relacionamento com o Cliente</b> e{' '}
                <b>Prospecção</b>.
              </p>
            </div>
            {/* //details */}
          </article>
          {/* //item */}
          <article className="item">
            <div className="meta">
              <div className="upper-row">
                <h3 className="job-title">Full Stack Developer &amp; Gerente de Projeto</h3>
                <div className="time">2015 - 2016</div>
              </div>
              {/* //upper-row */}
              <div className="company">
                <a href="https://www.easycomtec.com" rel="noopener noreferrer" target="_blank">
                  Easy Communication &amp; Technology
                </a>
              </div>
            </div>
            {/* //meta */}
            <div className="details">
              <p>
                A <i>Easy</i> é uma empresa que produz sites e softwares sob encomenda. A empresa
                toda é remota com pessoas trabalhando de vários cantos do Brasil e do Mundo.
              </p>
              <p>
                Nela atuei principalmente como <b>Gerente de Projetos</b> e{' '}
                <b>Relacionamento com Clientes</b>, além de atuar nas áreas de <b>Front End</b>{' '}
                <i>(jQuery, Angular, CSS)</i>, <b>backend</b> <i>(PHP e .NET/C#)</i> e <b>Mobile</b>{' '}
                <i>(Ionic)</i>, além de criar templates para campanhas de <b>Email Marketing</b>.
              </p>
            </div>
            {/* //details */}
          </article>
          {/* //item */}
          <article className="item">
            <div className="meta">
              <div className="upper-row">
                <h3 className="job-title">Fullstack Developer</h3>
                <div className="time">2014 - 2015</div>
              </div>
              {/* //upper-row */}
              <div className="company">C&amp;D Sistemas</div>
            </div>
            {/* //meta */}
            <div className="details">
              <p>
                A <i>C&amp;D Sistemas</i> é uma empresa focada em <b>Automação Comercial</b> e{' '}
                <b>Sistemas de gestão para Clínicas Médicas</b>. Nela atuei criando as versões Web e
                Mobile de seus sistemas (que são desenvolvidos em Delphi) - utilizando{' '}
                <b>PHP, Ionic (1 e 2) e SASS</b>.
              </p>
              <p>
                Além disso foi desenhado e fabricado por mim o mecanismo de integração e
                sincronização entre os sistemas de frente de Loja e ERP. Utilizando Tecnologias como{' '}
                <b>Python, Django e PyWin32.</b>
              </p>
            </div>
            {/* //details */}
          </article>
          {/* //item */}
          <article className="item">
            <div className="meta">
              <div className="upper-row">
                <h3 className="job-title">DBA Júnior</h3>
                <div className="time">2012 - 2014</div>
              </div>
              {/* //upper-row */}
              <div className="company">Systemsat, RJ</div>
            </div>
            {/* //meta */}
            <div className="details">
              <p>
                A <i>Systemsat</i> é uma empresa que produz software para rastreamento de veículos
                em tempo real.
              </p>
              <p>
                Como DBA fui responsável pela <b>manutenção de servidores</b>{' '}
                <i>(Desenvolvimento, Homologação e Produção)</i>,{' '}
                <b>
                  Automatização de Processos, Backups, Controle do tamanho da Base de Dados, Análise
                  de <i>Queries</i> e Restauração de Dados.
                </b>
              </p>
            </div>
            {/* //details */}
          </article>
          {/* //item */}
          <article className="item">
            <div className="meta">
              <div className="upper-row">
                <h3 className="job-title">Auxiliar Administrativo</h3>
                <div className="time">2011 - 2012</div>
              </div>
              {/* //upper-row */}
              <div className="company">Empresa Brasileira de Correios e Telégrafos, RJ</div>
            </div>
            {/* //meta */}
            <div className="details">
              <p>
                A Empresa Brasileira de Correios e Telégrafos - mais comum Correios - dispensa
                apresentações.
              </p>
              <p>
                Como auxiliar administrativo minha tarefa eram das mais variadas. Desde a digitação
                de documentos e planilhas, até enviar emails e fax para outras unidades.
              </p>
              <p>
                Também era responsável pelo controle do almoxarifado, controlando os pedidos,
                entradas e saídas de material, para me auxiliar nisso, desenvolvi um software em{' '}
                <b>MS ACCESS</b> para conseguir visualizar a entrada e saída de produtos.
              </p>
            </div>
            {/* //details */}
            {/* //item */}
          </article>
        </section>
        {/* //section */}
        <section className="section projects-section">
          <h2 className="section-title">
            <i className="fa fa-archive" />Projetos
          </h2>
          <div className="intro">
            <p>Projetos nos quais trabalhei fora das empresas especificadas.</p>
          </div>
          {/* //intro */}
          <div className="item">
            <span className="project-title">Imoja (Imóvel Já)</span> -
            <span>
              O Produto é um aplicativo para que os corretores de imóveis possam exibir, books,
              imagens, preço de venda e outras informações para seu cliente com segurança. O sitema
              inteiro foi desenvolvido com a Stack:{' '}
              <b>Django (API), Ionic, Gulp, SASS (App), Stylus (Web) e Angular JS</b>.
            </span>
          </div>
          <div className="item">
            <span className="project-title">
              <a
                href="https://www.youtube.com/watch?v=MfulegtfpVc"
                rel="noopener noreferrer"
                target="_blank"
              >
                Xpresso Money Transfer (App)
              </a>
            </span>{' '}
            -{' '}
            <span className="project-tagline">
              O Xpresso é um sistema para transferir dinheiro entre países. A App foi desenvolvido
              com <b>Ionic 2, Angular 4 e SASS</b>.
              <a
                href="https://www.youtube.com/watch?v=MfulegtfpVc"
                rel="noopener noreferrer"
                target="_blank"
              >
                Veja aqui o vídeo Explicando o App
              </a>
            </span>
          </div>
          {/* //item */}
          <div className="item">
            <span className="project-title">Xpresso Money Transfer (Web)</span> -{' '}
            <span className="project-tagline">
              O Xpresso Web é a versão para o consumidor final do sistema Xpresso de transferência
              de dinheiro entre países. No desenvolvimento foram utilizados:{' '}
              <b>Angular 4 e SASS.</b>
            </span>
          </div>
          {/* //item */}
          <div className="item">
            <span className="project-title">
              <a
                href="https://play.google.com/store/apps/details?id=com.tech4.potesaudavel"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pote Saudável
              </a>
            </span>{' '}
            -{' '}
            <span className="project-tagline">
              O Pote Saudável consiste em um aplicativo para fazer pedido de saladas em potes. Com o
              design pensado pelo cliente, meu trabalho foi transformá-lo em um App funcional para
              Android e iOS. Desenvolvido com <b>Ionic, AngularJS e SASS.</b>
            </span>
          </div>
          {/* //item */}
        </section>
        {/* //section */}
        <section className="skills-section section">
          <h2 className="section-title">
            <i className="fa fa-rocket" />Competências Técnicas
          </h2>
          <div className="skillset">
            <h4>Front End</h4>
            <div className="item">
              <h3 className="level-title">
                Angular 2+ <span className="printable"> - 90%</span>
              </h3>
              <div className="level-bar">
                <div className="level-bar-inner" data-level="90%" />
              </div>
              {/* //level-bar */}
            </div>
            {/* //item */}
            <div className="item">
              <h3 className="level-title">
                AngularJS <span className="printable"> - 60%</span>
              </h3>
              <div className="level-bar">
                <div className="level-bar-inner" data-level="60%" />
              </div>
              {/* //level-bar */}
            </div>
            {/* //item */}
            <div className="item">
              <h3 className="level-title">
                CSS / Sass <span className="printable"> - 80%</span>
              </h3>
              <div className="level-bar">
                <div className="level-bar-inner" data-level="80%" />
              </div>
              {/* //level-bar */}
            </div>
            {/* //item */}
            <div className="item">
              <h3 className="level-title">
                React <span className="printable"> - 60%</span>
              </h3>
              <div className="level-bar">
                <div className="level-bar-inner" data-level="60%" />
              </div>
              {/* //level-bar */}
            </div>
            {/* //item */}
            <div className="item" />
            {/* Divisor */}
            <h4>Mobile</h4>
            <div className="item">
              <h3 className="level-title">
                Ionic 2 <span className="printable"> - 80%</span>
              </h3>
              <div className="level-bar">
                <div className="level-bar-inner" data-level="80%" />
              </div>
              {/* //level-bar */}
            </div>
            {/* //item */}
            <div className="item" />
            {/* Divisor */}
            <h4>Back End</h4>
            <div className="item">
              <h3 className="level-title">
                NodeJS <span className="printable"> - 75%</span>
              </h3>
              <div className="level-bar">
                <div className="level-bar-inner" data-level="75%" />
              </div>
              {/* //level-bar */}
            </div>
            {/* //item */}
            <div className="item">
              <h3 className="level-title">
                PHP <span className="printable"> - 70%</span>
              </h3>
              <div className="level-bar">
                <div className="level-bar-inner" data-level="70%" />
              </div>
              {/* //level-bar */}
            </div>
            {/* //item */}
            <div className="item">
              <h3 className="level-title">
                Python &amp; Django <span className="printable"> - 75%</span>
              </h3>
              <div className="level-bar">
                <div className="level-bar-inner" data-level="75%" />
              </div>
              {/* //level-bar */}
            </div>
            {/* //item */}
          </div>
        </section>
        {/* //skills-section */}
      </main>
      {/* //main-body */}
    </div>
    <div id="editor" />
  </div>
);
