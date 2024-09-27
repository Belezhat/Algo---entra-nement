let total = 0;
let price = parseInt(prompt("Entrez le prix de l'article en euros ou 0 pour terminer :"));

while (price !== 0) {
    total += price; 
    price = parseInt(prompt("Entrez le prix d'un autre article ou 0 pour terminer :"));
}
console.log("Le total à payer est : " + total + " Euros");

let payment = parseInt(prompt("Entrez la somme payée par le client :"));

let render = payment - total;
console.log("Monnaie à rendre : " + render + " Euros");

while(render > 0) {
    if(render >= 10) {
        console.log("10 euros");
        render -= 10;
    }else if(render >= 5) {
        console.log("5 euros");
        render -= 5;
    }else {
        console.log("1 euros");
        render -= 1;
    }
}
