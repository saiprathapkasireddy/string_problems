// Given a string in the format of "20/1/2021", print the month in which the date is present in.

function gettingMonth(string){
let date = new Date(string);
let month = date.getMonth();
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

return monthNames[month];
}

module.exports=gettingMonth;

//console.log(gettingMonth("2021-08-25"));
