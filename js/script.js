const toggleButton = document.getElementsByClassName("toggle-button");
const menuLista  = document.getElementByClassName("menu-lista");

toggleButton.addEventListener("click", () => {
menuLista.classList.toggle("active")
})