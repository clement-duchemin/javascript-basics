let inventaire = [
    {
        nom: "ordinateur",
        quantite: 5,
        valeur: 1000
    },
    {
        nom: "chaise",
        quantite: 20,
        valeur: 50
    },
    {
        nom: "stylo",
        quantite: 100,
        valeur: 1.5
    },
];

//console.log(inventaire)





 function ajouterObjet(nom, quantite, valeur) {
    let objet = {
        nom: nom,
        quantite: quantite,
        valeur: valeur
    };
    inventaire.push(objet);
} 

ajouterObjet('vélo', 5000, 200)


function supprimerObjetParNom(nom) {
    inventaire = inventaire.filter(objet => objet.nom !== nom);
} 

supprimerObjetParNom('stylo')


function afficherInventaire() {
    for (let objet of inventaire) {
        console.log(`Nom: ${objet.nom}, Quantité: ${objet.quantite}, Valeur: ${objet.valeur}€`);
    }
}
afficherInventaire()