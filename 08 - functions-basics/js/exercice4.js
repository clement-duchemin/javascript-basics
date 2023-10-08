/* function afficherDate() {
    const date = new Date();

    const jour = String(date.getDate()).padStart(2, '0');
    const mois = String(date.getMonth() + 1).padStart(2, '0');
    const annee = date.getFullYear();

    const heure = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    const seconde = String(date.getSeconds()).padStart(2, '0');

    return `${jour}/${mois}/${annee}, ${heure}:${minute}:${seconde}`
};

console.log(afficherDate());


function calculerAge(anneeDeNaissance) {
    const anneeActuelle = new Date().getFullYear();
    return anneeActuelle - anneeDeNaissance;
};

console.log(calculerAge(1984)); */