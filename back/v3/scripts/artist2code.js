
let box = document.getElementById("aliasbox");
box.style.display = "none";

function toggleAliasbox() {
  if (box.style.display == "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
}

function aupdate() {

  function g(x) {
    let string = document.getElementById(x).value;
    if (string == "") return;
    string = string.split(",");
    for (var i = 0; i < string.length; i++) {
      masterString += `"${string[i]}"`;
      if (i !== string.length - 1) { masterString += ", " };
    }
    return masterString;
  }

  function aliases() {
    return "";
  }

  masterString = `{\n  "name": "${document.getElementById("artistName").value}",\n  ${aliases()},\n  "genres": [${g("genres")}],\n  "links": [${g("links")}],\n  "description": "${document.getElementById("adescbox").value}"\n}`;
  document.getElementById("aacodebox").innerHTML = masterString;
}
function acopy() {
  return navigator.clipboard.writeText(document.getElementById("aacodebox").innerHTML);
}