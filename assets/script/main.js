brandName = document.getElementsByClassName('img-container')[0];
perfil_img = document.getElementsByClassName('perfil-img')[0];
console.log(brandName);

brandName.children[0].addEventListener('mouseenter', () => {
  perfil_img.classList.remove('hidden');
  perfil_img.classList.add('visible');
  console.log(perfil_img.classList);
  console.log('mouse enter');
});
brandName.children[0].addEventListener('mouseleave', () => {
  perfil_img.classList.add('hidden');
  perfil_img.classList.remove('visible');
  console.log('mouse leave');
});
