var months = Number(document.getElementById('getDayOfTheWeek').value);

var monthsOfTheYear = ["january", "february", "march", "april", "May", "June", "July", "August", "september", "October", "November", "December"];
var index = (months - 1) % 12;
document.getElementById('demo').innerHTML = monthsOfTheYear[index];
