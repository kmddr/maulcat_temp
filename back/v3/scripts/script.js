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
    document.cookie = "dark=true; path=/";
    document.getElementById("toggle").innerHTML = "☀️";
  } else {
    document.querySelector(':root').style.setProperty('--CL_WHITE', '#fff');
    document.querySelector(':root').style.setProperty('--CL_BLACK', '#000');
    document.querySelector(':root').style.setProperty('--BG_OPACITY', 0.2);
    document.cookie = "dark=false; path=/";
    document.getElementById("toggle").innerHTML = "🌙";
  }
  pagemode = pagemode == "light" ? "dark" : "light";
}
function RunSearch() {
  let query = document.querySelector("#searchbar").value.toUpperCase();
  var children = document.querySelector(".lower").children;
  for (var i = 1; i < children.length; i++) {
    children[i].style.display = "inline-block";
    if (query == "CHEESEBURGER") {
      window.location.href = "https://en.wikipedia.org/wiki/Cheeseburger";
    }
    if (children[i].title.indexOf(query) == -1) {
      children[i].style.display = "none";
    }
  }
}
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}