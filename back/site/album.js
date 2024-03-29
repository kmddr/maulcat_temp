
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

let types = [
  "Album", "EP", "Single", "Compilation"
];

const albums = [
  ["Vertical Slopes", "Personal Note", 0, 2021, [
    [1,"open","2:06"],
    [2,"numberpad","2:08"],
    [3,"blank","2:18"],
    [4,"greyscale","1:24"],
    [5,"purchased","2:33"],
    [6,"pricing","0:12"]
  ], "Ambient, Tape Loops", "Digital"],

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

  ["Calcium Demo", "Metaverse", 0, 2022, [
    ["1","Waking Up to a New World", '3:28'],
    ["2","Metaverse Luxuries", '5:01'],
    ["3","Loading...", '3:41'],
    ["4","Glass Fountains", '3:58'],
    ["5","Bliss", '6:37'],
    ["6","[Internet Access Required]", '4:00'],
    ["7","Virtual Porn Device", '2:44'],
    ["8","Time for Me to Go", '5:11'],
    ["9","Post-Virtual", '3:05']
  ], "Vaporwave, Electronic", "Digital"],

  ["Nanoray", "Zapper", 0, 2022],

  ["Dashie", "The Complete Dashie Dariacore Collection", 3, 2022, [
    ["1","what the dog doin?","00:49"],
    ["2","2008","01:40"],
    ["3","ruined","01:17"],
    ["4","marble water","01:08"],
    ["5","what happened","01:11"],
    ["6","wish... right now...","01:09"],
    ["7","you think you know the answer","02:11"],
    ["8","sidetracked (remix)","03:12"],
    ["9","takes one to know one","02:15"],
    ["10","over the top","02:02"],
    ["11","flamingo","02:15"],
    ["12","my bad","02:09"],
    ["13","happy sorry","02:04"],
    ["14","hello to the world","02:02"],
    ["15","they were deleted you say?","02:10"],
    ["16","i did it back, now what...","02:20"]
  ], "Dariacore, Club", "Digital, CD, Cassette", true, {
    type: "cd+cass",
    price: "10.50 <small>each</small>",
    desc: `Includes a high-quality CD copy of "THE COMPLETE DASHIE DARIACORE COLLECTION" with black inkjet disc printing, housed in a 2-panel digipak with bright artwork on each panel.`,
    img: ["16_1.jpg", "16_2.jpg"],
    link: "https://dshie.bandcamp.com/album/the-complete-dashie-dariacore-collection"
  }, [
    ["Production","dashie"],
    ["Mixing/Mastering","dashie<br>Syd"],
    ["A&R","Syd"],
    ["Art","Neut (北京_93)<br>Syd"]
  ], [
    ["bc","https://dshie.bandcamp.com/album/the-complete-dashie-dariacore-collection"],
    ["sc","https://soundcloud.com/dshie"]
  ]],

  ["Vertigoaway", "Jungle Witch / Agaki Home Radio", 3, 2022, [ 
    ["","<strong>Jungle Witch</strong>",""],
    ["1","HEXING THE MOON","1:57"],
    ["2","AS THE TIDES RISE","2:35"],
    ["3","SEARCH FOR HER","2:41"],
    ["4","2ND GREAT FLOOD","2:28"],
    ["5","THE JUNGLE WITCH","3:38"],
    ["6","YOU CAN'T KILL A WITCH","2:37"],
    ["7","WATERWORLD","3:01"],
    ["8","THE UNHEXING","1:49"],
    ["","<strong>Agaki Home Radio</strong>",""],
    ["1","AM FM","1:06"],
    ["2","TALKING SHOW","1:06"],
    ["3","YOU'RE LISTENING TO AGAKI RADIO","1:44"],
    ["4","YIP!","1:06"],
    ["5","MISSED THE BUS!","1:28"],
    ["6","CODE-263","2:12"],
    ["7","MAGI ALERT","0:55"],
    ["8","IS THIS REAL?","1:17"],
    ["9","EVACUATE","1:33"],
    ["10","OH BOY","2:55"],
    ["11","SAFE AND COLD","1:50"]
  ], "HexD / Jungle", "Digital, Vinyl", true, {
    type: "vinyl",
    price: "32.00",
    desc: `A reprint of vertigoaway's "Jungle Witch" and "Agaki Home Radio" compiled into a fresh double album on deluxe, standard weight 45 RPM 2x12" vinyl.
    Housed in a 3mm premium gatefold jacket with front-to-back Obi-Strip. Includes exclusive cover art.`,
    img: ["17_1.jpg", "17_2.jpg"],
    link: "https://vertigoaway.bandcamp.com/album/jungle-witch-agaki-home-radio"
  }, [
    ["Production","Vertigoaway"],
    ["Mixing/Mastering","Vertigoaway"],
    ["A&R","Syd"],
    ["Art","Syd<br>Starpuke"]
  ]],

  ["Vale-Smith", "Rekindle", 0, 2022, [
    ['1','Wanna Fly','2:39'],
    ['2','One Conversation','2:32'],
    ['3','Rekindle','3:19'],
    ['4','Starlight, Beamin','3:07'],
    ['5','Downloading','1:40'],
    ['6','Glade Road','2:55'],
    ['7','Sucker Punch','2:30'],
    ['8','Perfect View','1:52'],
    ['9','Ice','3:52'],
    ['10','Kismet','2:18'],
    ['11','Just My Luck','4:04'],
    ['12','Lightning World','3:05'],
    ['13','Hula','1:34'],
    ['14','Busted','2:40'],
    ['15','Ensign','2:56']
  ], "Trap, IDM, Wonky", "Digital, Vinyl", true, {
    type: "vinyl",
    price: "32.00",
    desc: `Vale-Smith's "Rekindle" on deluxe, heavy weight 12" silver vinyl.
    Housed in a 3mm premium gatefold jacket.
    Includes exclusive cover art.`,
    img: ["18_1.jpg", "18_2.jpg"],
    link: "https://buffalostaple.bandcamp.com/album/rekindle"
  }, [
    ["Production","Vale-Smith"],
    ["Mixing","Vale-Smith"],
    ["Mastering","Vale-Smith<br>Reversed Reference"],
    ["A&R","Syd"]
  ]],

  ["Monte Hills", "Gotta Get", 2, 2022, [
    ['1','Gotta Get','3:03'],
    ['2','Save the World','3:00']
  ], "House, Electro", "Digital", false, {}, [
    ["Production","Monte Hills"],
    ["Mixing/Mastering","Monte Hills"],
    ["A&R","Syd"]
  ]]

];

const headers = {
  "vinyl": `12" Vinyl`,
  "7in": `7" Vinyl`,
  "cass": `Cassette`,
  "cd": "CD",
  "cd+cass": "CD & Cassette"
}

const c           = parseInt(urlParams.get("c"));
const aname       = document.querySelector('.aname');
const artist      = document.querySelector('.artist');
const cover       = document.querySelector('#cover');

const hasmerch    = albums[c][7];
let merch         = document.querySelector('.merch');
let merchGrid     = document.querySelector('.merch-grid');

if (hasmerch) {
  let merchdata   = albums[c][8];
  merch.style.display = "block";

  document.querySelector('.merch-header').innerHTML = headers[merchdata.type];
  document.querySelector('#buylink').innerHTML = `$${merchdata.price}`;
  document.querySelector('#buylink').href = merchdata.link;
  document.querySelector('.merchdesc').innerHTML = merchdata.desc;

  let images = document.getElementsByClassName("merchimg");
  images[0].src = merchdata.img[0];
  images[1].src = merchdata.img[1];
} else {
  merch.style.display = "none";
}

if (albums[c][9] !== undefined) {
  const credits = albums[c][9];
  const creditsHTML = document.querySelector('.credits');
  
  for (var l = 0; l < credits.length; l++) {
    let p = document.createElement("p");
    p.innerHTML = `${credits[l][0]}<br><strong>${credits[l][1]}</strong>`;
    creditsHTML.appendChild(p);
  }
}

const reltype     = document.querySelector('.reltype');
const year        = document.querySelector('.year');

const genres      = document.querySelector('.genres');
const formats     = document.querySelector('.formats');

const cat         = document.querySelector('.cat');

const left        = document.querySelector('.left');
const right       = document.querySelector('.right');

const prev        = document.querySelector('.prev');
const next        = document.querySelector('.next');

const table       = document.querySelector('.tracklist');

aname.innerHTML   = albums[c][1];
artist.innerHTML  = albums[c][0];

cover.src         = `${c}.png`;
cover.alt         = `${albums[c][1]} cover`;

reltype.innerHTML = types[albums[c][2]];
year.innerHTML    = albums[c][3];

genres.innerHTML  = albums[c][5];
formats.innerHTML = albums[c][6];

cat.innerHTML     = (c > 10) ? `0${c}` : `00${c}`;

if (c > 0) {
  prev.innerHTML    = albums[c-1][1];
  prev.href         = `album.html?c=${c-1}`;
} else {
  left.style.visibility = "hidden";
}

if (c < albums.length - 1) {
  next.innerHTML    = albums[c+1][1];
  next.href         = `album.html?c=${c+1}`;
} else {
  right.style.visibility = "hidden";
}

for (var i = 0; i < albums[c][4].length; i++) {
  let tr = document.createElement("tr");
  for (var j = 0; j < 3; j++) {
    let td = document.createElement("td");
    td.innerHTML = albums[c][4][i][j];
    tr.appendChild(td);
  }
  table.appendChild(tr);
}