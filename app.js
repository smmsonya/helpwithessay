(function () {
  const root = document.querySelector("[data-accordion]");
  if (!root) return;

  const buttons = root.querySelectorAll(".acc");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const isOpen = btn.getAttribute("aria-expanded") === "true";
      buttons.forEach((b) => b.setAttribute("aria-expanded", "false"));
      btn.setAttribute("aria-expanded", String(!isOpen));
    });
  });
})();
