//Ativação das funções
initTabNav();
initAccordion();
initScrollSuave();
initAnimacaoScroll();

function initTabNav() {
  // Essa função é uma forma de encapsular o código JS, isolando o escopo, para separar cada funcionalidade.
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    //Permite a ativação das instruções abaixo apenas se houver os elementos de tabMenu e tabConten na página, para evitar erros no console caso o usuário esteja em outra página do site.
    tabContent[0].classList.add("ativo"); //Garante que o primeiro item de section estará ativo quando a pagina for aberta

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }
    //Função activeTab: cria um loop que percorre cada item do elemento, removendo a classe 'ativo'. Depois, cria essa mesma classe no item do índex especificado.

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", function () {
        // Como o índice foi um parâmetro passado fora do addEventListener, chamar a função activeTab diretamente pode gerar erros. Para evitar isso, cria-se uma função anônima e, dentro dela, chama-se a função desejada.
        activeTab(index);
      });
    });
    //Função tabMenu: cria um loop que percorre cada ítem. Para cada ítem, adiciona um evento ativado por clique, que chama a função tabContent
  }
}

function initAccordion() {
  //Função para criar lista tipo acordeon para a FAQ
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    } // função que seleciona os ítens do elemento que já tem a classe 'ativo', além de adicionar essa classe para os ítens clicados.

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion); //Como não é preciso usar índice como parâmetro, essa função pode ser chamada diretamente.
    });
  }
}

function initScrollSuave() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']"); //seleciona os hrefs com links internos ( # )

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      //Essa função roda apenas no Chrome e FireFox.
      //Define um scroll suave que alinha o bloco ao início.
      behavior: "smooth",
      block: "start",
    });

    /* 
  //Forma alternativa de scroll suave, que requer verificar distancia até o topo. Não suportado em alguns navegadores.
  const topo = section.offsetTop; //Pega a distância do topo da página até o elemento clicado
  window.scrollTo({
    top: topo,
    behavior: "smooth",
  }); */
  } //Função que, ao ocorrer o evento (clique), ela impede o comportamento padrão (seguir o link). Depois, pega o href do alvo atual (elemento clicado). Em seguida, esse href é selecionado com o querySelector e seu valor levado para a constante section.

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6; //Calcula  60% da altura da tela.

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0; // diminui os 60% da altura da tela pela própria altura desde o topo, e depois verifica se esse número é menor que zero.
        if (isSectionVisible)
          //Se positivo, adiciona a classe 'ativo', que fará a transição animada para a próxima sessao.
          section.classList.add("ativo");
        else section.classList.remove("ativo");
      });
    }
    animaScroll(); //Garante uma primeira ativação logo que a página é carregada, para que não seja preciso rolar para ter o primeiro conteúdo.
    window.addEventListener("scroll", animaScroll);
  }
}
