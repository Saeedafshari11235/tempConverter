let inp = document.querySelector("#temp")
let ttl = document.querySelector("legend")
let ans = document.querySelector("#ans")
let clear = document.querySelector("#clear")
let change = document.querySelector("#change")
let convert = document.querySelector("#convert")
let flag = 1
clear.addEventListener("click",function(){
    inp.value = ""
})
convert.addEventListener("click",function(){
    let temp = inp.value
    if(!isNaN(temp)){
        if(flag%2==0){
            ans.innerHTML = temp+"°F → "+((temp-32)*5/9)+"°C"
        }
        else{
            ans.innerHTML = temp+"°C → "+((temp*9/5)+32)+"°F"
        }
    }else{
        ans.innerHTML = "Enter valid"
    }
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
