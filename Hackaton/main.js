// var konstrukcija = 943917;
// var kroviste = 153462;
// var stolarija = 132795;
// var fasada = 84825;
// var instalacije = 105595;
// var zavrsniRadovi = 182315;
// var opremanje = 96092;
// var troskovi = konstrukcija + kroviste + stolarija + fasada + instalacije + zavrsniRadovi + opremanje;

// document.getElementById("varijable").innerHTML = troskovi;

function callAll(jsfiles) {
    var src = document.createElement("script");
    src.setAttribute("type", "text/javascript");
    src.setAttribute("src", jsfiles);
    document.getElementsByTagName("head")[0].appendChild(src);
}
callAll("1-varijable.js");
callAll("2-Uvjeti.js");
callAll("3-Uvjeti2.js");
callAll("4-Stringovi.js");
callAll("5-Funkcije.js");
callAll("6-Objekti.js");
callAll("7-set.js");
callAll("8-objekt.js");
callAll("9-petlja.js");
callAll("10-ListaPetlja.js");
callAll("11-rekurzije.js");
callAll("12-set.js");
callAll("13-objekti.js");
callAll("14-rekurzije2.js");
callAll("15-SVE.js");
callAll("16-datoteke.js");
callAll("17-klaseStrDoc.js");
callAll("18-funkcijeObjekti.js");

