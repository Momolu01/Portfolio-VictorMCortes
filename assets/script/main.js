const links = {
  portfolio: {
    name: 'Portafolio',
    link: 'https://portfolio-victor-mc-ortes.vercel.app/',
    tools: ['HTML5', 'CSS', 'JS', 'Frontend', 'UI DESIGN'],
  },
  todo_list: {
    name: 'Todo List',
    description:
      'Todo list es la lista que generalmente usamos para mantener las tareas de día a día con todo lo que tenemos que hacer.',
    link: 'https://todo-list-momolu01.vercel.app/',
    tools: ['HTML5', 'CSS', 'JS', 'REACT.JS'],
    img: ['./../assets/img/todolist-img-0.png'],
  },
  order_summary: {
    name: 'Order Summary',
    link: 'https://suspicious-mestorf-8aad8f.netlify.app',
    tools: ['HTML5', 'CSS', 'JS', 'Frontend'],
  },
  faq: {
    name: 'FAQ Accordion Card',
    link: 'https://faq-accordion-card-momo.netlify.app/',
    tools: ['HTML5', 'CSS', 'JS', 'REACT.JS', 'Frontend'],
  },
};

// Elements
filters = document.getElementsByClassName('links');
perfil_img = document.getElementsByClassName('perfil-img')[0];
navbar = document.getElementById('nav');

// Events
// hover
const hover = (element, action) => {
  /* param: element::elemento al que se la aplicara una acción, action::acción que se ejecutara*/
  element.addEventListener('mouseover', action);
};
// filters[0].addEventListener('mouserover', (element) => {
//   element.target.style.transform = 'translate3d(105%, 0, 0)';
//   console.log('hola');
// });

const action = (event) => {
  let before = getComputedStyle(event.target, ':before');
  console.log(before);
  // event.target.style.transform = 'translate3d(105%, 0, 0)';
  before[269] = 'translate3d(0, 0, 0)';
};
// brandName.children[0].addEventListener('mouseleave', () => {
//   perfil_img.classList.add('hidden');
//   perfil_img.classList.remove('visible');
// });

document.addEventListener('click', (event) => {
  console.log(links.portfolio);
  console.log(filters);
  // console.log(filters, event);
});
document.addEventListener('scroll', () => {
  // if (window.scrollY > 0) {
  //   console.log(navbar.style.position);
  //   navbar.style.position = 'sticky';
  // } else {
  //   navbar.style.position = 'absolute';
  // }
  // console.log(window.scrollY);
});
