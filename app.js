const btn = document.querySelector(".theme-toggle");
const btnToggle = document.querySelector(".theme-toggle span");

btn.onclick = function(){
    btnToggle.classList.toggle("active-btn");
    document.body.classList.toggle("active-dark")
}


var tabBtns=document.querySelectorAll(".tabContainer .tabNames button");
var editorTab=document.querySelectorAll(".tabContainer  .tabPanel");

function getEditor(panelIndex) {
    tabBtns.forEach(function(node){
        node.style.color="";
        node.style.border="";
    });
    tabBtns[panelIndex].style.color="#ef1e65";
    tabBtns[panelIndex].style.borderBottom="4px solid #ef1e65";

    editorTab.forEach(function(node){
        node.style.display="none";
    });
    editorTab[panelIndex].style.display="block";
}
getEditor(0);


function outputFullscreenOperations(){
    outputEnterFullScreen = document.querySelector(".bRight");
    editorExit = document.querySelector(".tabContainer");
    gridChanger = document.querySelector("#container");

    outputEnterFullScreen.classList.toggle("active");
    editorExit.classList.toggle("active");
    gridChanger.classList.toggle("active");
}


function editorFullscreenOperations(){
    inputEnterFullScreen = document.querySelector(".iconContainer");
    outputExit = document.querySelector(".outputHolder");
    gridChanger = document.querySelector("#container");

    inputEnterFullScreen.classList.toggle("active");
    outputExit.classList.toggle("active");
    gridChanger.classList.toggle("active");
}

var j = 0;
//live Rendering Function
function update(i) {
    if (i == 0) {
        let htmlCode = document.getElementById("htmlCode").value;
        let cssCode = document.getElementById("cssCode").value;
        let javascriptCode = document.getElementById("javascriptCode").value;
        let text = htmlCode + "<style>" + cssCode + "</style>" + "<scri" + "pt>" + javascriptCode + "</scri" + "pt>";
        let iframe = document.getElementById('output').contentWindow.document;
        iframe.open();
        iframe.write(text);
        iframe.close();
    }

    else if (i == 1) {

        let htmlCode = document.getElementById("htmlCode").value;
        let html = htmlCode.slice(0, htmlCode.length);
        document.getElementById("htmlCode").value = html;
        j = 1;

    }
}