let age = parseInt(prompt("Entrez votre âge"));

if (age >= 6 && age <= 7) {
    alert("Poussin");
}else if (age >= 8 && age <= 9) {
    alert("Pupille");
}else if (age >= 10 && age <= 11) {
    alert("Minime");
}else if (age >= 12) {
    alert("Cadet");
}else {
    alert("Aucune catégorie");
}