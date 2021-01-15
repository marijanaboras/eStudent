var vrijeme = 5;
if (vrijeme >= 6 && vrijeme <= 10) {
    aparat = "Dobro jutro";
    document.getElementById("uvjeti2").innerHTML = aparat;
}
else if (vrijeme > 10 && vrijeme <= 18) {
    aparat = "Dobar dan";
    document.getElementById("uvjeti2").innerHTML = aparat;
}
else if (vrijeme > 18 && vrijeme <= 22) {
    aparat = "Hej, već je kasno, bolje bi bilo da popiješ čaj";
    document.getElementById("uvjeti2").innerHTML = aparat;
}
else {
    aparat = "Pusti me da spavam";
    document.getElementById("uvjeti2").innerHTML = aparat;
}