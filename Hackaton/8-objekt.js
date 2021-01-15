class Kljuc {
  constructor(ime, broj) {
    this.ime = ime;
    this.broj = broj;
    this.saved();
  }
  saved() {
    document.getElementById("klase").innerHTML = (`Uspješno je stvoren ključ ${this.broj} za osobu ${this.ime}`);
  }
}

let k = new Kljuc("estudent", 21);
