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

initTabNav(); //Ativa a função

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

initAccordion();

const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
}

linksInternos.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});
