var speedlist = ["banana"];
var speedvoc = speedlist[0].split("");

var ctx;
var i = 0;

function init() {
    ctx = document.getElementById('myCanvas').getContext('2d');
    ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
    check();
}
/*
function printLetter(){
    
    for (var i = 0; i < speedvoc.length; i++){
        ctx.font = "300px Arial";
        ctx.textAlign = "center";
        ctx.fillText(speedvoc[i],300,400);
        window.setInterval(clear, 1000);
    }
}
*/
var check = function(){
    if(i < speedvoc.length){
        ctx.font = "300px Arial";
        ctx.textAlign = "center";
        ctx.fillText(speedvoc[i],300,400);
        window.setInterval(clear, 200);
        i++;
        setTimeout(check, 200);
    }
}

function clear(){
    ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
}