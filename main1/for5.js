let userNumber = parseInt(prompt("Entrez un nombre"));

let result = "Les nombres impairs de 1 à " + userNumber + " sont: ";

for (let i = 1; i <= userNumber; i++) {
    if (i % 2 !== 0) { // Vérifie si le nombre est impair
        result += i + " ";
    }
}
alert(result);