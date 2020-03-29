function twelveclock(){
    var clocktime = new Date();
    var hours = clocktime.getHours();
    var mins = clocktime.getMinutes();
    var secs = clocktime.getSeconds();
    var ampm = (hours >= 12) ? "P.M." : "A.M.";
    var month = clocktime.getMonth();
    var day = clocktime.getDay();
    var date = clocktime.getDate();
    var year = clocktime.getFullYear();

    if (hours >= 13) {
        hours -= 12;
    }
    if (hours < 1) {
        hours = 12;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    var weekday = new Array(7)
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var monthnum = new Array(12)
    monthnum[0] = "January";
    monthnum[1] = "February";
    monthnum[2] = "March";
    monthnum[3] = "April";
    monthnum[4] = "May";
    monthnum[5] = "June";
    monthnum[6] = "July";
    monthnum[7] = "August";
    monthnum[8] = "September";
    monthnum[9] = "October";
    monthnum[10] = "November";
    monthnum[11] = "December";

    var div_clock_12hr = document.getElementById("12time");
    div_clock_12hr.innerHTML = '<font color=202020 face="britannic bold" size="5">' + weekday[day] + ', ' + monthnum[month] + ' ' + date + ', ' + year + '	' + hours + ":" + mins + ":" + secs + " " + ampm + "</font>";
    setTimeout("twelveclock()", 1000);
}

twelveclock()
