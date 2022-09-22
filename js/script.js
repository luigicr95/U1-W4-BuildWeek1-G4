const toggleButton = document.getElementsByClassName("toggle-button")[0];
const menuLista = document.getElementsByClassName("menu-lista")[0];

toggleButton.addEventListener("click", () => {
  menuLista.classList.toggle("active");
});

// Create the observer

/*const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("dish-animation-running");
      return;
    }
  });
});

observer.observe(document.querySelectorAll("#recipe-item"));*/
