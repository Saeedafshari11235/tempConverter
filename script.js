let inp = document.querySelector("#temp")
let ttl = document.querySelector("legend")
let clear = document.querySelector("#clear")
let change = document.querySelector("#change")
let convert = document.querySelector("#convert")
let flag = 1
clear.addEventListener("click",function(){
    inp.value = ""
})
convert.addEventListener("click",function(){
    
})
change.addEventListener("click",function(){
    flag++
    if(flag%2==0){
        document.title = "°F to °C converter"
        ttl.innerHTML = "°F to °C"
    }
    else{
        document.title =" °C to °F converter"
        ttl.innerHTML = "°C to °F"
    }
})