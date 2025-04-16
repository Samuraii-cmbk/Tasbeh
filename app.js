let son = document.querySelector('h1')

let num = 1
let qoshish = document.querySelector('.knopka')
qoshish.onclick = function(){
    son.innerHTML = num++
}


let restart = document.querySelector('.reset')
restart.onclick = function(){
    son.innerHTML = num = 0  
} 

let kam = document.querySelector('.kam')
kam.onclick = function(){
    if (num >= 0) {
        son.innerHTML = num-- 
    }
}


let li = document.querySelector('.ekran')

let qos = document.querySelector('.knopka')
qos.onclick = function(){
    son.innerHTML = num++
   if (num >= 10){
     li.style.backgroundColor = 'red'
   }
}

