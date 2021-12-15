function waitBeforeNavigate(ev) {
  ev.preventDefault();                    // prevent default anchor behavior
  const goTo = this.getAttribute("href"); // store anchor href
  this.children[1].classList.add("flip-vertical-right");
  setTimeout(function(){
    window.location = goTo;
  }, 800);                                 // time in ms
}; 

document.querySelectorAll(".wait")
  .forEach(EL => EL.addEventListener("click", waitBeforeNavigate));