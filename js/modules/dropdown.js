export function initDropdown() {
  const dropBtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  const userDropdownBtn = document.querySelector("#header-dropdown");
  const userDropdownMenu = document.querySelector("#header-dropdown-menu");

  dropBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    dropdownContent.classList.toggle("show");
  });

  dropdownContent?.querySelectorAll("a")?.forEach(link => {
    link.addEventListener("click", () => {
      dropdownContent.classList.remove("show");
    });
  });

  userDropdownBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    userDropdownMenu.classList.toggle("show");
  });

  userDropdownMenu?.querySelectorAll("a")?.forEach(link => {
    link.addEventListener("click", () => {
      userDropdownMenu.classList.remove("show");
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      dropdownContent?.classList.remove("show");
    }
    if (!e.target.closest("#header-user")) {
      userDropdownMenu?.classList.remove("show");
    }
  });
}
