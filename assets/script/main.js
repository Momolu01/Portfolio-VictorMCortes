// Elements
brandName = document.getElementsByClassName('img-container')[0];
perfil_img = document.getElementsByClassName('perfil-img')[0];
navbar = document.getElementsByTagName('nav');

// Events
// hover -> logo
// brandName.children[0].addEventListener('mouseenter', () => {
//   perfil_img.classList.remove('hidden');
//   perfil_img.classList.add('visible');
// });
// brandName.children[0].addEventListener('mouseleave', () => {
//   perfil_img.classList.add('hidden');
//   perfil_img.classList.remove('visible');
// });

document.addEventListener('click', () => {
  const scrollY = window.scrollY;
  console.log(window);
  console.log(navbar);
});
document.addEventListener('scroll', () => {});
