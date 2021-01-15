const magic = (podaci) => {
  let brojevi = podaci.split(" ");
  let kombinacije = 0;
  let uku = parseInt(brojevi[0], 10);
  let br1 = parseInt(brojevi[1], 10);
  let br2 = parseInt(brojevi[2], 10);
  for (let i = 0; i <= uku / br1; i++) {
    for (let j = 0; j <= uku / br2; j++) {
      let rez = i * br1 + j * br2;
      if (rez === uku) {
        kombinacije++;
      }
    }
  }
  return kombinacije;
};

document.getElementById("datoteke").innerHTML = "Pogledaj CONSOLU";

console.log(magic("8 1 2"));
