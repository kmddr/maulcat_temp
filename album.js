
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

  ],
  ["Clean Slate", "Connection Lost", 0, 2022, [
    ["1","ident","0:11"],
    ["2","stg0-","1:00"],
    ["3","patience","1:45"],
    ["4","it looked just like you","2:06"],
    ["5","still searching","1:43"],
    ["6","item shop back","0:58"],
    ["7","(_2)","1:40"],
    ["8","amygdala supressor","1:17"],
    ["9","floor b1 room 103","1:41"],
    ["10","status","0:50"],
    ["11","runway","1:25"],
    ["12","halogen stars","1:44"],
    ["13","dead end","1:00"],
    ["14","cable warmth","1:34"],
    ["15","ending 1 (sleep)","2:52"],
    ["16",">","0:12"],
    ["17","choices","1:01"],
    ["18","again","1:08"],
    ["19","apostle","1:01"],
    ["21","grating familiarity","1:03"],
    ["22","puppets' seal","1:07"],
    ["23","save room","1:28"],
    ["24","item shop front","1:06"],
    ["25","concrete sky","1:10"],
    ["26","sunset in bulletproof glass","1:42"],
    ["27","my purpose","1:31"],
    ["28","ending 2 (freedom)","2:54"],
    ["29",">","0:09"],
    ["30","new body","0:32"],
  ], "Vaporwave, Plunderphonics", "Digital, Cassette", true, {
    type: "cass",
    price: "10.50",
    desc: `Black cassette copy of "Connection Lost" housed in a clear/black tint case with a professionally printed J-card with a map printout. Numbered of 25.
    * Promotion images are product mockups and not 100% accurate to the final product. *`,
    img: ["23_1.jpg", "23_2.jpg"],
    link: "https://clean-slate.bandcamp.com/album/connection-lost-2"
  }],
  /*
  Drum Machine / All The Other MCs (Remastered & Remixed)
by Monte Hills

 Share / Embed  Wishlist
Edit 
Delete
 Bulk Edit
Fred 00:00 / 02:24

Digital Album
Streaming + Download
Includes high-quality download in MP3, FLAC and more. Paying supporters also get unlimited streaming via the free Bandcamp app.
Buy Digital Album  name your price
Send as Gift 
 
Digipak® CD (private) Edit
Compact Disc (CD) + Digital Album
Includes a high-quality CD copy of "Drum Machine / All The Other MC's" with black inkjet disc printing, housed in a 3-panel trifold digipak.
* Promotion images are product mockups and not 100% accurate to the final product. *

Includes unlimited streaming of Drum Machine / All The Other MCs (Remastered & Remixed) via the free Bandcamp app, plus high-quality download in MP3, FLAC and more.
ships out within 7 days
edition of 50 
Buy Compact Disc  $12.50 USD or more 
Send as Gift 
1.
Fred 02:24
2.
CSFCP 02:28
3.
Drum Machine 02:18
4.
Closer (Edit) 03:31
5.
Pie 03:01
6.
All The Other MCs 03:30
7.
By The Numbers 03:52
8.
Background 03:52
9.
Eyes 02:46
10.
Funky Rhythm 03:39
11.
CSFCP (Artemis Morte Remix) 03:55
12.
Eyes (CrystalForce Remix) 02:39
13.
Drum Machine (Ruined By Mr. Hoosteen) 04:48
14.
Closer (Morning End Remix) 03:02
15.
Pie (Corpsewax Remix) 01:17
16.
All The Other MCs (RADD's Static Charge Mix) 05:42
17.
Background (OPTML Redux) 06:37
18.
Funky Rhythm (STEB's Break Mix) 05:33
about
Art by Confetteye @ twitter.com/CONFETTEYE

Remixes By:

Morning End @ morningend.bandcamp.com

Artemis Morte @ twitter.com/artisntdeadyet

CrystalForce @ twitter.com/CrystalForce_ & crystalforce1.bandcamp.com

Mr. Hoosteen @ twitter.com/mrhoosteen & mrhoosteen.bandcamp.com

RADD @ twitter.com/coalpuff & coalpuff.bandcamp.com

OPTML @ twitter.com/DJCockatiel

STEB @ steb-music.bandcamp.com & soundcloud.com/steb-music
credits
released December 16, 2022

Produced, mixed and mastered by Monte Hills.
Album art by Monte Hills.
Design and layout by Monte Hills and K.M.D.D.R. of Maulcat.
Drawings and sketches by Confetteye.

Morning End is Monte Hills and RADD.
Atermis Morte, CrystalForce, Mr. Hoosteen, RADD, OPTML and STEB appear courtesy of OMEAC and Cockatiel Records.

Recorded 2020—2022.
Published and distributed by Maulcat f.k.a. Maulcat Records.
Manufactured by duplication.ca / Analogue Media Technologies.

Drum Machine © 2020 Monte Hills, Cockatiel Records.
All The Other MCs © 2021 Monte Hills, Cockatiel Records.
*/
  ["Bagel Fanclub", "How Cars Drive", 2, 2022, [
    ["1","i served you slop and all you gave back was firecrackers (Single Edit)","4:16"],
    ["2","smeegle premonition (Single Edit)","2:08"],
    ["3","saudade saw wielding (Single Edit)","3:52"]
  ], "Flashcore, Noise, Gabber, Glitch", "Digital", false, {}],

  ["Monte Hills", "Drum Machine / All The Other MCs (Remastered & Remixed)", 0, 2022, [
    ["1","Fred","2:24"],
    ["2","CSFCP","2:28"],
    ["3","Drum Machine","2:18"],
    ["4","Closer <small>(Edit)</small>","3:31"],
    ["5","Pie","3:01"],
    ["6","All The Other MCs","3:30"],
    ["7","By The Numbers","3:52"],
    ["8","Background","3:52"],
    ["9","Eyes","2:46"],
    ["10","Funky Rhythm","3:39"],
    ["11","CSFCP <small>(Artemis Morte Remix)</small>","3:55"],
    ["12","Eyes <small>(CrystalForce Remix)</small>","2:39"],
    ["13","Drum Machine <small>(Ruined By Mr. Hoosteen)</small>","4:48"],
    ["14","Closer <small>(Morning End Remix)</small>","3:02"],
    ["15","Pie <small>(Corpsewax Remix)</small>","1:17"],
    ["16","All The Other MCs <small>(RADD's Static Charge Mix)</small>","5:42"],
    ["17","Background <small>(OPTML Redux)</small>","6:37"],
    ["18","Funky Rhythm <small>(STEB's Break Mix)</small>","5:33"]
  ], "House, French House", "Digital, CD", true, {
    type: "cd",
    price: "12.50",
    desc: `Digipak® CD copy of "Drum Machine / All The Other MC's (Remastered & Remixed)" with black inkjet disc printing, housed in a 3-panel trifold digipak.
    * Promotion images are product mockups and not 100% accurate to the final product. *`,
    img: ["25_1.jpg", "25_2.jpg"],
    link: "https://montehills.bandcamp.com/album/drum-machine-all-the-other-mcs-remastered-remixed"
  }, [
    ["Production","Monte Hills"],
    ["Mastering","Monte Hills"],
    ["Cover Art/Design","Monte Hills<br>Confetteye"],
    ["A&R","Syd"],
    ["Remixes By:","Morning End<br>Artemis Morte<br>CrystalForce<br>Mr. Hoosteen<br>Corpsewax<br>RADD<br>OPTML<br>STEB"],
  ], `Produced, mixed and mastered by Monte Hills.<br>
  Album art by Monte Hills.<br>
  Design and layout by Monte Hills and K.M.D.D.R. of Maulcat.<br>
  Drawings and sketches by Confetteye.<br><br>
  
  Morning End is Monte Hills and RADD.<br>
  Atermis Morte, CrystalForce, Mr. Hoosteen, RADD, OPTML and STEB appear courtesy of OMEAC and Cockatiel Records.<br><br>
  
  Recorded 2020—2022.<br>
  Published and distributed by Maulcat f.k.a. Maulcat Records.<br>
  Manufactured by duplication.ca / Analogue Media Technologies.<br><br>
  
  Drum Machine © 2020 Monte Hills, Cockatiel Records.<br>
  All The Other MCs © 2021 Monte Hills, Cockatiel Records.`
  ],

  ["bagel fanclub", "how are your cars driving?", 0, 2023, [
    ["1","black metal on castanets (horpen)","3:08"],
    ["2","how are your cars driving?","4:42"],
    ["3","the song formerly known as please swallow spiders / goddamn romhacking","3:54"],
    ["4","saudade saw wielding","5:43"],
    ["5","sine wave assembly","2:16"],
    ["6","warm hands, shit coffee","1:36"],
    ["7","smeegle premonition","3:31"],
    ["8","i served you slop and all you gave back was firecrackers","4:28"],
    ["9","remote controlled vestigiality","1:09"],
    ["10","thinking about segways","3:20"],
    ["11","crunch time vs a man made of overdraft","3:02"],
    ["12","shit hands, warm coffee","2:20"],
    ["13","psychic gelatinous mass","9:39"],
  ], "Flashcore, Noise, Gabber, Glitch", "Digital, CD", true, {
    type: "cd",
    price: "11.50",
    desc: 'Includes a high-quality CD copy of "HOW ARE YOUR CARS DRIVING?" with black inkjet disc printing, housed in a 4-panel bifold digipak. Includes a double-sided printed Obi-Strip with art by Caybee.<br><br>Featuring art by Yam Lynn & Caybee Calabash and layout by Caybee Calabash, River Thomas & K.M.D.D.R. of Maulcat.<br><br>* Promotion images are product mockups and not 100% accurate to the final product. *',
    img: ["26_1.jpg", "26_2.jpg"],
    link: "https://bagelfanclub.bandcamp.com/album/how-are-your-cars-driving"
  }, [
    ["Production","bagel fanclub"],
    ["Mastering","bagel fanclub"],
    ["Cover Art/Design","bagel fanclub<br>Yam Lynn<br>Caybee Calabash"],
    ["A&R","Syd"],
  ], `bagel fanclub is River Thomas and Caybee Calabash.<br><br>One of the most forward thinking records of this decade! But if you need me to prove it…..
Hi it’s me from 2030, this album, is indeed, the most forward thinking album of the rawring 20’s :3<br.<br>Travel inside the radioactive microwave of chaos and chasms of bips and bops(!!) on “how are your cars driving?” With your tour guides River and Caybee, two stoners who have no idea where they are, or what to do with their guests! [spoiler alert: they picked the highest paying job on Indeed with no prerequisites] We will be trekking deep into the Forest of Wonky Wire and jump pot holes filled with psychic gelatinous mass, but do not be afraid my friend! In this world we sine waves call home, there is no such thing as death and nothing can harm you!! Yes, our ragtag tour guides aren’t the brightest but they can surely make for an entertaining time, mind if I offer you our classic radioactive slop? All of your fears of traveling into our Marvelous Majestic Microwave Mechanism are [REDACTED]<br><br>In this one-of-a-kind album by Bagel Fanclub, be prepared for some maximalist loud portions with some quiet chiptune moments paired with melancholy and energy! Enjoy fragments of video game music you have never heard of while having chopped and screwed breaks scatter around your ears. The experience of listening to this is the closest we have to the sensation of soda and pop rocks in your ears. Within an hour you will find yourself humming along to the melodies… funny how something as noisy as this can become an ear worm, huh?<br><br>[Album write-up by Effy Adshead] `],

  ["Vale-Smith", "Coruscate+ (CDs)", 0, 2023, [
    ["1","Ceramic Skies","2:33"],
    ["2","Know Me","3:37"],
    ["3","Hang Tight","2:41"],
    ["4","A Passage","2:17"],
    ["5","Looper","2:13"],
    ["6","Ace Ransom","3:16"],
    ["7","Revealing Light","3:43"],
    ["8","Give Your Best","2:33"],
    ["9","Everything","3:24"],
    ["10","Voracity in the Warehouse","3:37"],
    ["11","Think Lavender","2:41"],
    ["12","Tethered to Us","2:37"],
    ["13","Setting Sun","4:14"],
    ["14","Underthoughts","2:32"],
    ["15","Hummingbird","4:13"],
    ["","<strong>Coruscate+</strong>",""],
    ["16","Hummingbird, pt. 2",""],
    ["17","Sky Topiary",""],
    ["18","Rays",""],
    ["19","The Mowlem",""],
    ["20","Blaze",""],
  ], "Future Bass, House, Trap, UK Garage", "CD", true, {
    type: "cd",
    price: "10.50",
    desc: `Includes a high-quality CD copy of "Coruscate" (plus 5 new bonus tracks) with black inkjet disc printing, housed in a 6-panel trifold digipak.<br><br>Featuring art/layout by Vale-Smith & K.M.D.D.R. of Maulcat.<br><br>* Promotion images are product mockups and not 100% accurate to the final product. *`,
    link: `https://buffalostaple.bandcamp.com/album/coruscate`,
    img: ["27_1.jpg", "27_2.jpg"]
  }, [
    ["Production","Vale-Smith"],
    ["Mastering","Vale-Smith"],
    ["Cover Art/Design","Vale-Smith<br>K.M.D.D.R."],
    ["A&R","Syd"],
  ], `coruscate with me.<br>Originally released January 1, 2022.`],

  ["Vale-Smith", "Pristine Drifting", 2, 2023, [
    ["1","Pristine Drifting","3:09"],
  ], "Future Bass, House, Trap, UK Garage", "Digital", false, {}, [
    ["Production","Vale-Smith"],
    ["Mastering","Vale-Smith"],
    ["Cover Art/Design","Vale-Smith"],
    ["A&R","Syd"],
  ]],

  ["coniumer", "Acedia & Anomie", 0, 2023, [
    ["1","altar-alter","6:06"],
    ["2","ego irradiation","2:00"],
    ["3","intent to","4:09"],
    ["4","manic worship","3:23"],
    ["5","dismiss-distaste","4:14"],
    ["6","freewill","5:47"],
    ["7","gift from lilith","7:14"],
    ["8","i'llDoIt","2:13"],
    ["9","fool's purpose","6:21"],
  ], "Breakcore, Electronica, Hardcore Breaks, Drum & Bass", "Digital, CD, LP", true, {
    type: "cd+lp",
    price: "10.50/$32.00",
    desc: `Includes a high-quality CD copy of "Acedia & Anomie" with black inkjet disc printing, housed in a 6-panel trifold digipak.<br><br>coniumer's "Acedia & Anomie" on deluxe, 12" heavyweight vinyl.<br>
    Housed in a 3mm premium gatefold jacket.<br>
    * Includes exclusive album art from Luna Rose.<br>
    (c) 2023 coniumer; Maulcat. MC025-LP`,
    link: `https://coniumer.bandcamp.com/album/acedia-anomie`,
    img: ["28_1.jpg", "28_2.jpg"]
  }, [
    ["Production","Connie Rem"],
    ["Mastering","Connie Rem<br><small>with assistance from</small> DrDuctape"],
    ["Cover Art/Design","Luna Rose"],
    ["A&R","Syd"],
  ]],

];

const headers = {
  "vinyl": `12" Vinyl`,
  "7in": `7" Vinyl`,
  "cass": `Cassette`,
  "cd": "CD",
  "cd+cass": "CD & Cassette",
  "cd+lp": "CD & 12\" Vinyl",
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
    images[0].src = `img/product/${merchdata.img[0]}`;
    images[1].src = `img/product/${merchdata.img[1]}`;
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

cover.src         = `img/cover_1/${c}.jpg`;
cover.alt         = `${albums[c][1]} cover`;

reltype.innerHTML = types[albums[c][2]];
year.innerHTML    = albums[c][3];

genres.innerHTML  = albums[c][5];
formats.innerHTML = albums[c][6];

if (c == 19) {
  cat.innerHTML = ("MCS 005<br>2022");
} if (c == 24) {
  cat.innerHTML = ("MCS 006<br>2022");
} else {
  cat.innerHTML     = `MC${(c > 10) ? `0${(c > 23) ? c - 2 : (c > 18) ? c - 1 : c}` : `00${(c > 23) ? c - 2 : (c > 18) ? c - 1 : c}`}`;
}



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
    if (this.src.includes("cover")) {
      modalImg.src = `img/cover_0/${c}.png`;
    } else {
      modalImg.src = this.src;
    }
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

window.addEventListener("keyup", (e) => {
  (e.keyCode === 27) ? modal.style.display = "none" : 0;
});

modal.onclick = function() {
  this.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}