const toggleButton = document.getElementsByClassName("toggle-button")[0];
const menuLista = document.getElementsByClassName("menu-lista")[0];

toggleButton.addEventListener("click", () => {
menuLista.classList.toggle("active")
})


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

window.onscroll = function() {animazioneScroll()};


function animazioneScroll() { 

const elementoDaAnimare = document.getElementById("recipe-item");
const posizioneElemento = elementoDaAnimare.offsetTop;


if (window.pageYOffset >= posizioneElemento) {
  elementoDaAnimare.classList.add("animation")
} else {
  elementoDaAnimare.classList.remove("animation");
} 
}

function animazioneScroll() {
  
  const elementoDaAnimare = document.getElementById("about-us");
  const posizioneElemento = elementoDaAnimare.offsetTop;
  
  
   if (window.pageYOffset >= posizioneElemento) {
     elementoDaAnimare.classList.add("animation")
   } else {
     elementoDaAnimare.classList.remove("animation");
   }
}






