
// let text = document.getElementById("text")

// let h1tag = document.getElementsByTagName("h1")[0]

// let classBox = document.getElementsByClassName("box")[0]


// ******************** Question 1 ShowHideCode function *********************
let ques1 = document.getElementById("seeCode1")
let isCode1 = false
function showHide1(element){
    if (isCode1) {
        element.innerHTML = "See Code"
        document.getElementById("code1").style.display = "none"
        isCode1 = false
    }
    else{
        element.innerHTML = "Hide Code"
        document.getElementById("code1").style.display = "block"
        isCode1 = true
    }
}

// ******************** Question 2 ShowHideCode function *********************
let ques2 = document.getElementById("seeCode2")
let isCode2 = false
function showHide2(element){
    if (isCode2) {
        element.innerHTML = "See Code"
        document.getElementById("code2").style.display = "none"
        isCode2 = false
    }
    else{
        element.innerHTML = "Hide Code"
        document.getElementById("code2").style.display = "block"
        isCode2 = true
    }
}

// ******************** Question 3 ShowHideCode function *********************
let ques3 = document.getElementById("seeCode3")
let isCode3 = false
function showHide3(element){
    if (isCode3) {
        element.innerHTML = "See Code"
        document.getElementById("code3").style.display = "none"
        isCode3 = false
    }
    else{
        element.innerHTML = "Hide Code"
        document.getElementById("code3").style.display = "block"
        isCode3 = true
    }
}

// ******************** Question 3 ShowHideCode function *********************
let ques4 = document.getElementById("seeCode4")
let isCode4 = false
function showHide4(element){
    if (isCode4) {
        element.innerHTML = "See Code"
        document.getElementById("code4").style.display = "none"
        isCode4 = false
    }
    else{
        element.innerHTML = "Hide Code"
        document.getElementById("code4").style.display = "block"
        isCode4 = true
    }
}

let change = document.getElementById("change")

let isChange = false
function changeText(){
    if (isChange) {
        change.innerHTML = "<span>Output : </span>Hello"
        isChange = false
    }
    else{
        change.innerHTML = "<span>Output : </span>Hello World !!"
        isChange = true
    }
}

// ******************** Question 5 ShowHideCode function *********************
let ques5 = document.getElementById("seeCode5")
let isCode5 = false
function showHide5(element){
    if (isCode5) {
        element.innerHTML = "See Code"
        document.getElementById("code5").style.display = "none"
        isCode5 = false
    }
    else{
        element.innerHTML = "Hide Code"
        document.getElementById("code5").style.display = "block"
        isCode5 = true
    }
}

let replace = document.getElementsByClassName("replaceText")[0]
let isReplace = false
function replaceText(element){
    if (isReplace) {
        element.innerHTML = "Replace Text"
        replace.innerHTML = "<span>Output : </span>Hello World !!"
        isReplace = false
    }
    else{
        element.innerHTML = "Old Text"
        replace.innerHTML = "<span>Output : </span>Welcome To Elevation Academy !!"
        isReplace = true
    }
}


// ******************** Question 6 ShowHideCode function *********************
let ques6 = document.getElementById("seeCode6")
let isCode6 = false
function showHide6(element){
    if (isCode6) {
        element.innerHTML = "See Code"
        document.getElementById("code6").style.display = "none"
        isCode6 = false
    }
    else{
        element.innerHTML = "Hide Code"
        document.getElementById("code6").style.display = "block"
        isCode6 = true
    }
}

let changeSt = document.getElementsByClassName("changeStyle")[0]
let isStyle = false
function changeStyle(element){
    if (isStyle) {
        element.innerHTML = "Change Style"
        changeSt.setAttribute("style","color:black")
        changeSt.setAttribute("id","heading")
        isStyle = false
    }
    else{
        element.innerHTML = "Old Style"
        changeSt.setAttribute("style","color:red")
        isStyle = true
    }
}


// ******************** Question 7 ShowHideCode function *********************
let ques7 = document.getElementById("seeCode7")
let isCode7 = false
function showHide7(element){
    if (isCode7) {
        element.innerHTML = "See Code"
        document.getElementById("code7").style.display = "none" 
        isCode7 = false
    }
    else{
        element.innerHTML = "Hide Code"
        document.getElementById("code7").style.display = "block" 
        isCode7 = true
    }
}

let cardParent = document.getElementById("cardParent")
let isFlex = false
function changeDirection() {
    if (isFlex) {
        cardParent.style.flexDirection = "row"
        isFlex = false
    }
    else{
        cardParent.style.flexDirection = "column"
        isFlex = true
        
    }
}


// ******************** Question 8 ShowHideCode function *********************
let istable = false
function showHide8(element){
    if (istable) {
        element.innerHTML = "See Difference"
        document.getElementById("code8").style.display = "none"
        istable = false
    }
    else{
        element.innerHTML = "Hide Difference"
        document.getElementById("code8").style.display = "block"
        istable = true
    }
}


// ******************** Question 9 Display Time function *********************
function startClock(){
    let time = new Date()
    let hrs = time.getHours()
    let ampm = hrs>12? 'PM' : 'AM'
    hrs = hrs%12
    // hrs = hrs%12<10? '0'+hrs : hrs
    let mins = time.getMinutes()
    mins = mins<10? '0'+mins : mins
    let sec = time.getSeconds()
    sec = sec<10? '0'+sec : sec
    let displayTime = document.getElementById("displayTime")
    displayTime.innerHTML = `${hrs} : ${mins} : ${sec} ${ampm}`
}
setInterval(() => {
    startClock()
}, 1000);