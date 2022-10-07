if(getParameterByName("search") !== null) {
  document.querySelector("#searchbar").value = getParameterByName("search");
}
function waitBeforeNavigate(ev) {
  ev.preventDefault();                    // prevent default anchor behavior
  const goTo = this.getAttribute("href"); // store anchor href
  this.children[1].classList.add("flip-vertical-right");
  setTimeout(function(){
    window.location = goTo;
  }, 800);                                 // time in ms
}; 

// Dynamically create our releases from data
// Shouldn't be that hard.
let _parent = document.getElementsByClassName("lower")[0];
function AddReleaseImages(_parent, _tba, _x) {
  // init variables
  let child, childA, childImg, childImgLogo;
  let i = _x;
  // create DIV parent
  child = document.createElement("DIV");
  child.classList.add("img");
  if (!_tba) {
    child.title = `${data[i].title} ${artists[data[i].artist].name} ${data[i].cat}`;
    // loop thru genres and formats and add to title string
    for (var j = 0; j < data[i].genres.length; j++) {
      child.title += ` ${data[i].genres[j]}`;
    }
    for (var k = 0; k < data[i].formats.length; k++) {
      child.title += ` ${data[i].formats[k]}`;
    }
    child.title = child.title.toUpperCase();
  }
  // create <a> element
  childA = document.createElement("A");
  childA.classList.add("wait");
  // NOTE: remove this html before website goes live
  (!_tba) ? childA.href = `release.html?cat=${i}` : 0; 
  // create first image (cover)
  childImg = document.createElement("IMG");
  childImg.classList.add("cov");
  imgID = (_tba) ? "none" : data[i].cat;
  childImg.src = `./images/NEW_COVERS/${imgID}.jpg`;
  // logo image
  childImgLogo = document.createElement("IMG");
  childImgLogo.classList.add("logo");
  childImgLogo.src = "./images/favicon1.png";
  if (_tba) { childImg.style.visibility = "hidden"; }
  // append images to a element
  childA.append(childImg, childImgLogo);
  // append a to div
  child.appendChild(childA);
  // append div to parent
  _parent.appendChild(child);
}

for (var i = data.length - 1; i >= 0; i--) {
  AddReleaseImages(_parent, false, i);
}
// Add placeholder releases afterwards
let rows = Math.ceil(data.length / 4);
let amtNeeded = (4 * rows) - data.length;
for (var j = 0; j < amtNeeded; j++) {
  AddReleaseImages(_parent, true, j);
}

document.querySelectorAll(".wait").forEach(EL => EL.addEventListener("click", waitBeforeNavigate));
RunSearch();