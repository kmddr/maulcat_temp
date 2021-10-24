const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

function OpenMobileMenu() {
  var x = document.getElementsByClassName("mobile-links")[0];
  var y = document.getElementsByClassName("hamburger")[0];
  if (x.style.display === "block") {
    x.classList.remove("mlin");
    x.classList.add("mlout");
    setTimeout(function(){
      x.style.display = "none";
      x.classList.remove("mlout");
    },300);
    y.classList.remove("is-active");
  } else {
    x.classList.add("mlin");
    x.style.display = "block";
    y.classList.add("is-active");
  }
}
window.onresize = function () {
  var x = document.getElementsByClassName("mobile-links")[0];
  if (vw > 1147 && x.style.display === "block") {
    x.style.display = "none";
  }
}