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
    console.log()
    if (contentPosition < screenPosition) {
        content.getElementsByClassName("animation")[0];
    }  
    else {
        content.classList.remove("animation");
    }
    });


window.addEventListener("scroll",() => {
    let content = document.getElementById("about-us");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = innerHeight /3;
    console.log()
    if (contentPosition < screenPosition) {
        content.getElementsByClassName("animation")[0];
    }  
    else {
        content.classList.remove("animation");
    }
    });
console.log()


// -----------------------------------------------------