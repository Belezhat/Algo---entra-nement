let total = 0;

for (let i = 1; i <= 10; i++) {
    let moyenne = parseFloat(prompt("Entrez la moyenne de l'élève numéro " + i + " :"));
    
    total += moyenne;
}

let moyenneClasse = total / 10;


alert("La moyenne de la classe est : " + moyenneClasse);
