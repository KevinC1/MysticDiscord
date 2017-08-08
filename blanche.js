var Discord = require('discord.js');
var client = new Discord.Client();
var settings = require("./settings.json")
client.login(settings.token);

client.on('ready', () => {
  console.log('Blanche: I am ready!');
});

client.on("message", (message) => {
  let prefix = settings.prefix;
  let moderator = settings.moderator;
  if (!message.content.startsWith(prefix) || message.author.bot) return;

//help
  if (message.content.startsWith('!help') || message.content.startsWith('!Help')) {
   message.reply("Hey! Mijn naam is Blanche, en ik ben de teamleider van het beste team, Mystic! Naast het appraisen van jouw pokemon in game, kan ik jullie ook op discord assistentie verlenen. Ik kan bijvoorbeeld laten zien welke cp's en aanvallen je zoekt in raid bosses, typ bijvoorbeeld eens !tyranitar. Na jaren van studie heb ik ook alle type voordelen uit mijn hoofd geleerd, welke op te vragen zijn via !type. Verder help ik in deze discord met het verdelen van rollen (aan te vragen in het speler registratie kanaal) en kan ik ook informatie geven over de verschillende teams. Succes met het spel en maak me trots! :mystic:");
   message.delete()
  } else

// Request pokemon info
  if (message.content.startsWith('!type') || message.content.startsWith('!Type')) {
    message.reply("Zie hier een tabel met type effectiviteit:", {
    file: "https://image.ibb.co/mxRthv/Untitled.png"});
    message.delete()
  } else

  if (message.content.startsWith('!charizard') || message.content.startsWith('!Charizard')) {
    message.reply('**#3 - Charizard** [Fire Flying]\nweakness: x1.96 [Rock] x1.4: [Electric Water]\nWonder CP: 1498 - 1535 \n```Att: Fire Spin Overheat```');
    message.delete()
  } else
  if (message.content.startsWith('!venusaur') || message.content.startsWith('!Venusaur')) {
    message.reply('**#6 - Venusaur** [Grass Poison]\nweakness: x1.4: [Fire Flying Ice Psychic]\nWonder CP: 1434 - 1467 \n```Att: Vine Whip Solar Beam```');
    message.delete()
  } else
  if (message.content.startsWith('!blastoise') || message.content.startsWith('!Blastoise')) {
    message.reply('**#9 - Blastoise** [Water]\nweakness: x1.4: [electric Grass]\nWonder CP: 1280 - 1309 \n```Att: Water Gun Hydro Pump```');
    message.delete()
  } else
  if (message.content.startsWith('!alakazam') || message.content.startsWith('!Alakazam')) {
    message.reply('**#65 - Alakazam** [Psychic]\nweakness: x1.4: [dark bug]\nWonder CP: 1608 - 1649 \n```Att: Psycho Cut  Future Sight```');
    message.delete()
  } else
  if (message.content.startsWith('!machamp') || message.content.startsWith('!Machamp')) {
    message.reply('**#68 - Machamp** [Fighting]\nweakness: x1.4: [Fairy Flying Psychic]\nWonder CP: 1612 - 1649 \n```Att: Counter   Dynamic Punch```');
    message.delete()
  } else
  if (message.content.startsWith('!muk') || message.content.startsWith('!Muk')) {
    message.reply('**#89 - Muk** [Poison]\nweakness: x1.4: [Ground Psychic]\nWonder CP: 1517 - 1548 \n```Att&Def: Poison Jab Gunk Shot```');
    message.delete()
  } else
  if (message.content.startsWith('!gengar') || message.content.startsWith('!Gengar')) {
    message.reply('**#94 - Gengar** [Ghost Poison]\nweakness: x1.4: [Dark Ground Ghost Psychic]\nWonder CP: 1454 - 1496 \n```Att: Hex  Shadow Ball```');
    message.delete()
  } else
  if (message.content.startsWith('!magikarp') || message.content.startsWith('!Magikarp')) {
    message.reply('**#103 - Magikarp** [Water]\nweakness: alles\nWonder CP: 119 - 125 \n```Att: Splash  Struggle```');
    message.delete()
  } else
  if (message.content.startsWith('!weezing') || message.content.startsWith('!Weezing')) {
    message.reply('**#136 - Weezing** [Poison]\nweakness: x1.4: [Ground Psychic]\nWonder CP: 1218 - 1247 \n```Att&Def: Infestation Sludge Bomb```');
    message.delete()
  } else
  if (message.content.startsWith('!rhydon') || message.content.startsWith('!Rhydon')) {
    message.reply('**#112 - Rhydon** [Ground Rock]\nweakness: x1.96 [Grass Water] x1.4: [Ground Steel Fighting Ice]\nWonder CP: 1849 - 1886 \n```Att: Mud Slap Earthquake/Stone Edge```');
    message.delete()
  } else
  if (message.content.startsWith('!electabuzz') || message.content.startsWith('!Electabuzz')) {
    message.reply('**#125 - Electabuzz** [Electric]\nweakness: x1.4: [Ground]\nWonder CP: 1222 - 1255 \n```Att: Thunder Shock Thunderbolt\n```');
    message.delete()
  } else
  if (message.content.startsWith('!magmar') || message.content.startsWith('!Magmar')) {
    message.reply('**#136 - Magmar** [Fire]\nweakness: x1.4: [Rock Ground Water]\nWonder CP: 1254 - 1288 \n```Att: Ember Flamethrower```');
    message.delete()
  } else
  if (message.content.startsWith('!exeggutor') || message.content.startsWith('!Exeggutor')) {
    message.reply('**#129 - Exeggutor** [Grass Psychic]\nweakness: x1.96 [Bug] x1.4: [Fire Dark Flying oison Ghost Ice]\nWonder CP: 1628 - 1666 \n```Att: Bullet Seed   Solar Beam\nDef: Extrasensory Solar Beam```');
    message.delete()
  } else
  if (message.content.startsWith('!lapras') || message.content.startsWith('!Lapras')) {
    message.reply('**#131 - Lapras** [Ice Water]\nweakness: x1.4: [electric Grass Rock Fighting]\nWonder CP: 1459 - 1487 \n```Att: Frost Breath  Blizzard\n\nDef: Frost Breath  Ice Beam```');
    message.delete()
  } else
  if (message.content.startsWith('!vaporeon') || message.content.startsWith('!Vaporeon')) {
    message.reply('**#134 - Vaporeon** [Water]\nweakness: x1.4: [electric Grass]\nWonder CP: 1769 - 1804 \n```Att: Water Gun  Hydro Pump```');
    message.delete()
  } else
  if (message.content.startsWith('!jolteon') || message.content.startsWith('!Jolteon')) {
    message.reply('**#135 - Jolteon** [Ground]\nweakness: x1.4: []\nWonder CP: 1520 - 1560 \n```Att: Thunder Shock Thunderbolt\n\nDef: Volt Switch Discharge```');
    message.delete()
  } else
  if (message.content.startsWith('!flareon') || message.content.startsWith('!Flareon')) {
    message.reply('**#136 - Flareon** [Fire]\nweakness: x1.4: [Rock Ground Water]\nWonder CP: 1619 - 1659 \n```Att: Fire Spin Overheat\n\nDef: Fire Spin Flamethrower```');
    message.delete()
  } else
  if (message.content.startsWith('!snorlax') || message.content.startsWith('!Snorlax')) {
    message.reply('**#143 - Snorlax** [Normal]\nweakness: x1.4: [Fighting]\nWonder CP: 1885 - 1917 \n```Def: Zen Headbutt  Heavy Slam```');
    message.delete()
  } else
  if (message.content.startsWith('!articuno') || message.content.startsWith('!Articuno')) {
    message.reply('**#144 - Articuno** [Ice Flying]\nweakness: x1.96: [Rock] x1.4: [Electric Fire Steel]\nWonder CP: 1644 - 1676 \n```Att: Frost Breath    Blizzard```');
    message.delete()
  } else
  if (message.content.startsWith('!zapdos') || message.content.startsWith('!Zapdos')) {
    message.reply('**#145 - Zapdos** [Electric Flying]\nweakness: x1.4: [Rock Ice]\nWonder CP: 1861 - 1902 \n```Att: Charge Beam    Zap Cannon```');
    message.delete()
  } else
  if (message.content.startsWith('!moltres') || message.content.startsWith('!Moltres')) {
    message.reply('**#146 - Moltres** [Fire Flying]\nweakness: x1.96: [Rock] x1.4: [Water]\nWonder CP: 1828 - 1870 \n```Att: Fire Spin    Overheat```');
    message.delete()
  } else

  if (message.content.startsWith('!quilava') || message.content.startsWith('!Quilava')) {
    message.reply('**#156 - Quilava** [Fire]\nweakness: x1.4: [Rock Ground Water]\nWonder CP: 821 - 847');
    message.delete()
  } else
  if (message.content.startsWith('!croconaw') || message.content.startsWith('!Croconaw')) {
    message.reply('**#159 - Croconaw** [Water]\nweakness: x1.4: [electric Grass]\nWonder CP: 888 - 913');
    message.delete()
  } else
  if (message.content.startsWith('!bayleef') || message.content.startsWith('!Bayleef')) {
    message.reply('**#153 - Bayleef** [Grass]\nweakness: x1.4: [Bug Fire Flying Poison Ice]\nWonder CP: 719 - 740');
    message.delete()
  } else
  if (message.content.startsWith('!shuckle') || message.content.startsWith('!Shuckle')) {
    message.reply('**#213 - Shuckle** [Bug Rock]\nweakness: x1.4: [Rock Steel Water]\nWonder CP: 165 - 171 \n```Att: Rock Throw Stone Edge```\nIk geef verder nog hetvolgende advies:\nDONT FUCKLE WITH SHUCKLE');
    message.delete()
  } else
  if (message.content.startsWith('!tyranitar') || message.content.startsWith('!Tyranitar') || message.content.startsWith('!ttar') || message.content.startsWith('!Ttar') || message.content.startsWith('!TTar')) {
    message.reply('**#248 - Tyranitar** [Dark Rock]\nweakness: x1.96: [Fighting] x1.4: [Bug Grass Fairy Ground Steel Water]\nWonder CP: 2055 - 2097 \n```Att: Bite Stone Edge```');
    message.delete()
  } else
  if (message.content.startsWith('!lugia') || message.content.startsWith('!Lugia')) {
    message.reply('**#249 - Lugia** [Psychic Flying]\nweakness: x1.4: [Electric Rock Dark Ghost Ice]\nWonder CP: 2023 - 2053 \n```Att: Extrasensory    Sky Attack \nAtt: Extrasensory    Future Sight```');
   message.delete()
  } else
  if (message.content.startsWith('!Ho-Oh') || message.content.startsWith('!ho-oh') || message.content.startsWith('!Ho Oh') || message.content.startsWith('!ho oh')) {
    message.reply('**#250 - Ho-Oh** [Fire Flying]\nweakness: x1.96: [Rock] x1.4: [Electric Water]\nWonder CP: 2613 - 2657 \n```Att: ???```');
    message.delete()
  } else

  if (message.content.startsWith('!mystic') || message.content.startsWith('!Mystic')) {
    message.channel.send('**Team Mystic**\nI am Blanche, leader of Team Mystic. The wisdom of Pokémon is immeasurably deep. I am researching why it is that they evolve.\nMy team? With our calm analysis of overy situation, we cant lose!', {
      file: "https://pogosa.net/images/mystic_leader.png" });
    setTimeout(() => {
    message.channel.send('Wat een prachtige woorden vind je niet? Met onze wijsheid kunnen we samen met onze Pokémon elke uitdaging aan!');;},1000);
    message.delete()
  } else
  if (message.content.startsWith('!valor') || message.content.startsWith('!Valor')) {
    message.channel.send('**Team Valor**\nI am Candela, Tem Valor Leader!. Pokemon are stronger than humans, and they are warmhearted, too! I am researching ways to enhance Pokémon natural power in the pursuit of true strength. There is no doubt that the Pokémon in our team have trained are the strongest in battle! Are you ready?', {
      file: "https://pogosa.net/images/valor_leader.png" });
    setTimeout(() => {
    message.channel.send('Pokemon sterker dan mensen? Bij jullie team twijfel ik daar soms over.... Dat onderzoek van jullie om pokemon sterker te maken is in elk geval hard nodig bij team faler!');;},1000);
    message.delete()
  } else
  if (message.content.startsWith('!instinct') || message.content.startsWith('!Instinct')) {
    message.channel.send('**Team Instinct**\nHey! The names Spark- the leader of Team Instinct. Pokémon are creatures with excellent intuition. I bet the secret to their intuition is related to how theyre hatched. Come on and join my team! You never lose when you trust your instincts!', {
      file: "https://pogosa.net/images/instinct_leader.png" });
    setTimeout(() => {
    message.channel.send('Vertrouwen op je intuitie? We leven toch zeker niet meer in de steentijd? En wat heeft hebben die eieren daar nu weer mee te maken? Met dit soort uitspraken lijkt het soms alsof je zelf uit een ei bent gekomen...');;},1000);
    message.delete()
  } else

//gym array
var gymarray = {
  "!3 variaties op een vierkant 2" : "**Gym: 3 Variaties op een vierkant 2**\n<https://goo.gl/maps/WBmE2s8ypYU2>",
  "!3 variaties op een vierkant 3" : "**Gym: 3 Variaties op een vierkant 3**\n<https://goo.gl/maps/yYa2qy8XJ9p>",
  "!artful" : "**Gym: Artful Cube**\n<https://goo.gl/maps/DsUvD9NEPLx>",
  "!bicycle" : "**Gym: Bicycle Love**\n<https://goo.gl/maps/e5CBn5ixBDy>",
  "!blue" : "**Gym: Blue Birds Honkbal**\n<https://goo.gl/maps/WFiksvKEiR32>",
  "!blauw-geel" : "**Gym: Blauw-Geel Keramiek Object**\n<https://goo.gl/maps/RFLjygKU6LC2>",
  "!blauw geel" : "**Gym: Blauw-Geel Keramiek Object**\n<https://goo.gl/maps/RFLjygKU6LC2>",
  "!cannon" : "**Gym: Cannon**\n<https://goo.gl/maps/on2P21Zky4L2>",
  "!climb" : "**Gym: Climb the Frogs**\n<https://goo.gl/maps/XWeyq5BrBV22>",
  "!color" : "**Gym: Color Sculpture**\n<https://goo.gl/maps/kR2QeheLsZz>",
  "!coligny" : "**Gym: De Coligny**\n<https://goo.gl/maps/fNgWYGgmQQD2>",
  "!delftse" : "**Gym: De Delftse Pauw**\n<https://goo.gl/maps/CVrYXSJfwf32>",
  "!hofstee" : "**Gym: De Hofstee**\n<https://goo.gl/maps/kkwdPP9jce82>",
  "!kamer" : "**Gym: De Kamer van Charilabla 1614**\n<https://goo.gl/maps/jC6osbaZcaG2>",
  "!nieuwe" : "**Gym: De Nieuwe Lente**\n<https://goo.gl/maps/D1ZGGvH1ED72>",
  "!oostpoort" : "**Gym: De Oostpoort**\n<https://goo.gl/maps/APDKGayWZZN2>",
  "!r.k." : "**Gym: De R.K. Kerk Antonius en Cornelius**\n<https://goo.gl/maps/3rbWddkmpaA2>",
  "!rk" : "**Gym: De R.K. Kerk Antonius en Cornelius**\n<https://goo.gl/maps/3rbWddkmpaA2>",
  "!stier" : "**Gym: De Stier**\n<https://goo.gl/maps/Xq77BkHMGbz>",
  "!delft central" : "**Gym: Delft Central Station**\n<https://goo.gl/maps/a5ypCkobkQ22>",
  "!delfts blauwe" : "**Gym: Delfts Blauwe Stenen**\n<https://goo.gl/maps/kJSKksZZPwq>",
  "!delftse tegelmannen" : "**Gym: Delftse Tegelmannen**\n<https://goo.gl/maps/eVA5ufuajzo>",
  "!delftshout" : "**Gym: Delftshout Levenslust**\n<https://goo.gl/maps/uwD9bsXTb5U2\nNIET TOEGANKELIJK NA 18:00>",
  "!delta rescue" : "**Gym: Delta Rescue**\n<https://goo.gl/maps/s3nxAxVVu9G2>",
  "!dok" : "**Gym: Dok Delft Bibliotheek**\n<https://goo.gl/maps/KPuHh3CV2Yk>",
  "!door" : "**Gym: Door Art**\n<https://goo.gl/maps/74i4MtAuVzy>",
  "!dsm" : "**Gym: DSM Kunstwerk**\n<https://goo.gl/maps/ZUQ1PpQ5BiL2>\nNIET TOEGANKELIJK",
  "!dvv" : "**Gym: Dvv Delft Tennis**\n<https://goo.gl/maps/btjqpgqHFY72>",
  "!egg" : "**Gym: Egg Mosaic**\n<https://goo.gl/maps/SjdaZoAmshn>",
  "!engelse" : "**Gym: Engelse Drop**\n<https://goo.gl/maps/ho5zAycvXqr>",
  "!entrance" : "**Gym: Entrance Bieslandse Bos Delft**\n<https://goo.gl/maps/187vzFFiCoE2>",
  "!evenwicht" : "**Gym: Evenwicht Ijzer**\n<https://goo.gl/maps/DYDKU8bcxCU2>",
  "!giant grill" : "**Gym: Giant Grill**\n<https://goo.gl/maps/q2gpVLkihu12>",
  "!giant tripod" : "**Gym: Giant Tripod at Rijkswaterstaat**\n<https://goo.gl/maps/qopEWA7HRMS2>",
  "!glasbak" : "**Gym: Glasbak Art**\n<https://goo.gl/maps/JUddhCkME9s>",
  "!green" : "**Gym: Green Chair with White Table**\n<https://goo.gl/maps/htvsSYTW5Qu>",
  "!guardian" : "**Gym: Guardian Angels**\n<https://goo.gl/maps/JmRrwx7rCQS2>",
  "!hamenpoort" : "**Gym: Hamenpoort Speelnatuur**\n<https://goo.gl/maps/JTAYj8BcdrR2>",
  "!hbsv" : "**Gym: HBSV Willem Tell**\n<https://goo.gl/maps/KgiMKZ57CeL2>",
  "!hello" : "**Gym: Hello Rainbow**\n<https://goo.gl/maps/muPhuRcYTpH2>",
  "!blauwe hart" : "**Gym: Het Blauwe Hart**\n<https://goo.gl/maps/oTH8eqavW132>",
  "!veldje" : "**Gym: Het Veldje**\n<https://goo.gl/maps/9cwyqtsBCos>",
  "!high" : "**Gym: High Water Bridge**\n<https://goo.gl/maps/e4BLwM2FAUm>",
  "!highway" : "**Gym: Highway Fitness Point**\n<https://goo.gl/maps/oW66Z3MJL3x>",
  "!historic" : "**Gym: Historic TU Delft Faculty Building**\n<https://goo.gl/maps/cVsDHyduBAT2>",
  "!hoven" : "**Gym: Hoven Passage**\n<https://goo.gl/maps/QBLQDrRAM1H2>",
  "!ichtus" : "**Gym: Ichtus**\n<https://goo.gl/maps/gMy63or6ZL62>",
  "!kerkpolder" : "**Gym: Kerkpolder**\n<https://goo.gl/maps/JKWRc8eAKyA2>",
  "!klein" : "**Gym: Klein Vrijenban**\n<https://goo.gl/maps/jvKQy7MFp9E2>",
  "!klm" : "**Gym: KLM Photon Torpedo**\n<https://goo.gl/maps/s2e3P8NbRNo>",
  "!knooppunt" : "**Gym: Knooppunt 59**\n<https://goo.gl/maps/BhUCRAaHHSH2>",
  "!kolom" : "**Gym: Kolom Van De Mensenrechten**\n<https://goo.gl/maps/dWKCFHijMbu>",
  "!koninkrijkszaa" : "**Gym: Koninkrijkszaal Van Jehovah's Getuigen**\n<https://goo.gl/maps/pbTxo6DKFXy>",
  "!kwakkie" : "**Gym: Kwakkie Verf**\n<https://goo.gl/maps/ruBbC96Mk1L2>",
  "!library" : "**Gym: Library TU Delft**\n<https://goo.gl/maps/VB27CE8egKG2>",
  "!maria" : "**Gym: Maria van Jesse kerk**\n<https://goo.gl/maps/4csETP8VSq62>",
  "!mijlpaal" : "**Gym: Mijlpaal**\n<https://goo.gl/maps/Zfj68NhETTS2>",
  "!molen de" : "**Gym: Molen De Klokkenmaker**\n<https://goo.gl/maps/Dj8Vx6FxbM62>",
  "!molen steen" : "**Gym: Molen Steen**\n<https://goo.gl/maps/cumNzZkTDkN2>",
  "!monument" : "**Gym: Monument JC Van Marken**\n<https://goo.gl/maps/hE8sKBJCpFy>",
  "!moose" : "**Gym: Moose Toy**\n<https://goo.gl/maps/9zBgbusGJbw>",
  "!mural" : "**Gym: Mural Pootstraat Carthuyzerstraat**\n<https://goo.gl/maps/cAy8ifVBgit>",
  "!nep" : "**Gym: Nep Ruïne**\n<https://goo.gl/maps/FqJQKw1jnBw>",
  "!nieuwe" : "**Gym: Nieuwe Kerk**\n<https://goo.gl/maps/muAF9RW6e3U2>",
  "!old" : "**Gym: Old Town Wall**\n<https://goo.gl/maps/z3XgKDttVxN2>",
  "!overkapping" : "**Gym: Overkapping Nr 5**\n<https://goo.gl/maps/uo2UzHiYS132>",
  "!paddestoelen" : "**Gym: Paddestoelen**\n<https://goo.gl/maps/U6PmwMxX5382>",
  "!paint" : "**Gym: Paint Jobs**\n<https://goo.gl/maps/3LW1TyqmFUT2>",
  "!papegaaien" : "**Gym: Papegaaien**\n<https://goo.gl/maps/8wwDTDqxxet>",
  "!plaquette" : "**Gym: Plaquette op bank**\n<https://goo.gl/maps/DjkYPsFRez82>",
  "!playground brahmslaan" : "**Gym: Playground Brahmslaan**\n<https://goo.gl/maps/EQTAJqWWshL2>",
  "!playground straat" : "**Gym: Playground Straat van Ormoes**\n<https://goo.gl/maps/LUroxsba6eP2>",
  "!playground vivaldilaan" : "**Gym: Playground Vivaldilaan**\n<https://goo.gl/maps/Sx4CwasGcju>",
  "!prinses" : "**Gym: Prinses Irene Tunnel**\n<https://goo.gl/maps/y9tMD3yrRc72>",
  "!public" : "**Gym: Public Library**\n<https://goo.gl/maps/26GDpDcz1gt>",
  "!race" : "**Gym: Race Planet Delft**\n<https://goo.gl/maps/TGuxkCTzPBT2>",
  "!relief" : "**Gym: Reliëf Driemaster Den Hoorn**\n<https://goo.gl/maps/4ThC211kxEm>",
  "!royal" : "**Gym: Royal Blue Bench**\n<https://goo.gl/maps/quM5tfFo8gH2>",
  "!seats" : "**Gym: Seats**\n<https://goo.gl/maps/Zo3UYRuvgVF2>",
  "!solar" : "**Gym: Solar Panel Art Sculpture**\n<https://goo.gl/maps/1HcF9hMXNrL2>",
  "!space engineering" : "**Gym: Space Engineering Faculty**\n<https://goo.gl/maps/kb4EmbwywYS2>",
  "!space rocket" : "**Gym: Space Rocket**\n<https://goo.gl/maps/T2so1vhEBGF2>",
  "!speelplastiek" : "**Gym: Speelplastiek Paarden**\n<https://goo.gl/maps/7TW2opLBW3p>",
  "!speeltuintje" : "**Gym: Speeltuintje Van Nora en Zoë**\n<https://goo.gl/maps/63f6kBZzr282>",
  "!stadhuis" : "**Gym: Stadhuis Delft**\n<https://goo.gl/maps/VDDXxhaAm922>",
  "!stadsherberg" : "**Gym: Stadsherberg De Mol**\n<https://goo.gl/maps/DfJUyD2AebE2>",
  "!stalpaert" : "**Gym: Stalpaert van der Wiele Statue**\n<https://goo.gl/maps/SWTWpzzBA6p>",
  "!station" : "**Gym: Station Delft-Zuid**\n<https://goo.gl/maps/UUuZexYicuS2>",
  "!statue " : "**Gym: Statue Of Prometheus**\n<https://goo.gl/maps/C4Jtr7HKyVB2>",
  "!stop" : "**Gym: Stop Child Labor Wall Painting**\n<https://goo.gl/maps/uwVfaadDRyQ2>",
  "!street" : "**Gym: Street Art**\n<https://goo.gl/maps/5ETxB6masnr>",
  "!sudden" : "**Gym: Sudden Cow**\n<https://goo.gl/maps/tjd9BC6qXyG2>",
  "!technische" : "**Gym: Technische Universiteit Delft - EWI**\n<https://goo.gl/maps/nMzwudtx8sS2>",
  "!whale" : "**Gym: The Whale**\n<https://goo.gl/maps/JzYRD9ZdQmn>",
  "!tiny" : "**Gym: Tiny Castle**\n<https://goo.gl/maps/KFBsFjDAjVp>",
  "!tno" : "**Gym: TNO**\n<https://goo.gl/maps/fE81ibPTcpR2>",
  "!tu delft - christiaan" : "**Gym: TU Delft - Christiaan Huygens Statue**\n<https://goo.gl/maps/5XgjKNUJMEm>",
  "!tu delft christiaan" : "**Gym: TU Delft - Christiaan Huygens Statue**\n<https://goo.gl/maps/5XgjKNUJMEm>",
  "!tu delft pyramide" : "**Gym: TU Delft Pyramide**\n<https://goo.gl/maps/HuvMJPUacU92>",
  "!2 haasje" : "**Gym: Twee haasje over spelende kinderen**\n<https://goo.gl/maps/JM76fQWjjC92>",
  "!twee" : "**Gym: Twee haasje over spelende kinderen**\n<https://goo.gl/maps/JM76fQWjjC92>",
  "!uitkijkpunt" : "**Gym: Uitkijkpunt**\n<https://goo.gl/maps/Zj7vPbr4sER2>",
  "!uitlaatstrook" : "**Gym: Uitlaatstrook**\n<https://goo.gl/maps/EGnxgXEJaTq>",
  "!vanons" : "**Gym: VanOns**\n<https://goo.gl/maps/HFxZfao4QRN2>",
  "!veld" : "**Gym: Veld 23**\n<https://goo.gl/maps/AqfHtcSczH82>",
  "!verkeer" : "**Gym: Verkeer**\n<https://goo.gl/maps/Rps8xih9y3v>",
  "!veulentje" : "**Gym: Veulentje**\n<https://goo.gl/maps/LYnU2UDUDpF2>",
  "!voormalige" : "**Gym: Voormalige Universiteitsbibliotheek**\n<https://goo.gl/maps/JVtRcbL2ecx>",
  "!vrouw" : "**Gym: Vrouw Met Bloemen**\n<https://goo.gl/maps/KCUd4GiCAWK2>",
  "!wapenschild" : "**Gym: Wapenschild Holland**\n<https://goo.gl/maps/RpJDxyYk4QM2>",
  "!watertoren" : "**Gym: Watertoren**\n<https://goo.gl/maps/SjjGCspruhM2>",
  "!wijkcentrum" : "**Gym: Wijkcentrum De Parel**\n<https://goo.gl/maps/q9gSyAfqcPq>",
  "!wild" : "**Gym: Wild Bee House**\n<https://goo.gl/maps/Emy3RmYRtYx>",
  "!willem" : "**Gym: Willem van Oranje (Willem de Zwijger)**\n<https://goo.gl/maps/B98NGDnXYcP2>",
  "!wood" : "**Gym: Wood Frog**\n<https://goo.gl/maps/cxT5hEw8vHK2>",
  "!world" : "**Gym: World Art Delft**\n<https://goo.gl/maps/dVww6WFVY9u>",
  "!zeehond" : "**Gym: Zeehond**\n<https://goo.gl/maps/Qm9bmcStv322>",
  "!zoas" : "**Gym: Zoäs Birdhouse**\n<https://goo.gl/maps/gejprGbGVcL2>",
  "!zonnewijzer" : "**Gym: Zonnewijzer**\n<https://goo.gl/maps/U19CmCWSus82>",
  "!zwarte" : "**Gym: Zwarte Zwaan**\n<https://goo.gl/maps/jvts7BQZzC42>"

};
if (gymarray[message.content]) {
   message.channel.send(gymarray[message.content]); } else


//give trusted role, admin only
//werkt wel, maar ik wil dat de moderator role op dezelfde manier gedetecteerd kan worden als de makingdelftblueagain role.
     //nu is het namelijk niet te testen op verschillende servers omdat de roleID anders is...

 if (message.content.startsWith('!add')) {
 if(message.member.roles.has(moderator)) {
 let member = message.mentions.members.first();
 let role = message.guild.roles.find("name", "makingdelftblueagain");
 member.addRole(role).catch(console.error);
 message.channel.send('Welkom ' + member + ', je bent nu officieel toegevoegd! In het kanaal #welkom is te lezen hoe deze discord werkt, lees dat dus vooral eens door! ;)');
 } else { message.reply('Leden verifieren kan alleen door een moderator worden gedaan') }
 message.delete() }  else

//request gym roles

 if (message.content.startsWith('!+centrum')) {
 let role = message.guild.roles.find("name", "Centrum");
 message.member.addRole(role).catch(console.error);
 message.reply('Je hebt nu toegang tot het centrum gym kanaal!');
 message.delete()
 } else
 if (message.content.startsWith('!+hoven')) {
 let role = message.guild.roles.find("name", "Hoven");
 message.member.addRole(role).catch(console.error);
 message.reply('Je hebt nu toegang tot het hoven gym kanaal!');
 message.delete()
 } else
 if (message.content.startsWith('!+tu')) {
 let role = message.guild.roles.find("name", "TU");
 message.member.addRole(role).catch(console.error);
 message.reply('Je hebt nu toegang tot het tu-wijk gym kanaal!');
 message.delete()
 } else
 if (message.content.startsWith('!+tanthof')) {
 let role = message.guild.roles.find("name", "Tanthof");
 message.member.addRole(role).catch(console.error);
 message.reply('Je hebt nu toegang tot het tanthof gym kanaal!');
 message.delete()
 } else
 if (message.content.startsWith('!+noord')) {
 let role = message.guild.roles.find("name", "DelftNoord");
 message.member.addRole(role).catch(console.error);
 message.reply('Je hebt nu toegang tot het Noord-Delft gym kanaal!');
 message.delete()
 } else
 if (message.content.startsWith('!+oost')) {
 let role = message.guild.roles.find("name", "DelftOost");
 message.member.addRole(role).catch(console.error);
 message.reply('Je hebt nu toegang tot het Oost-Delft gym kanaal!');
 message.delete()
 } else
 if (message.content.startsWith('!+english')) {
 let role = message.guild.roles.find("name", "English");
 message.member.addRole(role).catch(console.error);
 message.reply('You now have access to the English channel!');
 message.delete()
 } else

//remove gym roles

 if (message.content.startsWith('!-centrum')) {
 let role = message.guild.roles.find("name", "Centrum");
 message.member.removeRole(role).catch(console.error);
 message.reply('Je hebt nu geen toegang meer tot het centrum gym kanaal!');
 message.delete()
 } else
 if (message.content.startsWith('!-hoven')) {
 let role = message.guild.roles.find("name", "Hoven");
 message.member.removeRole(role).catch(console.error);
 message.reply('Je hebt nu geen toegang meer tot het hoven gym kanaal!');
 message.delete()
 } else
 if (message.content.startsWith('!-tu')) {
 let role = message.guild.roles.find("name", "TU");
 message.member.removeRole(role).catch(console.error);
 message.reply('Je hebt nu geen toegang meer tot het tu-wijk gym kanaal!');
 message.delete()
 } else
 if (message.content.startsWith('!-tanthof')) {
 let role = message.guild.roles.find("name", "Tanthof");
 message.member.removeRole(role).catch(console.error);
 message.reply('Je hebt nu geen toegang meer tot het tanthof gym kanaal!');
 message.delete()
 } else
 if (message.content.startsWith('!-noord')) {
 let role = message.guild.roles.find("name", "DelftNoord");
 message.member.removeRole(role).catch(console.error);
 message.reply('Je hebt nu geen toegang meer tot het Noord-Delft gym kanaal!');
 message.delete()
 } else
 if (message.content.startsWith('!-oost')) {
 let role = message.guild.roles.find("name", "DelftOost");
 message.member.removeRole(role).catch(console.error);
 message.reply('Je hebt nu geen toegang meer tot het Oost-Delft gym kanaal!');
 message.delete()
 } else
 if (message.content.startsWith('!-english')) {
 let role = message.guild.roles.find("name", "English");
 message.member.removeRole(role).catch(console.error);
 message.reply('You now have lost access to the English channel!');
 message.delete()
 } else

//delete messages (help! :P werkt niet)

if (message.content.startsWith('!delete')) {
if(message.member.roles.has(moderator)) {
message.channel.bulkDelete(11);
} else { message.reply('Alleen moderators kunnen berichten verwijderen') }
message.delete() }
});

//welcome new users

client.on('guildMemberAdd', member => {
setTimeout(() => {
member.guild.defaultChannel.send(`Welkom op de Mystic Delft Discord en leuk dat je onze groep wilt versterken, ${member}!\nOm toegang te krijgen tot de volledige groep vragen wij een screenshot van je pokemon go profiel (dat is waar je naast je buddy staat). Als je deze kan uploaden zal een van de moderators je zo snel mogelijk te woord staan.\n\nWelcome to our Mystic Delft Discord group, ${member}!\nIn order to get full access to our server, we would like to verify you are indeed mystic. If  you would be so kind as to upload a screenshot of your Pokémon Go profile (where you are standing next to your buddy) one of our moderators will contact you as soon as possible.`);},1000);
});
