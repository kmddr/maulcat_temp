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
const album = JSON.parse(data)[cat];
console.log(album);
// place values in html
document.getElementById("atitle").innerHTML = album.title;
document.getElementById("atype").innerHTML = album.type;
document.getElementById("aartist").innerHTML = album.artist;
document.getElementById("acat").innerHTML = album.cat;
document.getElementById("areldate").innerHTML = new Date(album.reldate * 1000).toLocaleDateString();
document.getElementById("agenres").innerHTML = toString(album.genres);
document.getElementById("aformats").innerHTML = toString(album.formats);
document.getElementById("acover").src = `../images/NEW_COVERS/${album.cat}.jpg`;