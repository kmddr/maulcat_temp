
function update() {

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

  function tracklist() {
    let string = document.getElementById("inputbox").value;
    if (string == "") return;
    let masterString = "";
    string = string.match(/.*\n.*\n/g);
    for(let i = 0; i < string.length; i++) {
      let name = /(?!\n).*(?= )/g.exec(string[i]);
      let trackMins = Number(string[i].match(/(?!\n)[0-9]+(?=:[0-9]*)/g));
      let trackSecs = Number(string[i].match(/(?![0-9]+:)[0-9]+(?=\n)/g));
      console.log(name, trackMins, trackSecs);
      masterString += `["${name}", ${(trackMins * 60) + trackSecs}],`;
      if (i !== string.length - 1) { masterString += "\n    " };
    }
    return masterString;
  }
  
  let masterString = `{\n  "title": "${document.getElementById("albumTitle").value}",\n  "artist": ${document.getElementById("artistID").value},\n  "type": "${document.getElementById("reltype").value}",\n  "cat": "${document.getElementById("catnum").value}",\n  "reldate": ${document.getElementById("reldate").valueAsNumber},\n  "genres": [${g("genres")}],\n  "formats": ${g("formats")},\n  "tracks": [\n    ${tracklist()}\n  ],\n  "description": "${document.getElementById("descbox").value}",\n},`;
  document.getElementById("codebox").innerHTML = masterString;
}
function copy() {
  return navigator.clipboard.writeText(document.getElementById("codebox").innerHTML);
}