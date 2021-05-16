// these are human-readable month name labels, in order
var cal_months_labels;
cal_months_labels = ['January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'];
// this is the current date
var cal_current_date = new Date();
class Calendar {
    constructor(date, month, year) {
        this.date = (date == null) ? cal_current_date.getDate() : date;
        this.month = (isNaN(month) || month == null) ? cal_current_date.getMonth() : month;
        this.year = (isNaN(year) || year == null) ? cal_current_date.getFullYear() : year;
        this.html = '';
    }
    generateHTML() {
        // get first day of month
        var firstDay = new Date(this.year, this.month, 1);
        var startingDay = firstDay.getDay();
        // find number of days in month
        function monthLength(y, m) {
            return (new Date(y, ++m, 0)).getDate();
        }
        var monthLen = monthLength(this.year, this.month);
        // do the header
        var monthName = cal_months_labels[this.month];
        var html = '<h1>' + monthName + "&nbsp;" + this.year + '</h1>';
        html += '<div class="grid-container">';
        html += '<div><h2>Sun</h2></div>';
        html += '<div><h2>Mon</h2></div>';
        html += '<div><h2>Tue</h2></div>';
        html += '<div><h2>Wed</h2></div>';
        html += '<div><h2>Thu</h2></div>';
        html += '<div><h2>Fri</h2></div>';
        html += '<div><h2>Sat</h2></div>';
        for (var i = 0; i < startingDay; i++) {
            html += '<div></div>';
        }
        for (var i = 1; i <= monthLen; i++) {
            html += '<div><h2>' + i + '</h2></div>';
        }
        html += '</div>';
        this.html = html;
    }
    getHTML() {
        return this.html;
    }
}