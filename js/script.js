const toggleButton = document.getElementsByClassName("toggle-button")[0];
const menuLista  = document.getElementsByClassName("menu-lista")[0];

toggleButton.addEventListener("click", () => {
menuLista.classList.toggle("active")
})


// ------------------------------------------------------

window.addEventListener("scroll",() => {
    let content = document.getElementById("carosello-bootstrap");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = innerHeight /1;
    if (contentPosition < screenPosition) {
        content.getElementsByClassName("")[0];
    } else {
        content.classList.remove("");
    }
    });



// -----------------------------------------------------