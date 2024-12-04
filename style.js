var secondhand = document.querySelector(".second");
var minutehand = document.querySelector(".minute");
var hourshand = document.querySelector(".hours");
var btn = document.querySelector("button")
var circle = document.querySelector(".circle")
var body = document.querySelector("body")
var number = document.querySelector(".outter-num")

setInterval(function(){
    var second = new Date().getSeconds()
    var minute = new Date().getMinutes()
    var hours = new Date().getHours()
    // console.log(second);

    secondhand.style.transform = `rotate(${second*6}deg) translateY(-50%)`
    minutehand.style.transform = `rotate(${minute*6}deg) translateY(-50%)`
    hourshand.style.transform = `rotate(${hours*12}deg) translateY(-50%)`
},1000)


var flag = 0;
btn.addEventListener("click", function(){
    if(flag==0){
        body.style.backgroundColor = "white";
        circle.style.backgroundColor = "white";
        btn.style.backgroundColor = "black";
        btn.style.color = "white";
        minutehand.style.backgroundColor = "black";
        hourshand.style.backgroundColor = "black";
        number.style.color = "black";
        flag = 1;
    } else {
        body.style.backgroundColor = "black";
        circle.style.backgroundColor = "black";
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
        minutehand.style.backgroundColor = "white";
        hourshand.style.backgroundColor = "white";
        number.style.color = "white";
        flag = 0;
    }
});