// Otázky kvízu – čerpané z prezentácie ZŠ 2027/2028.
// a = index správnej odpovede (0 = A, 1 = B, ...). Posledná otázka je finálová (dvojnásobné body).

// >>> TU DOPLŇ TERMÍN DNA OTVORENÝCH DVERÍ <<<
const DOD = {
  correct: "DOPLNIŤ DÁTUM",
  wrong: ["DOPLNIŤ 2", "DOPLNIŤ 3", "DOPLNIŤ 4"],
};

const TEAMS = [
  { id: 0, name: "Červení", color: "#ff5c7a", key: "1" },
  { id: 1, name: "Žltí",    color: "#ffd23f", key: "2" },
  { id: 2, name: "Zelení",  color: "#2af598", key: "3" },
];

const QUESTIONS = [
  { t: "Koľko študijných odborov ponúka škola?",
    o: ["3", "4", "5", "7"], a: 2,
    x: "Škola ponúka 5 odborov a 3 IT špecializácie." },
  { t: "Na ktorej ulici sa škola nachádza?",
    o: ["Nábrežná", "Športová", "Hlavná", "Školská"], a: 0,
    x: "SPŠIT sídli na Nábrežnej 1325 v Kysuckom Novom Meste." },
  { t: "Ktorý odbor má kód 2561 M?",
    o: ["Mechatronika", "Informačné a sieťové technológie", "Elektrotechnika", "Logistika"], a: 1,
    x: "2561 M = Informačné a sieťové technológie." },
  { t: "Ktorá z týchto možností NIE JE IT špecializácia na škole?",
    o: ["Herný vývoj a dizajn", "Siete a kyberbezpečnosť", "Kaderníctvo a kozmetika", "Dual – programovanie v praxi"], a: 2,
    x: "IT špecializácie: Dual, Herný vývoj a dizajn, Siete a kyberbezpečnosť." },
  { t: "Z ktorých predmetov sú prijímacie skúšky?",
    o: ["Matematika a angličtina", "Slovenčina a matematika", "Fyzika a informatika", "Dejepis a geografia"], a: 1,
    x: "Prijímacie skúšky: slovenský jazyk a literatúra + matematika." },
  { t: "Ktorý odbor spája strojárstvo, elektroniku, automatizáciu a programovanie riadiacich systémov?",
    o: ["Mechatronika", "Elektrotechnika", "Inteligentné technológie", "Logistika"], a: 0,
    x: "Mechatronika (2387 M): automatizácia, CNC, PLC a MCU." },
  { t: "Kto robí prijímacie skúšky?",
    o: ["Len uchádzači s horším prospechom", "Len uchádzači o IT odbory", "Nikto, berú sa podľa známok", "Všetci uchádzači"], a: 3,
    x: "Prijímacie skúšky robia všetci uchádzači." },
  { t: "Čo všetko sa zohľadňuje pri prideľovaní bodov?",
    o: ["Len vysvedčenie", "Testovanie 9, vysvedčenie a mimoškolské aktivity", "Len Testovanie 9", "Len pohovor"], a: 1,
    x: "Body: výsledky Testovania 9, vysvedčenie a mimoškolské aktivity." },
  { t: "V akom grafickom systéme sa v odbore Logistika čítajú technické výkresy?",
    o: ["Photoshop", "Minecraft", "AUTOCAD", "Excel"], a: 2,
    x: "Logistika: AUTOCAD, účtovníctvo v OMEGA a OLYMP a písanie všetkými desiatimi." },
  { t: "Ktorý odbor ponúka možnosť osvedčenia podľa § 21?",
    o: ["Mechatronika", "Elektrotechnika", "Logistika", "Informačné a sieťové technológie"], a: 1,
    x: "Elektrotechnika – slaboprúd, silnoprúd, fotovoltika a možnosť osvedčenia podľa § 21." },
  { t: "Čo ti umožní program Erasmus+?",
    o: ["Skrátiť štúdium o rok", "Odborné stáže v zahraničí a certifikát mobility", "Neplatiť stravu", "Voľno každý piatok"], a: 1,
    x: "Erasmus+ = odborné stáže v zahraničí a získanie certifikátu mobility." },
  { t: "Koľko záujmových krúžkov škola ponúka?",
    o: ["Asi 5", "Okolo 10", "Viac ako 20", "Žiadne"], a: 2,
    x: "Viac ako 20 krúžkov – od programovania a robotiky až po šport, jazyky, fotografiu a šach." },
  { t: "Kde nájdeš informácie o ubytovaní v internáte?",
    o: ["internatspsit.sk", "ubytovanie.com", "booking.com", "internat.edu"], a: 0,
    x: "Viac informácií: internatspsit.sk." },
  { t: "Kto ti pri zápise pomôže, ak potrebuješ osobitnú podporu?",
    o: ["Školník", "Výchovný poradca", "Vrátnik", "Kuchárka"], a: 1,
    x: "Pri zápise pomáha výchovný poradca školy." },
  { t: "FINÁLOVÁ OTÁZKA – Kedy bude Deň otvorených dverí na našej škole?",
    o: [DOD.correct, ...DOD.wrong], a: 0, final: true,
    x: "Príď sa pozrieť, vyskúšať si to a vybrať si svoju špecializáciu!" },
];
