var timeout;
var correctbutton;
var timetaken = 0;
var correctquestions = 0;
const incorrectsyntax = ["for [i=0;i<4;i++] {...}", "if (...) {console.log(\"example\"}", "if var1 > 4 then {...}", "function myFunction {...}", "let randomNumber = 2 + Math.round(random());", "var myBool = (var1 > 4 : true ? false);", "var myBool = True;", "if (4 x 5 > 16) {...}"];
const correctsyntax = ["function increaseTime() {...}", "if (...) {console.log(\"example\");}", "function myFunction(...) {...}", "let randomNumber = 3 + Math.random();", "var myBool = (var1 > 4 ? true : false);"];

doEquations();
setInterval(increaseTime,100);

function increaseTime() {timetaken=Math.round((timetaken+0.1)*10)/10; document.getElementById("label").innerHTML = "Pick the button with the correct code syntax for Javascript! Time Taken: " + timetaken; document.getElementById("label2").innerHTML = "Questions answered: " + correctquestions + " Time/Question ratio: " + (timetaken / correctquestions);}

function doEquations() {
    correctbutton = (Math.random() > 0.75 ? "button1" : (Math.random() > 0.66 ? "button2" : (Math.random() > 0.5 ? "button3" : "button4")));
    for (i=0;i<4;i++) {
        let r = incorrectsyntax[Math.round(Math.random() * (incorrectsyntax.length - 1))];
        document.getElementById("button" + (i + 1)).innerHTML = r;
    }
    let r = correctsyntax[Math.round(Math.random() * (correctsyntax.length - 1))];
    document.getElementById(correctbutton).innerHTML = r;
}

function buttonClick1() {
    revertColor();
    runScoring("button1");
    clearTimeout(timeout);
    timeout = setTimeout(revertColor, 200);
}
function buttonClick2() {
    revertColor();
    runScoring("button2");
    clearTimeout(timeout);
    timeout = setTimeout(revertColor, 200);
}
function buttonClick3() {
    revertColor();
    runScoring("button3");
    clearTimeout(timeout);
    timeout = setTimeout(revertColor, 200);
}
function buttonClick4() {
    revertColor();
    runScoring("button4");
    clearTimeout(timeout);
    timeout = setTimeout(revertColor, 200);
}

function revertColor() {
    document.getElementById("button1").style.backgroundColor = "lime";
    document.getElementById("button2").style.backgroundColor = "lime";
    document.getElementById("button3").style.backgroundColor = "lime";
    document.getElementById("button4").style.backgroundColor = "lime";
}

function runScoring(clicked) {
    document.getElementById(clicked).style.backgroundColor = "skyblue";
    if (clicked == correctbutton) {
        correctquestions++;
        document.getElementById("right").play();
        //timetaken = 0;
        doEquations();
    } else {
        document.getElementById(clicked).style.backgroundColor = "red";
        timetaken += 4;
        document.getElementById("wrong").play();
    }
}