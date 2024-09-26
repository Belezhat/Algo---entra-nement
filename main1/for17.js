let userNumber = parseInt(prompt("Donnez un nombre :"));

let result = "";

// Boucle pour afficher des lignes d'étoiles
for (let i = userNumber; i >= 1; i--) {
    // Ajoute une ligne d'étoiles à chaque itération
    for (let j = 1; j <= userNumber -i; j++) {
        result += " ";
    }

    // cette boucle permet d'avoir un nombre d'étoiles impairs sur chaque ligne
    for (let k = 1; k <= (2 * i - 1); k++) {
        result += "*";
    }

    result += "\n";
}
console.log(result); 