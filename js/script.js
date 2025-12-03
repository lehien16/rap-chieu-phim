async function includeHTML(id, file) {
  const element = document.getElementById(id);
  if (element) {
    const response = await fetch(file);
    if (!response.ok) {
      console.error(`Không thể tải ${file}: ${response.statusText}`);
      return;
    }
    const content = await response.text();
    element.innerHTML = content;
  } else {
    console.warn(`Không tìm thấy phần tử có id="${id}"`);
  }
}

import { initDropdown } from './modules/dropdown.js';
import { initUserSidebar } from './modules/user-sidebar.js';
import { loadUserInfo } from './modules/user-info.js';

document.addEventListener("DOMContentLoaded", async () => {

  try {
    await includeHTML("header", "header.html");
    initUserSidebar();
    await loadUserInfo();
    initDropdown();
  } catch (error) {
    console.error("Error initializing application:", error);
  }
});