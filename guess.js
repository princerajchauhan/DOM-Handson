
let randomNumber = parseInt(Math.random()*100)+1
let lowHighText = document.getElementById("startguess")
let chance = document.getElementById("chance")

let count = 100
chance.innerHTML= count
function checkRandom(){
    count--
    chance.innerHTML = count
    let guessNum = document.getElementsByName("guess")[0].value
    if (guessNum > randomNumber) {
        lowHighText.innerHTML = "Higher Number ......"
    }
    else if (guessNum < randomNumber) {
        lowHighText.innerHTML = "Lower Number ......"
    }
    else{
        lowHighText.innerHTML = "Hurray !! <br>You won ......."
        document.getElementsByClassName("randomBox")[0].innerHTML = randomNumber
        document.getElementById("score").innerHTML = count
    }

}

function resetGame(){
    location.reload()
}