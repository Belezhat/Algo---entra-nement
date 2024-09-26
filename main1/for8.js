// Demander un nombre de départ à l'utilisateur
let userNumber = parseInt(prompt("Entrez un nombre"));


let factorial = 1;


for (let i = 1; i <= userNumber; i++) {
    factorial = factorial * i;  
}


alert("La factorielle de " + userNumber + " est: " + factorial);
