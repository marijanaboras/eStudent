const dani = [{
    dan: "14.1.2021",
    temp: 25 
  },
  {
    dan: "15.1.2021",
    temp: 24
  },
  {
    dan: "16.1.2021",
    temp: 19
  },
  {
    dan: "17.1.2021",
    temp: 24
}];

var temper = JSON.stringify(dani).replace(/[\[\]{}"]+/g,"").replace(/[\[\],]+/g,"<br>");;
document.getElementById("petlja1").innerHTML = temper;

var i = 0;
var temp2 = 0;
var temp3 = 0;
var pp = 0;

while (dani[i].temp > 20) {
    document.getElementById("petlja2").innerHTML += "Imate dovoljno energije za grijanje <br>";
    temp2 += dani[i].temp;
    i++;
} document.getElementById("petlja3").innerHTML = "Morate prijeći na grijanje na plin";
temp3 = temp2 + dani[i].temp;
pp = temp3 / (i+1);
var ppFix = pp.toFixed(2);
document.getElementById("petlja4").innerHTML = "Prosjek temepratura " + temp3 + " / " + (i+1) + " = " + ppFix;


