function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
const cat = getParameterByName("cat");
const album = data[cat];
console.log(album);
// place values in html
// album title, artist and type
document.getElementById("atitle").innerHTML = album.title;
document.getElementById("atype").innerHTML = album.type;
document.getElementById("aartist").innerHTML = artists[album.artist].name;
document.getElementById("aartist2").innerHTML = artists[album.artist].name;
// catalog number
document.getElementById("acat").innerHTML = album.cat;
// release date
document.getElementById("areldate").innerHTML = new Date(album.reldate * 1000).toLocaleDateString();
// GENRES & FORMATS
// these use for loops, cause they're arrays (obviously)
let gparent = document.getElementById("agenres");
let fparent = document.getElementById("aformats");
let child;
for (let i = 0; i < album.genres.length; i++) {
  child = document.createElement("A");
  child.innerHTML = album.genres[i];
  child.href = `releases.html?genre=${album.genres[i]}`;
  gparent.appendChild(child);
  if (i < album.genres.length - 1) gparent.innerHTML += ", ";
}
for (let j = 0; j < album.formats.length; j++) {
  child = document.createElement("A");
  child.innerHTML = album.formats[j];
  child.href = `shop.maulcat.us/product?cat=${album.cat}&format=${album.formats[j]}`;
  fparent.appendChild(child);
  if (j < album.genres.length - 1) fparent.innerHTML += ", ";
}
// document.getElementById("agenres").innerHTML = JSON.stringify(album.genres);
// document.getElementById("aformats").innerHTML = JSON.stringify(album.formats);
// album cover
document.getElementById("acover").src = `../images/NEW_COVERS/${album.cat}.jpg`;
// tracklist time.
let tparent = document.getElementsByClassName("table")[0];
let tr, td;
let totalTime = 0;
for (let k = 0; k < album.tracks.length; k++) {
  tr = document.createElement("TR");
  // track #
  td = document.createElement("TD");
  td.innerHTML = k + 1;
  tr.appendChild(td);
  // track name
  td = document.createElement("TD");
  td.innerHTML = album.tracks[k][0];
  tr.appendChild(td);
  // track length
  td = document.createElement("TD");
  time = album.tracks[k][1];
  totalTime += time;
  td.innerHTML = `${~~((time % 3600) / 60)}:${(~~time % 60 < 10 ? "0" : "")}${~~time % 60}`;
  tr.appendChild(td);
  tparent.appendChild(tr);
}
tr = document.createElement("TR");
td = document.createElement("TD");
td.innerHTML = "#";
tr.appendChild(td);
td = document.createElement("TH");
td.innerHTML = "total";
tr.appendChild(td);
td = document.createElement("TH");
td.innerHTML = `${~~((totalTime % 3600) / 60)}:${(~~totalTime % 60 < 10 ? "0" : "")}${~~totalTime % 60}`;
tr.appendChild(td);
tparent.appendChild(tr);
document.getElementById("description").innerHTML = album.description || "";