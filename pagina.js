document.addEventListener('DOMContentLoaded', () => {
  console.log('Página carregada com sucesso!');

  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
      link.addEventListener('mouseover', () => link.style.color = '#FFD700');
      link.addEventListener('mouseout', () => link.style.color = '#fff');
  });
});

