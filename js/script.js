const toggleButton = document.getElementsByClassName("toggle-button")[0];
const menuLista = document.getElementsByClassName("menu-lista")[0];

toggleButton.addEventListener("click", () => {
menuLista.classList.toggle("active")
})


// scroll animazione  ARAS ---------------------

const observer = new IntersectionObserver(entries => {
  
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
     
      entry.target.classList.add('anime-footer--up');
    }
  });
});
observer.observe(document.querySelector('#footer-1-anim'));

// ----------------------------------------

const observer1 = new IntersectionObserver(entries => {
  
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
     
      entry.target.classList.add('anime-footer--up');
    }
  });
});
observer1.observe(document.querySelector('#anime-hr'));

// ----------------------------------------
const observer2 = new IntersectionObserver(entries => {
  
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
     
      entry.target.classList.add('anime-footer--right');
    }
  });
});
observer2.observe(document.querySelector('#footer-2-anim'));

// ----------------------------------------
const observer3 = new IntersectionObserver(entries => {
  
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
     
      entry.target.classList.add('anime-footer--down');
    }
  });
});
observer3.observe(document.querySelector('#footer-3-anim'));

// ----------------------------------------
const observer4 = new IntersectionObserver(entries => {
  
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
     
      entry.target.classList.add('anime-footer--down','delay06');
    }
  });
});
observer4.observe(document.querySelector('#footer-4-anim'));

// ----------------------------------------
const observer5 = new IntersectionObserver(entries => {
  
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
     
      entry.target.classList.add('anime-footer--down','delay09');
    }
  });
});
observer5.observe(document.querySelector('#footer-5-anim'));
// ----------------------------------------
const observer6 = new IntersectionObserver(entries => {
  
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
     
      entry.target.classList.add('form-btn');
    }
  });
});
observer6.observe(document.querySelector('#form-anime'));
// ----------------------------------------
const observer7 = new IntersectionObserver(entries => {
  
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
     
      entry.target.classList.add('anime-footer--right');
    }
  });
});
observer7.observe(document.querySelector('#box-contanct'));
// ----------------------------------------
const observer8 = new IntersectionObserver(entries => {
  
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
     
      entry.target.classList.add('anime-footer--right','delay08');
    }
  });
});
observer8.observe(document.querySelector('#latest-news'));
// ----------------------------------------
const observer9 = new IntersectionObserver(entries => {
  
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
     
      entry.target.classList.add('anime-footer--right','delay13');
    }
  });
});
observer9.observe(document.querySelector('#photo-and-social'));











// fine scroll animazione  ARAS ---------------------


// --------------------------------------

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

// const elementoDaAnimare = document.getElementById("carosello-bootstrap");
//  const animazione = elementoDaAnimare.offsetTop;

// function AnimazioneScroll() {
//   if (window.pageYOffset >= animazione) {
//     elementoDaAnimare.classList.add("animation")
//   } else {
//     elementoDaAnimare.classList.remove("animation");
//   }
// }
// console.log(AnimazioneScroll())



