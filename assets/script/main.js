const links = [
  // {
  //   name: 'Portafolio',
  //   link: 'https://portfolio-victor-mc-ortes.vercel.app/',
  //   tools: ['HTML5', 'CSS', 'JS', 'Frontend', 'UI DESIGN'],
  // },
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
    description: `Componente sacado de <a href='https://www.frontendmentor.io' target='_blank'>Frontend Mentor</a>.Es un componente que es comunmente se utiliza en el desarrollo web.`,
    link: 'https://suspicious-mestorf-8aad8f.netlify.app',
    tools: ['HTML5', 'CSS', 'JS', 'Frontend'],
    img: ['./../assets/img/order-summary-img-0.png'],
  },
  {
    name: 'FAQ Accordion Card',
    description: `Componente sacado de <a href='https://www.frontendmentor.io' target='_blank'>Frontend Mentor</a>.Es un componente que es comunmente se utiliza en el desarrollo web.`,
    link: 'https://faq-accordion-card-momo.netlify.app/',
    tools: ['HTML5', 'CSS', 'JS', 'REACT.JS', 'Frontend'],
    img: ['./../assets/img/faq-img-0.png'],
  },
];

// Elements
filters = document.getElementsByClassName('links');
projects_list = document.getElementsByClassName('views')[0].children[0];

// componentes
const add_project_type1 = (project) => {
  const item_list = document.createElement('li.flex');
  item_list.innerHTML = `<li class='flex'>
              <div class="img-field">
                <a href=${project.link} target='_blank'>
                  <img src=${project.img[0]} alt="">
                </a>
              </div>
              <div class='text-field'>
                <h3 class='sub-title'>${project.name}</h3>
                <p>${project.description}</p>
                <div class="skills">
                  <ul class='flex'>
                    ${project.tools.reduce((previous, current) => {
                      current = `<li>
                      <span>${current}</span>
                    </li>`;
                      return previous + current;
                    }, '')}
                  </ul>
                </div>
              </div>
            </li>`;
  return item_list;
};
const add_project_type2 = (project) => {
  const item_list = document.createElement('li.flex');
  item_list.innerHTML = `<li class='flex'>
              <div class='text-field'>
                <h3 class='sub-title'>${project.name}</h3>
                <p>${project.description}</p>
                <div class="skills">
                  <ul class='flex'>
                    ${project.tools.reduce((previous, current) => {
                      current = `<li>
                      <span>${current}</span>
                    </li>`;
                      return previous + current;
                    }, '')}
                  </ul>
                </div>
              </div>
                <div class="img-field">
                <a href=${project.link} target='_blank'>
                  <img src=${project.img[0]} alt="">
                </a>
              </div>
            </li>`;
  return item_list;
};

// evento / algoritmos
let contador = 0;
while (links[contador]) {
  if (contador % 2 == 0) {
    projects_list.append(add_project_type1(links[contador]));
  } else {
    projects_list.append(add_project_type2(links[contador]));
  }
  contador++;
}
