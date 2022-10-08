
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

  ["Clyde is a Monster", "Love is Dead", 1, 2021, [
    [1,"She Doesn't Love Me Anymore","2:43"],
    [2,"Cold Friends","2:06"],
    [3,"Copycat","3:25"],
    [4,"Sleep","3:01"],
  ], "Singer/Songwriter", "Digital"],

  ["Wolf-Spawn", "Blurri / WOLF", 2, 2021, [
    [1,"Blurri","2:12"],
    [2,"W.O.L.F.","2:20"]
  ], "Rock, Experimental, Electronic", "Digital"],

  ["Twilight Windows", "Nightshade", 0, 2021, [
    ["1","ナイトシェイド","09:02"],
    ["2","花壇","08:20"],
    ["3","目を見て","06:50"],
    ["4","若返らせる","06:45"],
    ["5","無限の鏡の回廊","06:12"],
    ["6","日焼け","05:19"],
  ], "Ambient, Deathdream", "Digital, Cassette", true, {
    type: "cass",
    price: "9.50",
    desc: `Includes a high-bias neon-pink cassette copy of "nightshade" and a professionally printed J-card.`,
    img: ["3_1.jpg", "3_2.jpg"],
    link: "https://twilightwindows.bandcamp.com/album/nightshade-2"
  }, [
    ["Production","Twilight Windows<br>/ ナイトシェイド"],
    ["Mixing/Mastering","Syd"],
    ["A&R","Syd"],
    ["Art","Twilight Windows<br>/ ナイトシェイド<br>Syd"]
  ], `街が壊れている、残っているすべては、私たちがかつて持っていた夢であり、風と一緒に行き、致命的な花によって毒殺されました。これはナイトシェイドです。 The city is broken, everything that remains is a dream we once had, going with the wind and poisoned by deadly flowers. This is a night shade.<br><br>"Nightshade", a self titled release from Twilight Windows, is a full-length ambient composition built with dark, brooding atmospheres. With both unsettling and comforting chord progressions and melodies drowned in tape hiss and rain, nightshade is an exceptional ambient/vapor-adjacent album.`],

  ["Coniumer", "Skirtblocks", 0, 2021, [
    ["1","eeree","05:23"],
    ["2","skirtblocks","05:24"],
    ["3","wavvves~","03:48"],
    ["4","mkin love","04:08"],
    ["5","ghos","02:47"],
    ["6","ICEDOUT","02:49"],
    ["7","empress of light [rmx]","03:54"],
    ["8","7thell","02:09"],
    ["9","*k1lls u* >:3","02:11"],
    ["10","CAT","03:17"],
    ["11","pmmp <small>(bonus)</small>","03:41"],
    ["12","hatch <small>(bonus)</small>","01:50"],
  ], "Electronic, Breaks", "Digital, Cassette", true, {
    type: "cass",
    price: "9.50",
    desc: `Includes a normal-bias transparent cassette copy of "skirtblocks" and a professionally printed J-card. Includes two bonus tracks.`,
    img: ["4_1.jpg", "4_2.jpg"],
    link: "https://coniumer.bandcamp.com/album/skirtblocks-2"
  }, [
    ["Production","coniumer"],
    ["Mixing/Mastering","coniumer"],
    ["A&R","Syd"],
    ["Art","coniumer<br>Syd"]  
  ], `The coniumer debut. Download includes two bonus tracks.`],

  ["Rybbon", "_trash", 0, 2021],

  ["HUMANJACKASS", "Virtual Pleasure", 0, 2021],

  ["RAWINTHEVOID", "MD (Manifest Destiny)", 0, 2021, [
    ["1","IWC (It Was Coming)","01:32"],
    ["2","STW (Spread the Word)","04:29"],
    ["3","IB (Impossible Boycott)","03:12"],
    ["4","TSA (The Slacktivist's Anthem)","01:51"],
    ["5","NMT (Nightmare Tokens)","02:01"],
    ["6","MD (Manifest Destiny)","00:40"],
    ["7","IWSTBLT (It Wasn't Supposed To Be Like This)","00:37"],
    ["8","YAAT (You Are A Threat)","04:20"],
    ["9","TW (Tidal Wave)","05:24"],
    ["10","SM (Stubborn Morons)","02:21"],
    ["11","ID (In Darkness)","02:38"],
    ["12","ST (Something Terrible)","01:05"],
    ["13","TEHGU (The Environmentalists Have Given Up)","02:35"],
    ["14","NIL (Nothing In Love)","02:58"],
    ["15","TPNS (The Party Never Stops / The Pandemic Never Stops)","08:09"],
    ["16","GIMWTO (Gaslighting In More Ways Than One)","04:18"],
    ["17","ATWD (As The World Dies)","08:44"],
  ], "Vaporwave, Plunderphonics, Sound Collage", "Digital, Cassette", true, {
    type: "cass",
    price: "9.50",
    desc: `Includes a high-bias cassette copy of "MD (Manifest Destiny)", and a professionally printed J-card.`,
    img: ["7_1.jpg", "7_2.jpg"],
    link: "https://music.maulcat.us/album/md-manifest-destiny"
  }, [
    ["Production","RAWINTHEVOID"],
    ["Mixing/Mastering","RAWINTHEVOID"],
    ["A&R","Syd"],
    ["Art","RAWINTHEVOID<br>Syd"]
  ]],

  ["Coniumer", "Prepositional Phrasing", 1, 2021],

  ["Sertulariae", "Luminous Viscera", 0, 2021],

  ["CapsAdmin", "CapsAdmin", 0, 2022],

  ["Coniumer", "Platinum / Sonic II", 2, 2022, [
    ["1","Platinum","4:10"],
    ["2","Sonic II","3:10"]
  ], "Breaks, VGM", "Digital", false, {}, [
    ["Production","coniumer"],
    ["Mixing/Mastering","coniumer"],
    ["A&R","Syd"],
    ["Art","coniumer"]
  ]],

  ["Twilight Windows", "Remnants", 0, 2022, [
    ["1","eyes shut","3:21"],
    ["2","mournful","11:03"],
    ["3","down deep","5:12"],
    ["4","wretched","4:06"],
    ["5","saturnine","9:42"],
    ["6","stockholm","4:10"],
    ["7","godforsaken","10:43"],
  ], "Dark Ambient, Deathdream", "Digital, Cassette", true, {
    type: "cass",
    price: "9.50",
    desc: `Includes a white cassette copy of "remnants" including high-quality adhesive labels, and a professionally printed J-card. Housed in a "frosted ice" Norelco case.`,
    img: ["12_1.jpg", "12_2.jpg"],
    link: "https://twilightwindows.bandcamp.com/album/remnants-2"
  }, [
    ["Production","Twilight Windows"],
    ["Mixing/Mastering","Twilight Windows"],
    ["A&R","Syd"],
    ["Art","Twilight Windows<br>Syd"]
  ]],

  ["Love Crush Number One", "Requiem for an Automaton", 0, 2022, [
    ["1","THE_AGE_OF_MECHANOPHOBIA","2:40"],
    ["2","AWAKENING [FROM_THE_ABYSS]","3:33"],
    ["3","WALTZ_OF_THE_WASTELAND","3:06"],
    ["4","DATA_SOURCING","2:40"],
    ["5","CLUB_RAYNE_XX","5:36"],
    ["6","CYBERNETIC_INCANTATION","3:12"],
    ["7","MY_MECHANICAL_HEART","3:04"],
    ["8","PROMISE_TO_HOLD_ME_FOREVER [?]","3:04"],
    ["9","THE_ATLUS [MASTER_OF_THE_MAINFRAME]","5:39"],
    ["10","REQUIEM_FOR_AN_AUTOMATON","6:24"],
  ], "Sequencer & Tracker, Big Beat", "Digital, Cassette", true, {
    type: "cass",
    price: "9.50",
    desc: `Includes a black cassette copy of "Requiem for an Automaton" including high-quality adhesive labels, and a professionally printed J-card. Housed in a purple tint Norelco case.`,
    img: ["13_1.jpg"],
    link: "https://lovecrushnumberone.bandcamp.com/album/requiem-for-an-automaton-2"
  }, [
    ["Production","Love Crush Number One"],
    ["Mixing/Mastering", "Love Crush Number One"],
    ["A&R","Syd"],
    ["Art","Love Crush Number One<br>Syd"]
  ]],

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
  ], "Vaporwave, Electronic", "Digital", false, {}, [
    ["Production","Calcium Demo"],
    ["Mixing/Mastering","Calcium Demo<br>Syd"],
    ["A&R","Syd"],
    ["Art","Calcium Demo<br>Syd"]
  ]],

  ["Nanoray", "Zapper", 0, 2022, [
    ["1","Transform","2:45"],
    ["2","NEKOMATA'97","4:01"],
    ["3","M00d Medley","2:54"],
    ["4","SALMON CANNON DELUXE","3:45"],
    ["5","Tempest","3:04"],
    ["6","Aleph-Null","3:57"],
    ["7","Hellrunner [カミrestore","3:57"],
    ["8","Sequential Dreambox","7:13"],
    ["9","Awake","2:12"],
    ["10","KAMA5 <small>(Vinyl Exclusive)</small>","3:14"],
    ["11","12Exus <small>(Vinyl Exclusive)</small>","3:09"],
  ], "Hardcore Breaks, Drum and Bass", "Digital, Vinyl", true, {
    type: "vinyl",
    price: `28.00 <small class="red">(Sold Out)</small>`,
    desc: `Nanoray's "ZAPPER" on deluxe, standard weight 12" hot pink vinyl.
    Housed in a 3mm premium gloss jacket with front-to-back Obi-Strip. Each record numbered and signed by Nanoray. Includes two vinyl exclusive tracks and exclusive cover art.`,
    img: ["15_1.jpg", "15_2.jpg"],
    link: "https://music.maulcat.us/album/zapper"
  }, [
    ["Production","Nanoray"],
    ["Mixing/Mastering","Nanoray<br>Reversed Reference"],
    ["A&R","Syd"],
    ["Art","Nanoray<br>Syd"]
  ]],

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
  ], `
  "In many ways this album is in my mind, a sequel to Coruscate. That album was about freely relishing in the limitless joy of creativity, Rekindle has me fighting my way back to that place. Rekindling the flame.<br><br>
I felt inspired by concerts and how conquerable everything feels when I leave one. There’s been a lot of times this year where I’ve felt defeated and unresolved, whether it’s my job situation, connecting with family and friends, communicating with myself and my creative side. A lot of my time in 2022 has been spent questioning and in some cases regretting, I think putting this record together has allowed me to reach back into my excited naivety and childlike innocence with confidence. This is the music of me reconnecting with nature, people, myself, music.. rediscovering my agency and enjoying it."<br><br>
  Vale-Smith has a lot to say about "Rekindle"; yet even then the music speaks a million more words than the artist ever could.`],

  ["Monte Hills", "Gotta Get", 2, 2022, [
    ['1','Gotta Get','3:03'],
    ['2','Save the World','3:00']
  ], "House, Electro", "Digital", false, {}, [
    ["Production","Monte Hills"],
    ["Mixing/Mastering","Monte Hills"],
    ["A&R","Syd"]
  ]],

  ["Various Artists", "Maulcat Vol. 1", 3, 2022, [
    ["","<strong>Disc 1</strong>",""],
    ["1.1","<strong>spencer hodo</strong> - vertical horizon","07:01"],
    ["1.2","<strong>butterfly boy</strong> - a case of perfectionism","02:07"],
    ["1.3","<strong>Melan Choir</strong> - I'm Here Too","05:46"],
    ["1.4","<strong>T.R.Ash</strong> - Hugs and Kisses","02:31"],
    ["1.5","<strong>butterfly boy</strong> - put the needle on the record","03:57"],
    ["1.6","<strong>Monte Hills</strong> - Gotta Get","03:02"],
    ["1.7","<strong>CapsAdmin</strong> - queen","02:21"],
    ["1.8","<strong>TRUMAN!</strong> - Renaシオン","03:44"],
    ["1.9","<strong>TRUMAN!</strong> - holograph logo","04:12"],
    ["1.10","<strong>RAWINTHEVOID</strong> - eyes out","02:08"],
    ["1.11","<strong>purity://filter</strong> - red dot","02:03"],
    ["1.12","<strong>Clean Slate</strong> - Violence Majesty","03:14"],
    ["1.13","<strong>rybbon</strong> - Rotoscope","04:01"],
    ["1.14","<strong>w4fflestomp</strong> - rapid onset euphoria","03:10"],
    ["1.15","<strong>Micheal S.</strong> - Sings the Hits pt. II","07:09"],
    ["1.16","<strong>zweihandr</strong> - Digital Comfort","04:25"],
    ["","<strong>Disc 2</strong>",""],
    ["2.1","<strong>DOBBIE</strong> - spirit halloween twerkathon","02:29"],
    ["2.2","<strong>spearflower</strong> - incisors dominate","02:38"],
    ["2.3","<strong>CORPSEWAX</strong> - SWEEPSTAKES","00:48"],
    ["2.4","<strong>DJ ARCHFIEND</strong> - depth amulet","03:14"],
    ["2.5","<strong>coniumer</strong> - freewill","05:54"],
    ["2.6","<strong>Calcium Demo</strong> - Kiss Goodbye","02:32"],
    ["2.7","<strong>rat corp</strong> - Bunny Rabbit","02:39"],
    ["2.8","<strong>rat corp</strong> - Forbidden","02:57"],
    ["2.9","<strong>Vale-Smith</strong> - Saints Session","01:53"],
    ["2.10","<strong>Vale-Smith</strong> - My Pandora","02:25"],
    ["2.11","<strong>Enraile</strong> - Club Emerald","02:22"],
    ["2.12","<strong>netbooks.WRLD</strong> - raygun","02:44"],
    ["2.13","<strong>haiipara</strong> - underworld","04:27"],
    ["2.14","<strong>coniumer</strong> - fool's purpose","06:25"],
    ["2.15","<strong>amber dregs</strong> - Lost Love","02:52"],
  ], "Various", "Digital / CD", true, {
    type: "cd",
    price: "16.00",
    desc: `"Maulcat Vol. 1" on two shiny discs housed in respective jewel cases. Comes in black slipcase (not pictured in mockups). Also features exclusive "front and back" art on both cases.
    Design and Layout by kmddr and kelvinklub. Mockups by DrDuctape of Skyline Tapes.`,
    img: ["19_1.png", "19_2.png"],
    link: "https://music.maulcat.us/album/maulcat-vol-1"
  }, [
    ["Production","Various"],
    ["Mixing/Mastering","Various<br>Syd<br>DrDuctape"],
    ["A&R","Syd"],
    ["Art","kelvinklub<br>Syd"],
    ["Curator","Syd"],
    ["Rendering","Calcium Demo"]
  ]],

  ["Purity Filter", "Immortal Spirit", 0, 2022, [
    ["","<strong>Side A</strong>",""],
    ["A1","Lost Silver","01:34"],
    ["A2","Abraxas <small>ft. Catastrophi</small>","02:42"],
    ["A3","Keratin <small>ft. N3RVOUS</small>","01:47"],
    ["A4","Tenshi","02:01"],
    ["A5","Lycanphilia <small>ft. Sigmatus</small>","03:32"],
    ["A6","Bloodletting <small>ft. Vertigoaway</small>","02:39"],
    ["A7","Spiraling <small>ft. 5ubaruu, Catastrophi, Sigmatus</small>","03:28"],
    ["A8","Dodona <small>ft. azul</small>","03:08"],
    ["A9","Shiki","03:09"],
    ["","<strong>Side B</strong>",""],
    ["B1","Shiki","03:09"],
    ["B2","Vanish","02:00"],
    ["B3","Velvet","03:12"],
    ["B4","Sinbound","02:37"],
    ["B5","Idratherbeinitagain <small>feat. MANAPOOL</small>","03:51"],
    ["B6","Collapse <small>feat. rainsdeaf</small>","03:01"],
    ["B7","Elixir Drowned","01:58"],
    ["B8","Serris <small>(bonus)</small>","01:15"],
  ], "Hardcore", "Vinyl", true, {
    type: "vinyl",
    price: "28.00",
    desc: `"Immortal Spirit"; the 2022 album from Landline Collective's own Purity Filter on standard weight 12" vinyl; housed in a premium gatefold jacket. (not pictured)
    * Includes bonus track "Serris"
    (c) 2022 MC020 DY032 Maulcat / <a href="https://dismiss.store">Dismiss Yourself</a>`,
    img: ["20_1.png","20_2.png"],
    link: "https://music.maulcat.us/album/immortal-spirit",
  }, [
    ["Production","Purity Filter"],
    ["Mastering","Sienna Sleep"],
    ["Cover Art","Mess Sama"],
    ["A&R","Syd"],
    ["GFX & Color","LCL Stream"],
    ["Layout","Syd"]
  ]],
  ["super going", "a2*living", 0, 2022, [
    ["1","ehsm","13:45"],
    ["2","body, look into growing","00:40"],
    ["3","inside annoying","05:46"],
    ["4","it only gets worse","04:43"],
    ["5","path to whatever","04:04"],
    ["6","leap out of room & land below","14:37"],
    ["7","staring into nothing","01:20"],
    ["8","figured out","09:09"],
  ], "Noise, Ambient, IDM", "Digital, CD, Cassette", true, {
    type: "cd+cass",
    price: "10.50 <small>each</small>",
    desc: `Includes a high-quality CD copy of "a2*living" with black inkjet disc printing, housed in a 2-panel digipak with bright artwork on each panel.`,
    img: ["22_1.png","22_2.png"],
    link: "https://supergoing.bandcamp.com/album/a2-living-2"
  }, [
    ["Production","super going"],
    ["Mastering","super going"],
    ["Cover Art/Design","super going"],
    ["A&R","Syd"],
    ["featuring:","Reversed Reference<br>heikadog<br>chaos//barista"]
  ], `a2*living, an album about figuring out things<br><br>track 2 has additional sound design work from reversed reference
  track 3 has additional sound design work from heikadog
  track 6 was co-written by heikadog and chaos//barista, and was co-produced with chaos//barista
  track 8 was co-produced and co-written by chaos//barista`

  ]
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

document.title    = `${albums[c][0]} - ${albums[c][1]} | Maulcat`;

if (hasmerch) {
  let merchdata   = albums[c][8];
  merch.style.display = "block";

  document.querySelector('.merch-header').innerHTML = headers[merchdata.type];
  document.querySelector('#buylink').innerHTML = `$${merchdata.price}`;
  document.querySelector('#buylink').href = merchdata.link;
  document.querySelector('.merchdesc').innerHTML = merchdata.desc;

  let images = document.getElementsByClassName("merchimg");
  images[0].src = `img/cover/${merchdata.img[0]}`;
  images[1].src = `img/cover/${merchdata.img[1]}`;
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

if (albums[c][10] !== undefined) {
  document.querySelector(".description").innerHTML = albums[c][10];
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

cover.src         = `img/cover/${c}.png`;
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

/*
<meta name="title"              class="m_title" content="__TITLE__">
    <meta property="og:title"       class="m_ogt"   content="__OGTITLE__">
    <meta property="og:type"        content="album">
    <meta property="og:description" class="m_d"     content="__OGDESC__">
    
    <meta property="og:site_name"   content="Maulcat">

    <meta property="og:image"       class="m_ogi"   content="__OGI__">
    <link rel="image_src"           class="m_src"   href="__MSRC__">
    

// Embed
let mt = document.querySelector(".m_title");
let gt = document.querySelector(".m_ogt");

mt.content = `${albums[c][0]} — ${albums[c][1]}`;
gt.content = mt.content;

let my = document.querySelector(".m_d");

my.content = `MC${(c > 10) ? `0${c}` : `00${c}`}, ${albums[c][3]} [${albums[c][5]}]<br>[${albums[c][6]}]`;

let oi = document.querySelector(".m_ogi");
let oc = document.querySelector(".m_src");

oi.content = `https://maulcat.us/img/cover/${c}.png`;
oc.href = oi.content;
*/

// Embed (2nd try)
let ih = document.documentElement.innerHTML;
document.documentElement.innerHTML = ih.replace(/__TITLE__/g, `${albums[c][0]} — ${albums[c][1]}`)
  .replace(/__OGTITLE__/g, `${albums[c][0]} — ${albums[c][1]}`)
  .replace(/__OGDESC__/g, `MC${(c > 10) ? `0${c}` : `00${c}`}, ${albums[c][3]} [${albums[c][5]}]<br>[${albums[c][6]}]`)
  .replace(/__OGI__/g, `https://maulcat.us/img/cover/${c}.png`)
  .replace(/__MSRC__/g, `https://maulcat.us/img/cover/${c}.png`);


// Get the modal
var modal = document.querySelector(".modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("modaltrigger");
var modalImg = document.querySelector(".modal-content");
for (var k = 0; k < img.length; k++) {
  img[k].onclick = function(){
    modal.style.display = "flex";
    modalImg.src = this.src;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

window.addEventListener("keyup", (e) => {
  (e.keyCode === 27) ? modal.style.display = "none" : 0;
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}