let number = parseFloat(prompt("Entrez un nombre"));

let absoluteValue;

if(number >= 0) {
    // Si le nombre est positif ou nul, la valeur absolue est le nombre lui-même
    absoluteValue = number;
}else {
     // Si le nombre est négatif, la valeur absolue est l'opposé du nombre
    absoluteValue = -number;
}
alert("La valeur absolue de " + number + " est " + absoluteValue);