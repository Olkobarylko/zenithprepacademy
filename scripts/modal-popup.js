document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("ctaModal");
  const modalTriggers = document.querySelectorAll(
    ".cta-main, .booking-link, .burger-menu__submenu-link, .burger-menu__private-link, .admissions-counselors-link",
  );
  const closeTriggers = modal?.querySelectorAll("[data-modal-close]");

  if (!modal || !modalTriggers.length) {
    return;
  }

  const openModal = () => {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.dataset.modalPrevOverflow =
      document.body.style.overflow || "";
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow =
      document.body.dataset.modalPrevOverflow || "";
    delete document.body.dataset.modalPrevOverflow;
  };

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      openModal();
    });
  });

  closeTriggers?.forEach((trigger) => {
    trigger.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
});
