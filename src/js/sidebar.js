const toggleBtn = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const icon = document.getElementById('menu-icon');

toggleBtn.addEventListener('click', () => {
  const isVisible = sidebar.classList.contains('show');

  // animação do ícone
  icon.style.transform = 'scale(0)';
  icon.style.opacity = '0';

  setTimeout(() => {
    icon.classList.toggle('fa-bars', isVisible);
    icon.classList.toggle('fa-xmark', !isVisible);

    icon.style.transform = 'scale(1)';
    icon.style.opacity = '1';
  }, 150);

  // sidebar transição
  if (!isVisible) {
    sidebar.style.display = 'block'; // precisa para transição ativar
    setTimeout(() => {
      sidebar.classList.add('show');
    }, 10); // pequeno delay para ativar o transition
    AOS.refreshHard(); // recarrega AOS
  } else {
    sidebar.classList.remove('show');
    setTimeout(() => {
      sidebar.style.display = 'none';
    }, 300); // tempo igual ao da transição
  }
});
