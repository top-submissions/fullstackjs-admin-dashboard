// Optional JavaScript for interactive features
document.addEventListener("DOMContentLoaded", function () {
  // Add active state to navigation items
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navItems.forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Button hover effects
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Search functionality
  const searchInput = document.querySelector(".search-bar input");
  searchInput.addEventListener("input", function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {
      const title = card.querySelector("h4").textContent.toLowerCase();
      const content = card.querySelector("p").textContent.toLowerCase();

      if (title.includes(searchTerm) || content.includes(searchTerm)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});
