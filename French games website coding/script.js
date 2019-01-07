function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    if (h > 12){
        h = h - 12;
        document.getElementById('txt').innerHTML = h + ":" + m + ":" + s + " pm";
    }
    else{
        document.getElementById('txt').innerHTML = h + ":" + m + ":" + s + " am";
    }
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function getDate(){
    var n =  new Date();
    var y = n.getFullYear();
    var m = n.getMonth() + 1;
    var d = n.getDate();
    document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
}

function start() {
    startTime();
    getDate();
}