(function () {

  const buttons = document.querySelectorAll(".acc");

  buttons.forEach((btn) => {

    btn.addEventListener("click", () => {

      const panel = btn.nextElementSibling;
      const isOpen = btn.getAttribute("aria-expanded") === "true";

      buttons.forEach((b) => {
        b.setAttribute("aria-expanded", "false");
        const p = b.nextElementSibling;
        if (p) p.style.display = "none";
      });

      if (!isOpen) {
        btn.setAttribute("aria-expanded", "true");
        if (panel) panel.style.display = "block";
      }

    });

  });

})();
