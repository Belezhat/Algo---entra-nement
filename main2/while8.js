let userNumber = parseInt(prompt("Entrez un nombre :"))
let count = 0; // permet de compter combien de chiffres contient le nombre

if(userNumber < 0) {
    userNumber = -userNumber; // pour transfomer les nombres négatifs en positifs
}
while(userNumber > 0) {
    userNumber = (userNumber - (userNumber % 10)) / 10; // modulo utilisé pour pour avoir le reste de la division et celle-ci (la divison) supprime le dernier chiffre
    count++;
}
if(count === 0) {
    // le compteur est à O mais c'est un chiffre donc je l'initialise à 1
    count = 1; 
}
console.log("Nombre de chiffres : " + count);
