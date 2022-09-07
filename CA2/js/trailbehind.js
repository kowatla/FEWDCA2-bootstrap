// This file is for the thetrailbehind.html page



// Function to calculate how many years between now and the start
function calDate(i) {
    var startyear = document.getElementById(`f${i}`).innerHTML
    var year = new Date()
    var currentyear = year.getFullYear()

    var yearsago = currentyear - startyear;

    document.getElementById(`h${i}`).innerHTML = `About ${yearsago} years ago...`;
    document.getElementById(`f6`).innerHTML = currentyear;
}

// Loop to check for all the panels 
for (let i = 1; i <= 4; i++) {
    calDate(i);
}
