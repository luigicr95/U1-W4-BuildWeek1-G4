const toggleButton = document.getElementsByClassName("toggle-button")[0];
const menuLista  = document.getElementsByClassName("menu-lista")[0];

toggleButton.addEventListener("click", () => {
menuLista.classList.toggle("active")
})