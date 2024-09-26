let userNumber = parseInt(prompt("Entrez un nombre"));

let sum = 0;


for (let i = 1; i <= userNumber; i++) {
       sum += i;
}
alert("La somme des entiers de 1 à " + userNumber + " est: " + sum);