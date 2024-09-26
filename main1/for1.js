let startNumber = parseInt(prompt("Entrez un numéro pour commencer"));

let result = "Les 10 nombres suivant sont: ";

for(let i = 1; i <= 10; i++) {
    result += (startNumber + i) + " ";
}

alert(result);