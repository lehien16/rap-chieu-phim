// modules/sidebar.js
export function initSidebar() {
  const hamburgerBtn = document.getElementById('menu-icon');
  const userSidebar = document.getElementById('user-sidebar');
  const overlay = document.getElementById('overlay');

  if (!hamburgerBtn || !userSidebar || !overlay) return;

  // Toggle sidebar khi bấm nút hamburger
  hamburgerBtn.addEventListener('click', () => {
    const isActive = userSidebar.classList.contains('active');
    if (isActive) {
      userSidebar.classList.remove('active');
      overlay.classList.remove('active');
    } else {
      userSidebar.classList.add('active');
      overlay.classList.add('active');
    }
  });

  // Bấm overlay cũng đóng sidebar
  overlay.addEventListener('click', () => {
    userSidebar.classList.remove('active');
    overlay.classList.remove('active');
  });
}
