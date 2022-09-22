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
});

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
