let age = parseInt(prompt("Entrez votre âge"));
let gender = parseInt(prompt("Entrez votre genre (homme ou femme)"));

let isTaxable = false;

if (gender === "H" && age > 20) {
    // Les hommes de plus de 20 ans paient l'impôt
    isTaxable = true;
}else if (gender === "F" && age >= 18 && age <= 35) {
    // Les femmes entre 18 et 35 ans paient l'impôt
    isTaxable = true;
}

if (isTaxable) {
    alert("Vous êtes taxable.");
}else {
    alert("Vous n'êtes pas taxable.");
}
