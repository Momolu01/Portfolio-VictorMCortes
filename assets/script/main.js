const links = [
  {
    name: 'Portafolio',
    link: 'https://portfolio-victor-mc-ortes.vercel.app/',
    tools: ['HTML5', 'CSS', 'JS', 'Frontend', 'UI DESIGN'],
  },
  {
    name: 'Todo List',
    description:
      'Todo list es la lista que generalmente usamos para mantener las tareas del día a día con todo lo que tenemos que hacer.',
    link: 'https://todo-list-momolu01.vercel.app/',
    tools: ['HTML5', 'CSS', 'JS', 'REACT.JS'],
    img: ['./../assets/img/todolist-img-0.png'],
  },
  {
    name: 'Order Summary',
    link: 'https://suspicious-mestorf-8aad8f.netlify.app',
    tools: ['HTML5', 'CSS', 'JS', 'Frontend'],
    img: ['./../assets/img/order-summary-img-0.png'],
  },
  {
    name: 'FAQ Accordion Card',
    link: 'https://faq-accordion-card-momo.netlify.app/',
    tools: ['HTML5', 'CSS', 'JS', 'REACT.JS', 'Frontend'],
  },
];

// Elements
filters = document.getElementsByClassName('links');
projects_list = document.getElementsByClassName('views')[0].children[0];

// Events

const add_project = (project) => {
  const item_list = document.createElement('li.flex');
};
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
  console.log(projects_list);
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
