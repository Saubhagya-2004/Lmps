document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const openIcon = document.getElementById("menu-icon-open");
  const closeIcon = document.getElementById("menu-icon-close");

  // Toggle mobile menu
  menuToggle.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.contains("hidden");

    if (isHidden) {
      mobileMenu.classList.remove("hidden");
      mobileMenu.classList.add("flex");
    } else {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
    }

    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });

  // Close on mobile link click
  document.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");

      openIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    });
  });
});
