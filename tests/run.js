// تشغيل: node tests/run.js  (بدون أي مكتبات)
const fs = require("fs"), path = require("path"), cp = require("child_process");
const R = f => fs.readFileSync(path.join(__dirname, "..", f), "utf8");
const bad = []; const fail = m => bad.push(m);
for (const f of ["app.js", "curriculum.js", "sw.js"]) { try { cp.execFileSync("node", ["--check", path.join(__dirname, "..", f)], { stdio: "pipe" }); } catch (e) { fail("syntax " + f); } }
const { CURRICULUM, UNIT_TESTS } = new Function(R("curriculum.js") + ";return {CURRICULUM,UNIT_TESTS}")();
const nodes = CURRICULUM.flatMap(u => u.nodes), ids = nodes.map(n => n.id);
const alphabetLesson = nodes.find(n => n.id === "l16"), introLesson = nodes.find(n => n.id === "l1"), specialLettersLesson = nodes.find(n => n.id === "l17");
if (!alphabetLesson || alphabetLesson.vocab.some(v => /Wie schreibt man Ihren Namen|Mein Name ist Sara/.test(v.de))) fail("name introduction phrases should be in the introduction lesson, not the alphabet lesson");
if (!introLesson || !introLesson.vocab.some(v => v.de === "Wie schreibt man Ihren Namen?")) fail("name spelling phrase is missing from the introduction lesson");
if (!specialLettersLesson || !["Ä", "Ö", "Ü", "ß"].every(letter => specialLettersLesson.vocab.some(v => v.de === letter && v.kind === "letter" && v.speak))) fail("special letters must be separate from their example words");
if (!specialLettersLesson.vocab.some(v => v.de === "Mädchen") || specialLettersLesson.vocab.some(v => /–/.test(v.de))) fail("letter example words must have their own separate cards");
if (CURRICULUM.length !== 11) fail("expected ten focused A1 units plus exam unit");
if (UNIT_TESTS.length !== CURRICULUM.length) fail("unit test count does not match unit count");
const allIds = [...ids, ...UNIT_TESTS.map(t => t.id)];
allIds.filter((x, i) => allIds.indexOf(x) !== i).forEach(x => fail("duplicate path/test id " + x));
ids.filter((x, i) => ids.indexOf(x) !== i).forEach(x => fail("dup id " + x));
const okAns = q => q.ans >= 0 && q.ans < q.opts.length && new Set(q.opts).size === q.opts.length;
for (const n of nodes) {
  if (n.type === "lesson") { if (!n.vocab?.length) fail(n.id + " no vocab"); if (!okAns(n.quiz)) fail(n.id + " quiz"); (n.extra || []).forEach((q, i) => { if (!okAns(q)) fail(n.id + " extra " + i); }); n.vocab.forEach((v, i) => { if (!v.de || !v.ar) fail(n.id + " vocab " + i); }); }
  if (n.type === "reading") n.passages.forEach((p, i) => { if (typeof p.isTrue !== "boolean" || !p.text || !p.explanation) fail(n.id + " passage " + i); });
}
UNIT_TESTS.forEach(t => t.questions.forEach((q, i) => { if (!okAns(q)) fail(t.id + " q" + i); }));
// جنس الأسماء: der/den/dem=مذكر، die=مؤنث، das=محايد (الجمع يُتجاهل)
const G = { Mann: "m", Frau: "f", Kind: "n", Apfel: "m", Tasche: "f", Stuhl: "m", Bahnhof: "m", Apotheke: "f", Supermarkt: "m", Miete: "f", Wetter: "n", Zimmer: "n", Termin: "m", Kurs: "m", Brot: "n", Jacke: "f", Speisekarte: "f", Wohnung: "f", Zug: "m", Essen: "n", Text: "m", Familie: "f", Kilo: "n", "T-Shirt": "n", Hemd: "n", Auto: "n", Film: "m", Arzt: "m", Tisch: "m", Bett: "n", Park: "m", Bank: "f", Post: "f", Kino: "n", Bäckerei: "f", Hobby: "n", Fußball: "m", Musik: "f", Sport: "m", Kellner: "m", Rechnung: "f", Frühstück: "n", Abendessen: "n", Obst: "n", Küche: "f", Bad: "n", Schlafzimmer: "n", Wohnzimmer: "n", Garten: "m", Schrank: "m", Nachbar: "m", Flugzeug: "n", Fahrrad: "n", "U-Bahn": "f", Ticket: "n", Koffer: "m", Hotel: "n", Mittwoch: "m", Donnerstag: "m", Samstag: "m", Sonntag: "m", Monat: "m", Stunde: "f", Minute: "f", Auge: "n", Ohr: "n", Mund: "m", Nase: "f", Bein: "n", Krankenhaus: "n", Preis: "m", Schuh: "m", Flughafen: "m", Reise: "f", Restaurant: "n", Glas: "n", Flasche: "f", Fleisch: "n", Fisch: "m", Opa: "m", Oma: "f", Onkel: "m", Tante: "f", Sohn: "m", Tochter: "f", Kollege: "m", Chef: "m", Markt: "m", Geschäft: "n", Bibliothek: "f", Museum: "n", Brücke: "f", Haltestelle: "f", Ampel: "f", Tomate: "f", Kartoffel: "f", Gurke: "f", Orange: "f", Kirsche: "f", Birne: "f", Salat: "m", Zucker: "m", Salz: "n", Pfeffer: "m", Honig: "m", Butter: "f", Käse: "m", Mehl: "n", Joghurt: "m", Marmelade: "f", Fieber: "n", Husten: "m", Erkältung: "f", Tablette: "f", Medikament: "n", Rezept: "n", Urlaub: "m", Meer: "n", Strand: "m", Pass: "m", Gepäck: "n", Reservierung: "f", Handy: "n", Computer: "m", Telefon: "n", Nummer: "f", Passwort: "n", Drucker: "m", Fahrer: "m", Verkäufer: "m", Koch: "m", Student: "m", Studentin: "f", Polizist: "m", Bauer: "m", Apotheker: "m", Pullover: "m", Kleid: "n", Rock: "m", Socke: "f", Mantel: "m", Mütze: "f", Gürtel: "m", Brille: "f", Büro: "n", Firma: "f", Kunde: "m", Brief: "m", Papier: "n", Kuli: "m", Pause: "f", Feierabend: "m", Hund: "m", Katze: "f", Vogel: "m", Pferd: "n", Baum: "m", Blume: "f", Fluss: "m", Berg: "m", See: "m", Himmel: "m", Frühling: "m", Herbst: "m", Cent: "m", Bargeld: "n", Zahl: "f", Tasse: "f", Teller: "m", Löffel: "m", Gabel: "f", Messer: "n", Topf: "m", Kühlschrank: "m", Dusche: "f", Spiegel: "m", Fernseher: "m", Schlüssel: "m", Tüte: "f", Kasse: "f", Geschenk: "n", Gast: "m", Party: "f", Wochenende: "n", Ausweis: "m", Adresse: "f", Formular: "n", Finger: "m", Fuß: "m", Knie: "n", Rücken: "m", Hals: "m", Gesicht: "n", Haar: "n", Zahn: "m", Herz: "n", Balkon: "m", Aufzug: "m", Flur: "m", Boden: "m", Wand: "f", Dach: "n", Keller: "m", Licht: "n", Teppich: "m", Heizung: "f", Polizei: "f", Feuerwehr: "f", Notfall: "m", Hilfe: "f", Auskunft: "f", Eingang: "m", Ausgang: "m", Toilette: "f", Information: "f", Stadtplan: "m", Holz: "n", Metall: "n", Plastik: "n", Wolle: "f", Leder: "n", Gold: "n", Silber: "n", Stein: "m", Verkehr: "m", Stau: "m", Taxi: "n", Kreuzung: "f", Fußgänger: "m", Parkplatz: "m", Tankstelle: "f", Autobahn: "f", Führerschein: "m", Unfall: "m", Klasse: "f", Prüfung: "f", Hausaufgabe: "f", Frage: "f", Antwort: "f", Wort: "n", Satz: "m", Aufgabe: "f", Note: "f", Heft: "n", Tafel: "f", Unterricht: "m", Hochzeit: "f", Fest: "n", Feier: "f", Feiertag: "m", Einladung: "f", Kerze: "f", Ballon: "m", Internet: "n", Webseite: "f", Programm: "n", Datei: "f", Tastatur: "f", Maus: "f", Bildschirm: "m", Akku: "m", Kabel: "n", Video: "n", Suppe: "f", Pizza: "f", Hähnchen: "n", Gericht: "n", Saft: "m", Limonade: "f", Eis: "n", Soße: "f", Getränk: "n", Nachtisch: "m", Vorspeise: "f", Morgen: "m", Mittag: "m", Nachmittag: "m", Abend: "m", Nacht: "f", Anfang: "m", Ende: "n", Zukunft: "f", Moment: "m", Sekunde: "f", Schweiz: "f", Türkei: "f", Kuh: "f", Schaf: "n", Huhn: "n", Löwe: "m", Affe: "m", Hase: "m", Wald: "m", Regen: "m", Schnee: "m", Wind: "m", Wiese: "f", Gehalt: "n", Lohn: "m", Vertrag: "m", Steuer: "f", Versicherung: "f", Problem: "n", Lösung: "f", Fehler: "m", Vorschlag: "m", Idee: "f", Erdbeere: "f", Traube: "f", Zitrone: "f", Melone: "f", Pflaume: "f", Karotte: "f", Spinat: "m", Kohl: "m", Paprika: "f", Bohne: "f", Erbse: "f", Sofa: "n", Sessel: "m", Regal: "n", Vorhang: "m", Kissen: "n", Decke: "f", Bild: "n", Schreibtisch: "m", Matratze: "f", Wecker: "m", Bluse: "f", Anzug: "m", Krawatte: "f", Schal: "m", Handschuh: "m", Stiefel: "m", Sandale: "f", Ring: "m", Kette: "f", Größe: "f", Farbe: "f", Pilot: "m", Bäcker: "m", Friseur: "m", Maler: "m", Anwalt: "m", Richter: "m", Soldat: "m", Schüler: "m", Techniker: "m", Journalist: "m", Musiker: "m", Spiel: "n", Mannschaft: "f", Ball: "m", Tor: "n", Training: "n", Schwimmbad: "n", Fitnessstudio: "n", Konzert: "n", Theater: "n", Ausstellung: "f", Visum: "n", Grenze: "f", Zoll: "m", Landung: "f", Flug: "m", Abfahrt: "f", Ankunft: "f", Bahnsteig: "m", Verspätung: "f", Sitzplatz: "m", Gesundheit: "f", Krankheit: "f", Verletzung: "f", Verband: "m", Salbe: "f", Schnupfen: "m", Schmerz: "m", Operation: "f", Krankenwagen: "m", Spritze: "f", Impfung: "f", Temperatur: "f", Grad: "m", Gewitter: "n", Nebel: "m", Sturm: "m", Mond: "m", Stern: "m", Erde: "f", Feuer: "n", Luft: "f", Gras: "n", Hälfte: "f", Viertel: "n", Mitte: "f", Mal: "n", Summe: "f", Welt: "f", Regierung: "f", Gesetz: "n", Wahl: "f", Meinung: "f", Sprache: "f", Kultur: "f", Religion: "f", Zeitung: "f", Nachricht: "f", Fernsehen: "n", Radio: "n", Schule: "f", Bus: "m", Verbindung: "f", Geldautomat: "m", Paket: "n", Buch: "n" };
const PL = /^(Männer|Frauen|Kinder|Eltern|Äpfel|Geschwister)$/, unknown = new Set();
for (const n of nodes) for (const v of n.vocab || []) for (const m of v.de.matchAll(/\b(der|den|dem|die|das)\s+([A-ZÄÖÜ][\wäöüß-]*)/gi)) {
  const [, art, noun] = m; if (!/^[A-ZÄÖÜ]/.test(noun) || PL.test(noun)) continue;
  const want = G[noun]; if (!want) { unknown.add(noun); continue; }
  const got = /^die$/i.test(art) ? "f" : /^das$/i.test(art) ? "n" : "m";
  if (got !== want) fail(`gender ${n.id}: "${m[0]}" (${noun} = ${want})`);
}
if (unknown.size) fail("unverified noun genders: " + [...unknown].join(", "));
// دوال نقية من app.js
const app = R("app.js");
if (!app.includes('item.lessonId === lesson.id || state.completed.includes(item.lessonId)')) fail("unlearned future vocabulary is used as distractors");
if (!app.includes('body?.dataset.practiceReviewed === "true"')) fail("lesson writing can be completed without AI review");
if (!app.includes("function parseAIChatReply")) fail("AI chat response formatting cleaner is missing");
const gxStart = app.indexOf("function openGoetheExam()");
const gxEnd = app.indexOf("function normGerman(t)", gxStart);
const gxFlow = app.slice(gxStart, gxEnd);
for (const part of ["gxWritingSection", "gxSpeakingSection", "reviewGoetheAnswer", "finishGoetheSkills"]) if (!gxFlow.includes(part)) fail("four-skill practice is missing " + part);
const gxScore = gxFlow.slice(gxFlow.indexOf("function finishGx()"), gxFlow.indexOf("async function reviewGoetheAnswer"));
if (gxScore.includes('state.completed.push("goethe-mock")')) fail("Goethe practice is completed before writing and speaking review");
if (!gxFlow.includes('dataset.reviewed !== "true"')) fail("Goethe practice can be completed without reviewing both productive skills");
if (!app.includes("title: " + String.fromCharCode(96) + "سؤال على العنصر")) fail("each vocabulary item must have an individual question slide");
const lessonFlow = app.slice(app.indexOf("function openLesson("), app.indexOf("function showLessonStep("));
if (lessonFlow.includes("reviewItems") || lessonFlow.includes("reviewIntro")) fail("lesson repeats all vocabulary after each item already had its own question");
if (!lessonFlow.includes("type: " + String.fromCharCode(34) + "vocabPractice" + String.fromCharCode(34))) fail("each word should be taught and tested within one focused step");
if (!app.includes('parent.dataset.answered = "true"')) fail("lesson quiz allows the same question to be answered repeatedly");
const worker = R("worker.example.js");
if (!worker.includes("/auth/v1/user") || !worker.includes("CHAT_LIMITER.limit({ key: user.id })")) fail("AI Worker must verify the account and rate-limit by user");
if (R("README.md").includes('OLLAMA_ORIGINS "*"')) fail("Ollama setup must not enable wildcard origins");
const fn = name => (app.match(new RegExp("function " + name + "[\\s\\S]*?\\n    }\\n")) || app.match(new RegExp("function " + name + "[\\s\\S]*?\\n}\\n")))[0];
const env = new Function(fn("escapeHtml") + fn("colorGermanArticles") + fn("normGerman") + ";return {colorGermanArticles,normGerman}")();
const eq = (a, b, m) => { if (a !== b) fail(m + `: ${a} ≠ ${b}`); };
eq(env.normGerman("Mädchen, schön!"), env.normGerman("Maedchen schoen"), "norm umlaut");
eq(env.normGerman("Straße"), env.normGerman("STRASSE"), "norm ß");
eq(env.colorGermanArticles("Das ist meine Familie."), "Das ist meine Familie.", "pronoun not colored");
eq(env.colorGermanArticles("die Männer"), "die Männer", "plural not colored");
if (!env.colorGermanArticles("die Frau").includes("article-f")) fail("feminine color");
console.log(`nodes ${nodes.length} | unit tests ${UNIT_TESTS.length} | unchecked nouns: ${[...unknown].join(", ") || "none"}`);
console.log(bad.length ? "FAIL\n" + bad.join("\n") : "ALL PASS");
process.exit(bad.length ? 1 : 0);
