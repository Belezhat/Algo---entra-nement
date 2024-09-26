let priceHT = parseFloat(prompt("Entrez un prix HT"));
let quantity = parseInt (prompt("Entrez un nombre d'articles"));
let tvRate = parseFloat(prompt("Entrez un taux de TVA"));

// Je divise par 100 pour obtenir le taux sous forme décimale
// 1 : représente le prix avant l'ajout de la TVA
let priceTTC = priceHT * (quantity + tvRate / 100);

// Limite le résultat à 2 décimales
priceTTC = priceTTC.toFixed(2);

alert("Le prix TTC est de " + priceTTC)