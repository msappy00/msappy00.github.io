// user sets the tab via the menu
function setTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab-pane");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
    if (tabName != 'home_tab') {
        toggleMenu();
    } else {
        var x = document.getElementById("menu");
        x.className = x.className.replace(" w3-show", "");
    }
}

function toggleMenu() {
    var x = document.getElementById("menu");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

document.getElementById("foot01").innerHTML = '&copy;' + new Date().getFullYear() + ' Teacher Matthew';