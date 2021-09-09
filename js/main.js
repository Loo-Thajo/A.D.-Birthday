var endDate = new Date("September 10, 2021 00:00:00").getTime();
var timer = setInterval(function(){
    let now = new Date().getTime();
    let count = endDate - now;

    var days = Math.floor(count / (1000 * 60 * 60 * 24));
    var hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((count % (1000 * 60)) / 1000);   

    document.getElementById("time-day").innerHTML =  days ;
    document.getElementById("time-hours").innerHTML =  hours;
    document.getElementById("time-minutes").innerHTML =  minutes;
    document.getElementById("time-seconds").innerHTML =  seconds;
    
    if(count < 0 ){
        clearInterval(timer);
        document.getElementById("time-day").innerHTML =  0 ;
        document.getElementById("time-hours").innerHTML =  0;
        document.getElementById("time-minutes").innerHTML = 0;
        document.getElementById("time-seconds").innerHTML =  0;
    }
},1000);