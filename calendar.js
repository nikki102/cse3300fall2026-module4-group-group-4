const { updateCalendar } = require("./calendar_helpers");

// For our purposes, we can keep the current month in a variable in the global scope
export var currentMonth = new Month(2023, 9); // October 2023

// Change the month when the "next" button is pressed
document.getElementById("next_month_btn").addEventListener("click", function(event){
	currentMonth = currentMonth.nextMonth(); // Previous month would be currentMonth.prevMonth()
	updateCalendar(); // Whenever the month is updated, we'll need to re-render the calendar in HTML
	alert("The new month is "+currentMonth.month+" "+currentMonth.year);
}, false);

document.getElementById("prev_month_btn").addEventListener("click", function () {
    currentMonth = currentMonth.prevMonth();
    updateCalendar();
}, false);

// runs once when the page first opens to update calendar
updateCalendar();