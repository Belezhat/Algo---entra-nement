let userNumber = parseInt(prompt("Donnez un nombre :"));

let result = "";

// Boucle pour afficher des lignes d'étoiles
for (let i = 1; i <= userNumber; i++) {
    // Ajoute une ligne d'étoiles à chaque itération
    for (let j = 1; j <= userNumber; j++) {
        result += "*";
    }

    result += "\n";
}
console.log(result); 
