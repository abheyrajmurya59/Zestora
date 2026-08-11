// Zestora — small interactions, nothing fancier than the page needs

document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("siteNav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  
  const filters = document.querySelectorAll(".filter");
  const dishes = document.querySelectorAll(".dish");

  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      filters.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.dataset.filter;

      dishes.forEach((dish) => {
        const match = category === "all" || dish.dataset.category === category;
        dish.classList.toggle("hide", !match);
      });
    });
  });

  
  const form = document.getElementById("bookingForm");
  const message = document.getElementById("bookingMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        message.textContent = "A couple of fields still need filling in.";
        message.style.color = "#7c2c22";
        return;
      }

      const name = form.querySelector('input[name="name"]').value.trim();
      const time = form.querySelector('select[name="time"]').value;

      message.textContent = `Thanks, ${name.split(" ")[0]} — we've noted ${time}. A confirmation email is on its way.`;
      message.style.color = "#33422c";
      form.reset();
    });
  }

});