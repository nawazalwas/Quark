var tv = document.querySelector("#container");
var num = document.querySelectorAll(".cnl-namber");
var power = document.querySelector("#power-off");
var signal = document.querySelectorAll(".light");
//console.log(signal);
function display(event){
    //console.log(event.target.innerText);
    bulb();
    tv.innerText = event.target.innerText;
}


function bulb(){
    signal.forEach(function(elm){
        var signalCss = window.getComputedStyle(elm,'::before');

        console.log(signalCss.backgroundColor);
    })
}


function pow(){
    bulb();
    let status = tv.innerText;
    //console.log(num[0].id);
    if(status === "Power Off"){
        tv.innerText = "Power On";
        num.forEach(function(element){
            element.addEventListener("click",display);
        })
    }else{
        tv.innerText = "Power Off";

    }
}; 
power.addEventListener("click",pow);