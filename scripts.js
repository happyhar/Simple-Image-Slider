let margin = 100;
let count = 1;

setInterval(function(){
    if(count<5){
    document.getElementById("child").style.transition="1s";
    document.getElementById("child").style.marginLeft=-margin+"%";
    margin+=100;
    count++;
    }
    else{
        document.getElementById("child").style.transition="0s";
        document.getElementById("child").style.marginLeft="0%"
        margin=100;
        count=1;
    }
},3000)

