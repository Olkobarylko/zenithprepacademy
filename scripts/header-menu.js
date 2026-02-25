const burgerButton = document.querySelector(".header__burger");
const burgerMenu = document.getElementById("burgerMenu");

if (burgerButton && burgerMenu) {
  const closeTriggers = burgerMenu.querySelectorAll("[data-menu-close]");
  const dropdownToggles = burgerMenu.querySelectorAll("[data-dropdown-toggle]");

  const openMenu = () => {
    document.body.classList.add("menu-open");
    burgerMenu.setAttribute("aria-hidden", "false");
    burgerButton.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    document.body.classList.remove("menu-open");
    burgerMenu.setAttribute("aria-hidden", "true");
    burgerButton.setAttribute("aria-expanded", "false");
  };

  burgerButton.setAttribute("aria-controls", "burgerMenu");
  burgerButton.setAttribute("aria-expanded", "false");

  burgerButton.addEventListener("click", () => {
    if (document.body.classList.contains("menu-open")) {
      closeMenu();
      return;
    }

    openMenu();
  });

  closeTriggers.forEach((trigger) => {
    trigger.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  dropdownToggles.forEach((toggleButton) => {
    toggleButton.addEventListener("click", () => {
      const item = toggleButton.closest(".burger-menu__item");
      const dropdownContent = item?.querySelector("[data-dropdown-content]");

      if (!item || !dropdownContent) {
        return;
      }

      const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";

      toggleButton.setAttribute("aria-expanded", String(!isExpanded));
      item.classList.toggle("burger-menu__item--expanded", !isExpanded);
      dropdownContent.classList.toggle("is-open", !isExpanded);
    });
  });
}
