let reponse = prompt("Répondez par O (Oui) ou N (Non) :");

while(reponse !== 'O' && reponse !== 'N') {
    console.log("Réponse invalide. Veuillez répondre par O ou N.");

    reponse = prompt("Répondez par O (Oui) ou N (Non) :");
}
if(reponse === 'O') {
    console.log("Vous avez répondu Oui.");
}else if(reponse === 'N') {
    console.log("Vous avez répondu Non.");
}