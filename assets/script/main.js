// import { links } from './../data/link';
// Elements
filters = document.getElementsByClassName('hoverfilters');
perfil_img = document.getElementsByClassName('perfil-img')[0];
navbar = document.getElementById('nav');

// Events
// hover
const hover = (element, action) => {
  /* param: element::elemento al que se la aplicara una acción, action::acción que se ejecutara*/
  element.addEventListener('mouseouver', action);
};
filters[0].addEventListener('mouserover', (element) => {
  element.target.style.transform = 'translate3d(105%, 0, 0)';
  console.log('hola');
});
// brandName.children[0].addEventListener('mouseleave', () => {
//   perfil_img.classList.add('hidden');
//   perfil_img.classList.remove('visible');
// });

document.addEventListener('click', () => {
  console.log(filters);
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
