d = new Date();
n = d.toLocaleTimeString([], {hour: 'numeric', minute:'2-digit'});

function Time() {
    this.time = n;
    this.html = '';
}

Time.prototype.generateHTML = function(){
    var html = '<p class="center"><h1>' + n + '</h1></p>';
    this.html = html;
}

Time.prototype.getHTML = function() {
    return this.html;
}
