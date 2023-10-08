let grille = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

let grilleEx = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(grilleEx[2][0]);


function placeSymbol(x, y, symbol) {
    if (grille[x][y] === null) {
        grille[x][y] = symbol;
        if (verifierGagnant(symbol)) {
            console.log(symbol + " a gagné!");
        } else {
            console.log(grille);
        }
    } else {
        console.log("Cette case est déjà occupée !");
    }
}

function verifierGagnant(symbol) {
    // Vérification des lignes, colonnes et diagonales
    for (let i = 0; i < 3; i++) {
        if (grille[i][0] === symbol && grille[i][1] === symbol && grille[i][2] === symbol) {
            return true;
        }
        if (grille[0][i] === symbol && grille[1][i] === symbol && grille[2][i] === symbol) {
            return true;
        }
    }
    if (grille[0][0] === symbol && grille[1][1] === symbol && grille[2][2] === symbol) {
        return true;
    }
    if (grille[0][2] === symbol && grille[1][1] === symbol && grille[2][0] === symbol) {
        return true;
    }

    return false;
}

//placeSymbol(0, 0, 'X');
