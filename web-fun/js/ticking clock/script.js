var min = document.getElementById('minutes');
var hour = document.getElementById('hour');
var sec = document.getElementById('seconds');
var num = 0;

function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
        new Date().getMinutes() * 60 + 
        new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    
    var s = new Date().getSeconds() * 6;
    var h = ((new Date().getHours() - 12) * 30) + 180 + (new Date().getMinutes() * 0.5);
    var m = (new Date().getMinutes() * 6) + 180;
    
    
    
    console.log(time)
    
    
    sec.style.transform = "rotate(" + (s) + "deg)";
    hour.style.transform = "rotate(" + (h) + "deg)";
    min.style.transform = "rotate(" + (m) + "deg)";

    
}, 1000);
