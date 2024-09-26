let largestNumber = -Infinity; // -Infinity permet de s'assurer que le premier nombre plus grand que cette valeur.
let position = 0;

for (let i = 1; i <= 20; i++) {
    let currentNumber = parseInt(prompt("Entrez le nombre numéro " + i + " :"));
    
    if (currentNumber > largestNumber) {
        largestNumber = currentNumber;
        position = i; 
    }
}
alert("Le plus grand de ces nombres est : " + largestNumber + ".\nC'était le nombre numéro " + position);