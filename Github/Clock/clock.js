// function startime(){
//     let a = new Date();
//     var h = a.getHours();
//     var m = a.getMinutes();
//     var s = a.getSeconds();

//     let time = h + ":" + m + ":" + s ;
//     document.getElementById("clock").innerHTML = time;
// }

// setInterval(startime(), 1000);
window.onload = function(){
setInterval(() => {
    
    let a = new Date();
    var h = a.getHours();
    var m = a.getMinutes();
    var s = a.getSeconds();
    var session = "AM";
    if(h==0){
        h = 12;
    }
    if(h>12){
        session = "PM";
        h = h-12;
    }
    if(h<10){
        h = "0" + h;
    }
    if(h>=10){
        h = h;
    }
    if(m<10){
        m = "0" + m;
    }
    if(m>=10){
        m = m;
    }
    if(s<10){
        s = "0" + s;
    }
    if(s>=10){
        s = s;
    }
    let time = h + ":" + m + ":" +s + " " + session;
    document.getElementById("clock").innerHTML = time.fontcolor("white");
}, 1000);
}