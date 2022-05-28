//Exibindo e ocultando o layout de navegação ao clicar no ícone de menu e o x
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

//No elemento toggle, quando este for clicado irá remover ou adicionar a classe 'show'
for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

//Quando clicar em um item do menu, escondê-lo
const links = document.querySelectorAll('nav ul li a')

//Para cada link de links, será executada uma função
for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

//Mudar o header da página quando o scroll for ativado
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
    if(window.scrollY >= navHeight) {
        //Se Scroll for maior que a altura do header, adicione uma classe scroll ao header
        header.classList.add('scroll')
    }
    else {
        // Se for menor que a altura do header, remova a classe scroll do header
        header.classList.remove('scroll')
    }
}


// Testimonials carousel slider swiper
// https://swiperjs.com/get-started

const swiper = new Swiper('.swiper-container', {
    //Quantidade de slides visíveis por vez no display
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    //breakpoints receberá a informação de quantos slides d depoimentos aparecerão na configuração de 767px >
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
  })

  // ScrollReveal: Mostrar elementos quando for utilizado o scroll na página
  const scrollReveal = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 100,
      reset: true
  })

  //Selecionando os elementos que receberão o scroll
  scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
    {interval: 100}    
  )

  // Botão Voltar para o Topo
  const backToTopButton = document.querySelector('.back-to-top')
  
  function backToTop() {

    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    }
    else {
        backToTopButton.classList.remove('show')
    }
  }

  //Menu ativo conforme a seção visível na página

  //Dentro do main, procurar toda section que possuir um id
  const sections = document.querySelectorAll('main section[id]')
  function activateMenuAtCurrentSection() {

    const checkpoint = window.pageYOffset + (window.innerHeight / 8 ) * 4
  
    for(const section of sections) {
        const sectionTop = section.offsetTop //Topo da seção
        const sectionHeight = section.offsetHeight //Altura da seção
        const sectionId = section.getAttribute('id') //Id da seção

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight //Altura do elemento

        if (checkpointStart && checkpointEnd) {
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.add('active')
        }
        else {
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
    }
}
  
  window.addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})