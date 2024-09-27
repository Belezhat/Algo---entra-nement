let  sum = 0;
let max = null;
let min = null;

let number = parseInt(prompt("Entrez un nombre positif ou un nombre négatif pour arrêter :"));

while(number >=0 ) {
    sum += number;
    if (max === null || number > max) {
        max = number;
    }
    if (min === null || number < min) {
        min = number;
    }
    number = parseInt(prompt("Entrez un nombre positif ou un nombre négatif pour arrêter :"));
}
if(max !== null && min !== null) {
    console.log("Le maximum est : " + max);
    console.log("Le minimum est : " + min);
    console.log("La somme est : " + sum);  
}else {
    console.log("Aucun nombre valide n'a été entré.");
}