const kupovina = {
    nogare: 4,
    lampa: 1,
    stolac: 4,
    zavjese: 'crvene'
};

var myString = JSON.stringify(kupovina).replace(/[\[\]{}"]+/g,"").replace(/[\[\],]+/g,"<br>");

document.getElementById("objekti").innerHTML = myString;