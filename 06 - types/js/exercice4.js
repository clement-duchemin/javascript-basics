/* let valeurMixte = [5, "5", "quarante", null, undefined, "30.5", 12, "18.3", true];



let somme = valeurMixte.reduce((total, value) => {
    if(typeof value === "number") {
        return total + value;
    } else if ( typeof value === "string" && !isNaN(Number(value))) {
        return total + Number(value);
    }
    return total;
}, 0);

console.log(somme); */