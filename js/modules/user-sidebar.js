export function initUserSidebar() {
  const sidebar = document.getElementById('user-sidebar');
  const overlay = document.getElementById('overlay');
  const menuBtn = document.getElementById('menu-icon');

  if (!sidebar || !overlay || !menuBtn) return;

  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  });
}