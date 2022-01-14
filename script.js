const temp = document.getElementById("temp");

const tempLoad = () =>{
    temp.style.color = "white";
    temp.innerHTML = "&#xf2cb";

    setTimeout(() =>{
        temp.style.color = "yellow";
        temp.innerHTML = "&#xf2ca";
    },1000);
    
    setTimeout(() =>{
        temp.style.color = "green";
        temp.innerHTML = "&#xf2c9";
    },2000);

    setTimeout(() =>{
        temp.style.color = "blue";
        temp.innerHTML = "&#xf2c8";
    },3000);

    setTimeout(() =>{
        temp.style.color = "red";
        temp.innerHTML = "&#xf2c7";
    },4000);
}

tempLoad();
setInterval(tempLoad,5000);