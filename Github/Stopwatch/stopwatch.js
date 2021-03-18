window.onload = function(){

var sec = 00;
var tens = 00;
var min = 00;
var appendsec = document.getElementById("sec");
var appendtens = document.getElementById("tens");
var appendmin = document.getElementById("min");
var start = document.getElementById("start");
var stopb  = document.getElementById("stop");
var reset = document.getElementById("reset");
var interval;

start.onclick = function(){
    clearInterval(interval);
    interval = setInterval(startTimer , 17.33);
}

stopb.onclick = function(){
    clearInterval(interval);
}

reset.onclick = function(){
    clearInterval(interval);
    tens = "00";
    sec = "00";
    min = "00";
    appendsec.innerHTML = sec;
    appendtens.innerHTML = tens;
    appendmin.innerHTML = min;
}

function startTimer(){
    tens++;

    if(tens <= 9){
        appendtens.innerHTML = "0" + tens;
    }
    if(tens > 9){
        appendtens.innerHTML = tens;
    }

    if(tens > 59){
        console.log("seconds");
        sec++;
        appendsec.innerHTML = "0"+ sec;
        tens = 0;
        appendtens.innerHTML = "0" + 0;
    }

    if(sec > 9){
        appendsec.innerHTML = sec;
    }
    
    if(sec>59){
        console.log("min");
        min++;
        appendmin.innerHTML = "0"+min;
        sec = 0;
        appendsec.innerHTML = "0"+0;
    }
}
}