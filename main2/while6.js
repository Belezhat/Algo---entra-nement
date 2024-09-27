let hiddenNumber = parseInt(prompt("Saisissez le nombre :"));

let guess = parseInt(prompt("Essayez de deviner le nombre caché ou entrez -1 pour abandonner :"));

while(guess !== hiddenNumber && guess !== -1) {
    if (guess > hiddenNumber) {
        console.log("C'est moins !");
    }else if (guess < hiddenNumber) {
        console.log("C'est plus !");
    }

    guess = parseInt(prompt("Essayez encore ou entrez -1 pour abandonner :"));
}

if(guess === hiddenNumber) {
    console.log("Bravo ! Vous avez trouvé le nombre caché !");
}else if (guess === -1) {
    console.log("Vous avez perdu !");
}
