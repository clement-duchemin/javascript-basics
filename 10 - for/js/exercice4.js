let elements = ['pomme', 42, true, 3.14];

let elementRecherche = 42;

let found = false;

let index = -1;

for(let i = 0 ; i < elements.length; i++) {
    if(elements[i] === elementRecherche) {
    found = true;
    index = i;
    break
    };
};

if(found) {
    console.log('élément:' + elementRecherche);
} else {
    console.log('not found' + elementRecherche);
};