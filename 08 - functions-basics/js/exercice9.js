function afficherProchaineDate(date) {
    let nextDate = new Date(date.getTime() + 24*60*60*1000);
    return nextDate;
};

let today = new Date();
let tomorrow = afficherProchaineDate(today)

console.log(tomorrow);





function calculerDifferenceDates(date1, date2) {
    let diff = Math.abs(date1 - date2);
    console.log(diff)
    let diffDays = diff/(1000*3600*24);
    return diffDays;
};

let date1 = new Date(2023, 0, 19);
let date2 = new Date(2023, 1, 20);

let difference = calculerDifferenceDates(date1, date2);
console.log(difference);
