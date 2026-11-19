// تشغيل: node tests/run.js  (بدون أي مكتبات)
const fs = require("fs"), path = require("path"), cp = require("child_process");
const R = f => fs.readFileSync(path.join(__dirname, "..", f), "utf8");
const bad = []; const fail = m => bad.push(m);
for (const f of ["app.js", "curriculum.js", "sw.js"]) { try { cp.execFileSync("node", ["--check", path.join(__dirname, "..", f)], { stdio: "pipe" }); } catch (e) { fail("syntax " + f); } }
const { CURRICULUM, UNIT_TESTS } = new Function(R("curriculum.js") + ";return {CURRICULUM,UNIT_TESTS}")();
const nodes = CURRICULUM.flatMap(u => u.nodes), ids = nodes.map(n => n.id);
ids.filter((x, i) => ids.indexOf(x) !== i).forEach(x => fail("dup id " + x));
const okAns = q => q.ans >= 0 && q.ans < q.opts.length && new Set(q.opts).size === q.opts.length;
for (const n of nodes) {
  if (n.type === "lesson") { if (!n.vocab?.length) fail(n.id + " no vocab"); if (!okAns(n.quiz)) fail(n.id + " quiz"); n.vocab.forEach((v, i) => { if (!v.de || !v.ar) fail(n.id + " vocab " + i); }); }
  if (n.type === "reading") n.passages.forEach((p, i) => { if (typeof p.isTrue !== "boolean" || !p.text || !p.explanation) fail(n.id + " passage " + i); });
}
UNIT_TESTS.forEach(t => t.questions.forEach((q, i) => { if (!okAns(q)) fail(t.id + " q" + i); }));
// جنس الأسماء: der/den/dem=مذكر، die=مؤنث، das=محايد (الجمع يُتجاهل)
const G = { Mann: "m", Frau: "f", Kind: "n", Apfel: "m", Tasche: "f", Stuhl: "m", Bahnhof: "m", Apotheke: "f", Supermarkt: "m", Miete: "f", Wetter: "n", Zimmer: "n", Termin: "m", Kurs: "m", Brot: "n", Jacke: "f", Speisekarte: "f", Wohnung: "f", Zug: "m", Essen: "n", Text: "m", Familie: "f", Kilo: "n", "T-Shirt": "n", Hemd: "n", Auto: "n", Film: "m", Arzt: "m", Tisch: "m", Bett: "n" };
const PL = /^(Männer|Frauen|Kinder|Eltern|Äpfel|Geschwister)$/, unknown = new Set();
for (const n of nodes) for (const v of n.vocab || []) for (const m of v.de.matchAll(/\b(der|den|dem|die|das)\s+([A-ZÄÖÜ][\wäöüß-]*)/gi)) {
  const [, art, noun] = m; if (!/^[A-ZÄÖÜ]/.test(noun) || PL.test(noun)) continue;
  const want = G[noun]; if (!want) { unknown.add(noun); continue; }
  const got = /^die$/i.test(art) ? "f" : /^das$/i.test(art) ? "n" : "m";
  if (got !== want) fail(`gender ${n.id}: "${m[0]}" (${noun} = ${want})`);
}
// دوال نقية من app.js
const app = R("app.js"), fn = name => (app.match(new RegExp("function " + name + "[\\s\\S]*?\\n    }\\n")) || app.match(new RegExp("function " + name + "[\\s\\S]*?\\n}\\n")))[0];
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
