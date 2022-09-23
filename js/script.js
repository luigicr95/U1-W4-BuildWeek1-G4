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
