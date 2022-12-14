const toggleButton = document.getElementsByClassName("toggle-button")[0];
const menuLista  = document.getElementsByClassName("menu-lista")[0];

toggleButton.addEventListener("click", () => {
menuLista.classList.toggle("active")
})

// scroll animazione  ARAS ---------------------

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("anime-footer--up");
    }
  });
});
observer.observe(document.querySelector("#footer-1-anim"));

// ----------------------------------------

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("anime-footer--up");
    }
  });
});
observer1.observe(document.querySelector("#anime-hr"));

// ----------------------------------------
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("anime-footer--right");
    }
  });
});
observer2.observe(document.querySelector("#footer-2-anim"));

// ----------------------------------------
const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("anime-footer--down");
    }
  });
});
observer3.observe(document.querySelector("#footer-3-anim"));
observer.observe(document.querySelector("#recipe-item"));

// ----------------------------------------
const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("anime-footer--down", "delay06");
    }
  });
});
observer4.observe(document.querySelector("#footer-4-anim"));

// ----------------------------------------
const observer5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("anime-footer--down", "delay09");
    }
  });
});
observer5.observe(document.querySelector("#footer-5-anim"));
// ----------------------------------------
const observer6 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("form-btn");
    }
  });
});
observer6.observe(document.querySelector("#form-anime"));
// ----------------------------------------
const observer7 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("anime-footer--right");
    }
  });
});
observer7.observe(document.querySelector("#box-contanct"));
// ----------------------------------------
const observer8 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("anime-footer--right", "delay08");
    }
  });
});
observer8.observe(document.querySelector("#latest-news"));
// ----------------------------------------
const observer9 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("anime-footer--right", "delay13");
    }
  });
});
observer9.observe(document.querySelector("#photo-and-social"));

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
  animazioneScrollCarosello();
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


// -----------------------------------------------------------------------------

//  js luigi 1

 
 function animazioneScrollCarosello() {
   const elementoDaAnimare = document.getElementById("carosello-bootstrap");
   const posizioneElemento = elementoDaAnimare.offsetTop;

   if (window.pageYOffset >= posizioneElemento) {
     elementoDaAnimare.classList.add("animation");
   } else {
     elementoDaAnimare.classList.remove("animation");
   }
 }

// ---------------------------------------------------------------------------

//JS Antonino
const observer10 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("menu-item-1");
    }
  });
});
observer10.observe(document.querySelector("#anime-item-1"));
 
//

const observer11 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("menu-item-2");
    }
  });
});
observer11.observe(document.querySelector("#anime-item-2"));

//

const observer12 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("menu-item-3");
    }
  });
});
observer12.observe(document.querySelector("#anime-item-3"));

//

const observer13 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("menu-item-4");
    }
  });
});
observer13.observe(document.querySelector("#anime-item-4"));

//

const observer14 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("menu-item-5");
    }
  });
});
observer14.observe(document.querySelector("#anime-item-5"));

//

const observer15 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("menu-item-6");
    }
  });
});
observer15.observe(document.querySelector("#anime-item-6"));

//

const observer16 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("title-menu2");
    }
  });
});
observer16.observe(document.querySelector("#anime-title-menu2"));

// 

const observer17 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("button");
    }
  });
});
observer17.observe(document.querySelector("#anime-button"));


