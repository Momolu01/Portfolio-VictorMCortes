// Elements
brandName = document.getElementsByClassName('img-container')[0];
perfil_img = document.getElementsByClassName('perfil-img')[0];

// Events
// hover -> logo
brandName.children[0].addEventListener('mouseenter', () => {
  perfil_img.classList.remove('hidden');
  perfil_img.classList.add('visible');
});
brandName.children[0].addEventListener('mouseleave', () => {
  perfil_img.classList.add('hidden');
  perfil_img.classList.remove('visible');
});

document.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  console.log(scrollY);
});
