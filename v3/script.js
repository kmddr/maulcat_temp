(pagemode == "dark") ? document.getElementById("toggle").innerHTML = "☀️" : 0;

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
function TogglePageMode() {
  console.log("Changing page mode.");
  document.body.style.transition = '0.7s';
  setTimeout(function(){
    document.body.style.transition = '0s';
  },700);
  if (pagemode == "light") {
    document.querySelector(':root').style.setProperty('--CL_WHITE', '#000');
    document.querySelector(':root').style.setProperty('--CL_BLACK', '#fff');
    document.querySelector(':root').style.setProperty('--BG_OPACITY', 1);
    document.cookie = "dark=true; SameSite=None; Secure";
    document.getElementById("toggle").innerHTML = "☀️";
  } else {
    document.querySelector(':root').style.setProperty('--CL_WHITE', '#fff');
    document.querySelector(':root').style.setProperty('--CL_BLACK', '#000');
    document.querySelector(':root').style.setProperty('--BG_OPACITY', 0.2);
    document.cookie = "dark=false; SameSite=None; Secure";
    document.getElementById("toggle").innerHTML = "🌙";
  }
  pagemode = pagemode == "light" ? "dark" : "light";
}