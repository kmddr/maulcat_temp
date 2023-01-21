
// Append albums from data (ooh boy. I've done this like 50 times before ffs)

const albums = [
  ["Vertical Slopes", "Personal Note", 0, 2021, "000"],
  ["Clyde is a Monster", "Love is Dead", 1, 2021, "001"],
  ["Wolf-Spawn", "Blurri / WOLF", 2, 2021, "002"],
  ["Twilight Windows", "Nightshade", 0, 2021, "003"],
  ["Coniumer", "Skirtblocks", 0, 2021, "004"], 
  ["Rybbon", "_trash", 0, 2021, "005"],
  ["HUMANJACKASS", "Virtual Pleasure", 0, 2021, "006"],
  ["RAWINTHEVOID", "MD (Manifest Destiny)", 0, 2021, "007"],
  ["Coniumer", "Prepositional Phrasing", 1, 2021, "008"],
  ["Sertulariae", "Luminous Viscera", 0, 2021, "009"],
  ["CapsAdmin", "CapsAdmin", 0, 2022, "010"],
  ["Coniumer", "Platinum / Sonic II", 2, 2022, "011"],
  ["Twilight Windows", "Remnants", 0, 2022, "012"],
  ["Love Crush Number One", "Requiem for an Automaton", 0, 2022, "013"],
  ["Calcium Demo", "Metaverse", 0, 2022, "014"],
  ["Nanoray", "Zapper", 0, 2022, "015"],
  ["Dashie", "The Complete Dashie Dariacore Collection", 3, 2022, "016"],
  ["Vertigoaway", "Jungle Witch / Agaki Home Radio", 3, 2022, "017"],
  ["Vale-Smith", "Rekindle", 0, 2022, "018"],
  ["Monte Hills", "Gotta Get", 2, 2022, "S 005"],
  ["Various Artists", "Maulcat Vol. 1", 3, 2022, "019"],
  ["Purity Filter", "Immortal Spirit", 0, 2022, "020"],
  ["super going", "a2*living", 0, 2022, "021"],
  ["Clean Slate", "Connection Lost", 0, 2022, "022"],
  ["Bagel Fanclub", "How Cars Drive", 1, 2022, "S 006"],
  ["Monte Hills", "Drum Machine / All The Other MCs (Remastered & Remixed)", 1, 2022, "023"],
  ["bagel fanclub", "how are your cars driving?", 0, 2023, "024"],
  ["Vale-Smith", "Coruscate+ (CDs)", 3, 2023, "024B CD"],
  ["Vale-Smith", "Pristine Drifting", 2, 2023, "S 007"],
  ["coniumer", "Acedia & Anomie", 0, 2023, "025"],
];

/* <div class="grid-unit">
<a class="goto" href="#">
  <div class="inner">
    <img src="logo.png" alt="Maulcat logo">
    <span>See more ⭢</span>
  </div>
</a>
<img src="15.png" alt="Rekindle cover">
<p><strong>Nanoray</strong><br>Zapper</p>
<p>MC015<br>2022</p>
</div>
</div> */

// Create function that does exactly what addGridItem does with JQuery
function addGridItemJQ(c,n,an,y,t,_c) {
  let i = $("<div>").addClass("grid-unit");
  let a = $("<a>").addClass("goto").attr("href",`album.html?c=${c}`);
  let _i = $("<div>").addClass("inner");

  let ig = $("<img>").attr("src","logo.png").attr("alt","Maulcat logo");
  let sp = $("<span>").html("See more ⭢");

  _i.append(ig).append(sp);
  a.append(_i);
  i.append(a);

  let _g = $("<img>").attr("src",`/img/cover_1/${c}.jpg`).attr("alt",`${n} cover`);
  i.append(_g);

  let p = $("<p>");
  p.html(`${n}<br><strong ${(an.length > 15) ? `class="condensed"` : ""}">${an}</strong>`);
  i.append(p);

  let _p = $("<p>");
  _p.html(`MC${_c}<br>${y}`);
  i.append(_p);

  $(".body-grid").append(i);
}

for (let i = albums.length-1; i > -1; i--) {
  addGridItemJQ(i,albums[i][0],albums[i][1],albums[i][3],null,albums[i][4]);
}