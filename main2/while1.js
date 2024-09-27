let number = parseInt(prompt("Entrez un nombre entre 1 et 3 :"));

while(number < 1 || number > 3) {
    number = parseInt(prompt("Entrez un nombre entre 1 et 3 :"));
}
console.log("Merci, vous avez entré : " + number);
