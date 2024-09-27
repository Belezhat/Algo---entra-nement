let number = parseInt(prompt("Entrez un nombre ou 0 pour arrêter :"));
let tallNumber = number; // sert à la première entrée de l'utilisateur
let position = 1; // stocke la position du plus grand nombre
let currentPosition = 1; // garde une trace de la position des nombres entrés

while(number !== 0) {
    currentPosition++

    if(number > tallNumber) {
        tallNumber = number;
        position = currentPosition -1; // mise à jour de la position du plus grand nombre
    }
    number = parseInt(prompt("Entrez un autre nombre ou 0 pour arrêter :"));
}
if(currentPosition > 1) {
    console.log("Le plus grand nombre est : " + tallNumber + ", sa position était : " + position);
}else {
    console.log("Aucun nombre valide n'a été entré.");
}