var crvena = 3;
var zelena = 5;
var plava = 7;
var boje;

function perfect(boje) {
  if (crvena % 3 === 0) {
    if (zelena % 5 === 0) {
      if (plava % 7 === 0) {
        return "Da";
      }
    }
  }
  return "Ne";
}

document.getElementById("set").innerHTML = perfect(boje);
