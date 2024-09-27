let userNumber = prompt("Saissisez in nombre :");

let lastNumber = userNumber % 10;

let firstNumber = userNumber;


// Va boucler jusqu'à ce que le nombre soit inférieur à 10
while(firstNumber >= 10) {
    firstNumber = (firstNumber - firstNumber % 10) / 10; // je divise pour enlever le dernier chiffre
}
console.log("Premier chiffre = " + firstNumber + ", Dernier chiffre = " + lastNumber);
