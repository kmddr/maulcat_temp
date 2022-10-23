
// Append albums from data (ooh boy. I've done this like 50 times before ffs)

const albums = [
  ["Vertical Slopes", "Personal Note", 0, 2021],
  ["Clyde is a Monster", "Love is Dead", 1, 2021],
  ["Wolf-Spawn", "Blurri / WOLF", 2, 2021],
  ["Twilight Windows", "Nightshade", 0, 2021],
  ["Coniumer", "Skirtblocks", 0, 2021],
  ["Rybbon", "_trash", 0, 2021],
  ["HUMANJACKASS", "Virtual Pleasure", 0, 2021],
  ["RAWINTHEVOID", "MD (Manifest Destiny)", 0, 2021],
  ["Coniumer", "Prepositional Phrasing", 1, 2021],
  ["Sertulariae", "Luminous Viscera", 0, 2021],
  ["CapsAdmin", "CapsAdmin", 0, 2022],
  ["Coniumer", "Platinum / Sonic II", 2, 2022],
  ["Twilight Windows", "Remnants", 0, 2022],
  ["Love Crush Number One", "Requiem for an Automaton", 0, 2022],
  ["Calcium Demo", "Metaverse", 0, 2022],
  ["Nanoray", "Zapper", 0, 2022],
  ["Dashie", "The Complete Dashie Dariacore Collection", 3, 2022],
  ["Vertigoaway", "Jungle Witch / Agaki Home Radio", 3, 2022],
  ["Vale-Smith", "Rekindle", 0, 2022],
  ["Monte Hills", "Gotta Get", 2, 2022, "S 005"],
  ["Various Artists", "Maulcat Vol. 1", 3, 2022],
  ["Purity Filter", "Immortal Spirit", 0, 2022],
  ["super going", "a2*living", 0, 2022],
  ["Clean Slate", "Connection Lost", 0, 2022]
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

const grid = document.getElementsByClassName("grid")[1];

function addGridItem(c,n,an,y,t) {
  let i = document.createElement("div");
  i.classList.add("grid-unit");

  let a = document.createElement("a");
  a.classList.add("goto");
  a.href = `album.html?c=${c}`;

  let _i = document.createElement("div");
  _i.classList.add("inner");

  let ig = document.createElement("img");
  ig.src = "logo.png";
  ig.alt = "Maulcat logo";
  _i.appendChild(ig);

  let sp = document.createElement("span");
  sp.innerHTML = "See more ⭢";

  _i.appendChild(sp);
  a.appendChild(_i);
  i.appendChild(a);

  let _g = document.createElement("img");
  
  // If image does not exist, use placeholder

  _g.src = `/img/cover_1/${c}.jpg`;
  _g.alt = `${n} cover`;
  i.appendChild(_g);

  let p = document.createElement("p");
  if (an.length > 15) {
    p.innerHTML = `${n}<br><strong class="condensed">${an}</strong>`;
  } else {
    p.innerHTML = `${n}<br><strong>${an}</strong>`;
  }
  i.appendChild(p);

  let _p = document.createElement("p");
  if (c == 19) {
    _p.innerHTML = "MCS 005<br>2022";
  } else {
    buffer = (c < 10) ? "00" : "0";
    _p.innerHTML = `MC${buffer}${c}<br>${y}`;
  }
  i.appendChild(_p);

  grid.appendChild(i);
}

for (let i = albums.length-1; i > -1; i--) {
  addGridItem(i,albums[i][0],albums[i][1],albums[i][3]);
}