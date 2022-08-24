var minute=99;
var sec=55;
setInterval(() => {
    let time="";
    sec++; 
    if(sec>59)
    {
        minute++;
        sec=0;
    }   
    if(minute<10)
    {
        time+="0"+minute;
    }
    else
    {
        time+=minute;
    }
    if(sec<10)
        time+=":0"+sec;
    else
        time+=":"+sec;
    id=document.getElementById("time");
    id.innerHTML=time;
},1000);
