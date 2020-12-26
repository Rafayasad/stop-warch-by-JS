var min = 00;
var sec = 00;
var msec = 00;
var interval;
var mint = document.getElementById("min");
var second = document.getElementById("sec");
var milisecond = document.getElementById("msec");
function timer(){
    msec++;
    if(msec<10){
    msec = '0'+msec;}
    milisecond.innerHTML = msec;
    if(msec >= 100){
        sec++;
        if(sec<10){
        sec = '0'+sec;}
        second.innerHTML = sec;
        msec=00;
    }
    else if(sec >= 60){
        min++;
        if(min<10){
        min = '0'+min;}
        mint.innerHTML = min;
        sec = 00;
    }
}
function start(){
    interval = setInterval(timer,10);
    document.getElementById("start").disabled = true;
}
function stop(){
    clearInterval(interval);
    document.getElementById("start").disabled = false;
}
function reset(){
    min = 00;
    sec = 00;
    msec = 00;
    mint.innerHTML = min;
    second.innerHTML = sec;
    milisecond.innerHTML = msec;
    stop();
}