let number1 = parseFloat(prompt("Entrez un nombre"));
let number2 = parseFloat(prompt("Entrez un autre nombre"));

// Vérifie si le produit est nul, positif ou négatif sans le calculer
if (number1 === 0 || number2 === 0) {
    alert("Le produit zero.");
}else if ((number1 > 0 && number2 > 0) || (number1 < 0 && number2 < 0)) {
    alert("Le produit est positive.");
}else {
    alert("Le produit est negative.");
}
