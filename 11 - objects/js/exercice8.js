let listeVoitures = [
    {
        marque: 'Peugeot',
        modele: '308',
        annee: 2022,
        anneePlusOne: function(){
            this.annee+=1
        }
    },
    {
        marque: 'Dacia',
        modele: 'Sendero',
        annee: 2020
    },
    {
        marque: 'BMW',
        modele: 'M5',
        annee: 2010
    }
];

listeVoitures[0].anneePlusOne();
console.log(listeVoitures)
