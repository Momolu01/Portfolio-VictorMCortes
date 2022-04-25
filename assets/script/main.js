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
    description: `Componente sacado de <a href='https://www.frontendmentor.io' target='_blank'>Frontend Mentor</a>. Es un componente que es comunmente se utiliza en el desarrollo web.`,
    link: 'https://suspicious-mestorf-8aad8f.netlify.app',
    tools: ['HTML5', 'CSS', 'JS', 'Frontend'],
    img: ['./../assets/img/order-summary-img-0.png'],
  },
  {
    name: 'FAQ Accordion Card',
    description: `Componente sacado de <a href='https://www.frontendmentor.io' target='_blank'>Frontend Mentor</a>. Es un componente que es comunmente se utiliza en el desarrollo web.`,
    link: 'https://faq-accordion-card-momo.netlify.app/',
    tools: ['HTML5', 'CSS', 'JS', 'REACT.JS', 'Frontend'],
    img: ['./../assets/img/faq-img-0.png'],
  },
];

// Elements
home = document.getElementById('home');
about_me = document.getElementById('about-me');
skill_work = document.getElementById('skill-work');
contact = document.getElementById('contact');
nav_menu = document.getElementsByClassName('list-menu');
nav_itemList =
  document.getElementsByClassName('nav-menu')[0].children[1].children;
burger_icon = document.getElementsByClassName('burger');
filters = document.getElementsByClassName('links');
projects_list = document.getElementsByClassName('views')[0].children[0];

// COMPONENTES
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
const add_project_type3 = (project) => {
  const item_list = document.createElement('li.flex');
  item_list.innerHTML = `<li class='flex'>
              <div class='text-field'>
                <h3 class='sub-title'>${project.name}</h3>
                <div class="img-field">
                  <a href=${project.link} target='_blank'>
                    <img src=${project.img[0]} alt="">
                  </a>
                </div>
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
const add_aboutme_type1 = () => {
  about_me.innerHTML = `<section id='about-me' class='flex'>
  <div class="text-field">
    <h2 class="title-section ">Sobre Mi</h2>
    <div class="img-field">
      <img src="./assets/img/perfil-img-2.jpeg" alt="img-perfil">
    </div>
    <p>
      Soy un desarrollador web front-end del Valle del Cauca, Colombia. Autodidacta que disfruta mucho el explorar y encontrar nuevas soluciones a problemas. 
    </p>
  </div>
</section id='about-me'>`;
};

// EVENTOS / ALGORITMOS

// Evento: Cambio de componentes
let contador = 0;
while (links[contador]) {
  if (window.innerWidth <= 768) {
    add_aboutme_type1();
    projects_list.append(add_project_type3(links[contador]));
  } else {
    if (contador % 2 == 0) {
      projects_list.append(add_project_type1(links[contador]));
    } else {
      projects_list.append(add_project_type2(links[contador]));
    }
  }
  contador++;
}

// Evento: Burger
let state_burger = false;

burger_icon[0].addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    state_burger = !state_burger;
    console.log(state_burger);
    if (state_burger) {
      nav_menu[0].classList.add('active-burger');
    } else {
      nav_menu[0].classList.remove('active-burger');
    }
    console.log(typeof nav_menu[0].classList.value);
  }
});

// Evento: Stages
document.addEventListener('scroll', () => {
  const limit = window.scrollY + window.innerHeight / 2;
  const limitHome = home.offsetHeight;
  const limitAbout_me = about_me.offsetHeight + limitHome;
  const limitSkill_work = skill_work.offsetHeight + limitAbout_me;
  const limitContact = contact.offsetHeight + limitSkill_work;
  // HOME
  if (window.innerWidth >= 768) {
    if (limit < limitHome) {
      nav_itemList[0].classList.add('active');
    } else {
      nav_itemList[0].classList.remove('active');
    }
    // ABOUT-ME
    if (limit > limitHome && limit < limitAbout_me) {
      nav_itemList[1].classList.add('active');
    } else {
      nav_itemList[1].classList.remove('active');
    }
    // SKILL-WORK
    if (
      limit > limitAbout_me &&
      window.scrollY + (window.innerHeight * 2) / 3 < limitSkill_work
    ) {
      nav_itemList[2].classList.add('active');
    } else {
      nav_itemList[2].classList.remove('active');
    }
    // CONTACT
    if (
      window.scrollY + (window.innerHeight * 2) / 3 > limitSkill_work &&
      window.scrollY + (window.innerHeight * 2) / 3 < limitContact
    ) {
      nav_itemList[3].classList.add('active');
    } else {
      nav_itemList[3].classList.remove('active');
    }
  }
});

// document.addEventListener('click', (e) => {
//   console.log(nav_menu);
//   console.log(window.innerWidth <= 768);
// });
