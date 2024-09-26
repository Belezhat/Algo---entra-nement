let userNumber = parseInt(prompt("Donnez un nombre :"));

let result = "";

// Boucle pour afficher la pyramide d'étoiles
for (let i = 1; i <= userNumber; i++) {
    // Ajoute les espaces nécessaires pour centrer la pyramide
    for (let j = 1; j <= userNumber - i; j++) {
        result += " ";
    }
    // cette boucle permet d'avoir un nombre d'étoiles impairs sur chaque ligne
    for (let k = 1; k <= (2 * i - 1); k++) {
        result += "*";
    }
   
    result += "\n";
}

console.log(result);  
