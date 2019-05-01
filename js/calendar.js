
// these are labels for the days of the week
cal_days_labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// these are human-readable month name labels, in order
cal_months_labels = ['January', 'February', 'March', 'April',
                    'May', 'June', 'July', 'August', 'September',
                    'October', 'November', 'December'];

// this is the current date
cal_current_date = new Date();

function Calendar(month, year) {
    this.month = (isNaN(month) || month == null) ? cal_current_date.getMonth() : month;
    this.year  = (isNaN(year) || year == null) ? cal_current_date.getFullYear() : year;
    this.html = '';
}

Calendar.prototype.generateHTML = function(){

    // get first day of month
    var firstDay = new Date(this.year, this.month, 1);
    var startingDay = firstDay.getDay();
    
    // find number of days in month
    function monthLength(y, m) {
        return (new Date(y, ++m, 0)).getDate();
        }
    var monthLength = monthLength(this.year, this.month);
    
    // do the header
    var monthName = cal_months_labels[this.month]
    var html = '<table class="calendar-table">';

    html += '<tr><th colspan="7">';
    html +=  '<h1>' + monthName + "&nbsp;" + this.year + '</h1>';
    html += '</th></tr>';
    html += '<tr class="calendar-header">';
    for(var i = 0; i <= 6; i++ ){
        html += '<td class="calendar-header-day">';
        html += cal_days_labels[i];
        html += '</td>';
    }
    html += '</tr><tr>';
    
    // fill in the days
    var day = 1;
    // this loop is for is weeks (rows)
    for (var i = 0; i < 9; i++) {
        // this loop is for weekdays (cells)
        for (var j = 0; j <= 6; j++) { 
        html += '<td class="calendar-day">';
        if (day <= monthLength && (i > 0 || j >= startingDay)) {
            html += day;
            day++;
        }
        html += '</td>';
        }
        // stop making rows if we've run out of days
        if (day > monthLength) {
        break;
        } else {
        html += '</tr><tr>';
        }
    }
    html += '</tr></table>';
    
    this.html = html;
}

Calendar.prototype.getHTML = function() {
    return this.html;
}
