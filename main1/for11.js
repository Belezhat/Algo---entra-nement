let count = 0;

for (let i = 1; i <= 10; i++) {
    let taille = parseFloat(prompt("Entrez la taille de la personne numéro " + i + " en mètres:"));
    
     // Si la taille est inférieure à 1,70m, on incrémente
     if (taille < 1.70) {
        count++;
    }
}



alert("Le nombre de personnes dont la taille est inférieure à 1,70m est : " + count);
