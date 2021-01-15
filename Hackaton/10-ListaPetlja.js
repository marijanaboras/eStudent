var plocice = [40, 40, 39, 36, 40, 40, 40, 39, 35, 31, 40, 40, 37, 40, 40, 39, 39, 40, 40, 40];
var txt = "";
var txt2 = plocice.map(myFunction);

// document.getElementById("listaPetlja").innerHTML = txt2;

// function myFunction(value, index, array) {
//   return 40 - value;
// }
var num = 0;
plocice.forEach(myFunction);

function myFunction(item) {
  num = 40 - item;
  if(num > 0) {
    document.getElementById("listaPetlja").innerHTML += "Neispravno, nedostaje " + num + " plocica <br>";
  }
}