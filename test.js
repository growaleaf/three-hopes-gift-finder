const CHARACTERS = require("./data.js");

let pass = 0;
let fail = 0;

function assert(cond, msg) {
  if (cond) {
    pass++;
  } else {
    fail++;
    console.error("FAIL: " + msg);
  }
}

function findChar(name) {
  return CHARACTERS.find((c) => c.name === name);
}

function names(gifts) {
  return gifts.map((g) => g.name);
}

assert(CHARACTERS.length === 47, `character count should be 47, got ${CHARACTERS.length}`);

const edelgard = findChar("Edelgard");
assert(!!edelgard, "Edelgard should exist");
assert(names(edelgard.preferred).includes("Carnation"), "Edelgard preferred includes Carnation");
assert(names(edelgard.disliked).includes("Goddess Statuette"), "Edelgard disliked includes Goddess Statuette");

const hubert = findChar("Hubert");
assert(!!hubert, "Hubert should exist");
assert(names(hubert.preferred).includes("Board Game"), "Hubert preferred includes Board Game");

const dedue = findChar("Dedue");
assert(!!dedue, "Dedue should exist");
assert(names(dedue.preferred).includes("Watering Can"), "Dedue preferred includes Watering Can");

const anna = findChar("Anna");
assert(!!anna, "Anna should exist (name has the source's trailing asterisk stripped)");
assert(anna.footnote && anna.footnote.length > 0, "Anna's footnote is disclosed");

const bylethM = findChar("Byleth (Male)");
assert(!!bylethM, "Byleth (Male) should exist");
assert(bylethM.disliked.length === 0, "Byleth (Male) disliked is empty (source said 'None')");

for (const c of CHARACTERS) {
  assert(typeof c.name === "string" && c.name.length > 0, `character has a name: ${JSON.stringify(c)}`);
  assert(Array.isArray(c.preferred) && Array.isArray(c.disliked),
    `character ${c.name} has preferred/disliked arrays`);
  for (const g of c.preferred.concat(c.disliked)) {
    assert(typeof g.name === "string" && g.name.length > 0,
      `${c.name} gift has a name`);
    assert(typeof g.stars === "number" && g.stars >= 1 && g.stars <= 5,
      `${c.name} gift "${g.name}" has a plausible star rating, got ${g.stars}`);
  }
}

console.log(`${pass} passed, ${fail} failed`);
process.exit(fail > 0 ? 1 : 0);
