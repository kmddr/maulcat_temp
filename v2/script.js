var header = document.getElementById("header");
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
window.onscroll = function() {
  (window.pageYOffset > header.offsetTop) ? header.classList.add("sticky") : header.classList.remove("sticky");
};
function OpenMobileMenu() {
  var x = document.getElementsByClassName("mobile-links")[0];
  var y = document.getElementsByClassName("hamburger")[0];
  if (x.style.display === "block") {
    x.classList.remove("fadein");
    x.classList.add("fadeout");
    setTimeout(function(){
      x.style.display = "none";
      x.classList.remove("fadeout");
    },300);
    y.classList.remove("is-active");
  } else {
    x.classList.add("fadein");
    x.style.display = "block";
    y.classList.add("is-active");
  }
}
function CheckForMobileMenu() {
  var x = document.getElementsByClassName("mobile-links")[0];
  if (vw > 1147 && x.style.display === "block") {
    x.style.display = "none";
  }
  console.log("running")
}
window.onresize = CheckForMobileMenu;