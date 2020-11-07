var display;
var onscreen;

var screenArray = [];

function displayFunc(i) {
    document.getElementById("screen").innerText = i
}


function removeFunc() {
    onscreen = document.getElementById("screen").innerText
    onscreen = onscreen.substring(0, onscreen.length - 1);
    document.getElementById("screen").innerText = onscreen
    screenArray.push(onscreen);
}

function Addit() {
    display = "+";
    var i = document.getElementById("screen").innerText.concat(display);
    screenArray.push(i);
    screenArray.forEach(displayFunc)

}

function Subractit() {
    display = "-";
    var i = document.getElementById("screen").innerText.concat(display);
    screenArray.push(i);
    screenArray.forEach(displayFunc)

}

function Multiplyit() {
    display = "*";
    var i = document.getElementById("screen").innerText.concat(display);
    screenArray.push(i);
    screenArray.forEach(displayFunc)

}

function Divideit() {
    display = "/";
    var i = document.getElementById("screen").innerText.concat(display);
    screenArray.push(i);
    screenArray.forEach(displayFunc)

}

function delFunc() {

    screenArray = []
    document.getElementById("screen").innerText = screenArray;
}


document.addEventListener("keydown", keyListener);

function keyListener(event) {

    clickListener(event.key)

}

function clickListener(x) {

    if (x == 1) {
        // var y = document.getElementById("in_calc1").innerText;
        var i = document.getElementById("screen").innerText.concat(x);
        screenArray.push(i);
        screenArray.forEach(displayFunc)

    } else if (x == 2) {
        // var y = document.getElementById("in_calc2").innerText;
        var i = document.getElementById("screen").innerText.concat(x);
        screenArray.push(i);
        screenArray.forEach(displayFunc)

    } else if (x == 3) {
        // var y = document.getElementById("in_calc3").innerText;
        var i = document.getElementById("screen").innerText.concat(x);
        screenArray.push(i);
        screenArray.forEach(displayFunc)

    } else if (x == 4) {
        // var y = document.getElementById("in_calc4").innerText;
        var i = document.getElementById("screen").innerText.concat(x);
        screenArray.push(i);
        screenArray.forEach(displayFunc)

    } else if (x == 5) {
        // var y = document.getElementById("in_calc5").innerText;
        var i = document.getElementById("screen").innerText.concat(x);
        screenArray.push(i);
        screenArray.forEach(displayFunc)

    } else if (x == 6) {
        // var y = document.getElementById("in_calc6").innerText;
        var i = document.getElementById("screen").innerText.concat(x);
        screenArray.push(i);
        screenArray.forEach(displayFunc)

    } else if (x == 7) {
        // var y = document.getElementById("in_calc7").innerText;
        var i = document.getElementById("screen").innerText.concat(x);
        screenArray.push(i);
        screenArray.forEach(displayFunc)

    } else if (x == 8) {
        // var y = document.getElementById("in_calc8").innerText;
        var i = document.getElementById("screen").innerText.concat(x);
        screenArray.push(i);
        screenArray.forEach(displayFunc)

    } else if (x == 9) {
        // var y = document.getElementById("in_calc9").innerText;
        var i = document.getElementById("screen").innerText.concat(x);
        screenArray.push(i);
        screenArray.forEach(displayFunc)

    } else if (x == "Enter") {
        calcFunc()

    } else if (x == "Delete") {
        delFunc()
    } else if (x == "Backspace") {
        removeFunc()
    } else if (x == 0) {
        var i = document.getElementById("screen").innerText.concat(x);
        screenArray.push(i);
        screenArray.forEach(displayFunc)
    } else if (x == "+") {
        Addit()
    } else if (x == "-") {
        Subractit()
    } else if (x == "*") {
        Multiplyit()
    } else if (x == "/") {
        Divideit()
    } else if (x == "(") {
        var i = document.getElementById("screen").innerText.concat(x);
        screenArray.push(i);
        screenArray.forEach(displayFunc)
    } else if (x == ")") {
        var i = document.getElementById("screen").innerText.concat(x);
        screenArray.push(i);
        screenArray.forEach(displayFunc)
    } else {
        return 0
    }
}

function calcFunc() {

    var calc;
    var index;
    index = screenArray[screenArray.length - 1]
    calc = eval(index)
    document.getElementById("screen").innerText = calc
}