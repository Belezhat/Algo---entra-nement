let number1 = parseFloat(prompt("Entrez un nombre"));
let number2 = parseFloat(prompt("Entrez un autre nombre"));

// Vérifie si au moins un des deux nombres est positif
if (number1 > 0 || number2 > 0) {
    alert("Il y a au moins un nombre positif.");
}else {
    alert("Aucun des nombres n'est positif");
}