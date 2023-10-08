let utilisateurs = [
    { nom: "Charlie", age: 35 },
    { nom: "Alice", age: 25 },
    { nom: "Bob", age: 30 },
    { nom: "Kevin", age: 5 },
  ];

  function trierUtilisateurs(utilisateurs) {
    let utilisateurTries = utilisateurs.slice();

    utilisateurTries.sort(function (a, b) {
        return a.age - b.age;
    });
    return utilisateurTries;
  };

  let resultAgeSorted = trierUtilisateurs(utilisateurs);
  console.log(resultAgeSorted);

  function filtrerUtilisateurs(utilisateurs) {
    let majeur = utilisateurs.filter(n => n.age >= 18);
    return majeur;
  };

  let majeurFiltered = filtrerUtilisateurs(utilisateurs);
  console.log(majeurFiltered);