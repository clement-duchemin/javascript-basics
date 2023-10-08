let texte = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, eligendi."


function extraireMots(toArray) {
    return toArray.split(/\W+/)
};

console.log(extraireMots(texte));

function compterOccurrences(texte, mot) {
    let array = texte.split(/\W+/);
    let occurences = array.filter(motArray => motArray.toLowerCase()=== mot.toLowerCase()).length;
    return occurences;
};

let texte2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, eligendi."

let motInArray = "elit";
console.log(compterOccurrences(texte2, motInArray));