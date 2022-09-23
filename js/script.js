const toggleButton = document.getElementsByClassName("toggle-button")[0];
const menuLista = document.getElementsByClassName("menu-lista")[0];

toggleButton.addEventListener("click", () => {
  menuLista.classList.toggle("active");
});

// const contact=document.querySelectorAll('#contanct');

// window.addEventListener('scroll', checkEvent);

// checkEvent();

// function checkEvent(){
//     const triggerbottom=console.log(window.innerHeight/5*4);

// boxes.forEach(section => {
//     const sectionTop= section.getBoundingClientRect().top;
//     if(sectionTop <triggerbottom ){
//       section.classList.add('show')   ;
//     } else{
//         section.classList..remove('show');
//     }

// });

// }
menuLista.classList.toggle("active");

// Create the observer

/*const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation-running");
      console.log(entry.target);
    }
  });
});

observer.observe(document.querySelector("#recipe-item"));*/
// ------------------------------------------------------

// window.addEventListener("scroll",() => {
//     let content = document.getElementById("carosello-bootstrap");
//     let contentPosition = content.getBoundingClientRect().top;
//     let screenPosition = innerHeight /1;
//     if (contentPosition < screenPosition) {
//       content.getElementsByClassName("")[0];
//       console.log()
//     }
//     else {
//         content.classList.remove("");
//     }
//     });

// window.addEventListener("scroll",() => {
//     let content = document.getElementById("about-us");
//     let contentPosition = content.getBoundingClientRect().top;
//     let screenPosition = innerHeight /30;
//     console.log()
//     if (contentPosition < screenPosition) {
//         content.getElementsByClassName("animation")[0];
//     }
//     else {
//         content.classList.remove("animation");
//     }
//     });
// console.log()

// -----------------------------------------------------

// const animationScroll = document.getElementById("carosello-bootstrap");

// window.addEventListener("scroll", () => {

//   const {scrollTop, clientHeight} = document.documentElement;
//   // console.log(scrollTop, clientHeight)
// // con questo console.log posso trovare la posizione dell'elemento nel documento

// const topElementToTopViewport = animationScroll.getBoundingClientRect().top;

// // console.log(topElementToTopViewport);
// // con questo console.log posso calcolare la distanza della top vh dall'inizio alla fine

// if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight *0.8){
//   animationScroll.getElementsById.getElementById("carosello.bootstrap").add("active")
// }

// ---------------------------------------------------------------------------------

const elementoDaAnimare = document.getElementById("carosello-bootstrap");
const animazione = elementoDaAnimare.offsetTop;
function animazioneScroll() {
  if (window.pageYOffset > animazione) {
    elementoDaAnimare.classList.add("animation");
  } else {
    elementoDaAnimare.classList.remove("animation");
  }
}

//animazione Luigi Crisci
window.onscroll = function () {
  animationOnScroll();
  animationOnScrollTwo();
  animationOnScrollThree();
  animationOnScrollFour();
  animationOnScrollFive();
  animationOnScrollSix();
  buttonScroll();
  chefPopUp();
  chefTextPopUp();
  greyTextPopUp();
};
function animationOnScroll() {
  let fadeInAnimation = document.getElementById("dish-one");
  let animationApplied = document.getElementById("chef-h2").offsetTop;
  if (window.pageYOffset >= animationApplied) {
    fadeInAnimation.classList.add("dish-1");
  }
}

function animationOnScrollTwo() {
  let fadeInAnimation = document.getElementById("dish-two");
  let animationApplied = document.getElementById("chef-h2").offsetTop;
  if (window.pageYOffset >= animationApplied) {
    fadeInAnimation.classList.add("dish-2");
  }
}

function animationOnScrollThree() {
  let fadeInAnimation = document.getElementById("dish-three");
  let animationApplied = document.getElementById("grey-text-p").offsetTop;
  if (window.pageYOffset >= animationApplied) {
    fadeInAnimation.classList.add("dish-1");
  }
}

function animationOnScrollFour() {
  let fadeInAnimation = document.getElementById("dish-four");
  let animationApplied = document.getElementById("grey-text-p").offsetTop;
  if (window.pageYOffset >= animationApplied) {
    fadeInAnimation.classList.add("dish-2");
  }
}

function animationOnScrollFive() {
  let fadeInAnimation = document.getElementById("dish-five");
  let animationApplied = document.getElementById("blog-images").offsetTop;
  if (window.pageYOffset >= animationApplied) {
    fadeInAnimation.classList.add("dish-1");
  }
}

function animationOnScrollSix() {
  let fadeInAnimation = document.getElementById("dish-six");
  let animationApplied = document.getElementById("blog-images").offsetTop;
  if (window.pageYOffset >= animationApplied) {
    fadeInAnimation.classList.add("dish-6");
  }
}

function buttonScroll() {
  let fadeInAnimation = document.getElementById("button-popup");
  let animationApplied = document.getElementById("blog-images").offsetTop;
  if (window.pageYOffset >= animationApplied) {
    fadeInAnimation.classList.add("button-pop");
  }
}

function chefPopUp() {
  let fadeInAnimation = document.getElementById("chef-image");
  let animationApplied =
    document.getElementById("contenitore-navbar").offsetTop;
  if (window.pageYOffset >= animationApplied) {
    fadeInAnimation.classList.add("chef-pop");
  }
}

function chefTextPopUp() {
  let fadeInAnimation = document.getElementById("chef-h2");
  let animationApplied =
    document.getElementById("contenitore-navbar").offsetTop;
  if (window.pageYOffset >= animationApplied) {
    fadeInAnimation.classList.add("chef-pop");
  }
}

function greyTextPopUp() {
  let fadeInAnimation = document.getElementById("grey-text-p");
  let animationApplied =
    document.getElementById("contenitore-navbar").offsetTop;
  if (window.pageYOffset >= animationApplied) {
    fadeInAnimation.classList.add("grey-text-fade");
  }
}

// Commento di prova
//fine animazione Luigi Crisci
