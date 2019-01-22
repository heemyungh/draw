
// default canvas is empty
if (!localStorage.getItem('canvas')) {
    localStorage.setItem('canvas', "");
}

// stroke history
let strokes = [];
// current stroke being drawn
let stroke = [];

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#svg").innerHTML = localStorage.getItem("canvas");
    document.querySelector("#undo").onclick = undo;
    document.querySelector("#clear").onclick = clear;
    setInterval(save, 60000);
    document.onkeyup = function(e) {
        if (e.ctrlKey && e.which == 90) {
            undo();
        }
    };
});

function save() {
    localStorage.setItem("canvas", document.querySelector("#svg").innerHTML);
}


function undo() {
    stroke = (strokes.length > 0) ? strokes[strokes.length - 1] : [];
    for (let i = stroke.length; i > 0; i--) {
        stroke[i-1].remove();
    }
    strokes.pop();
}

function clear() {
    document.querySelector("#svg").innerHTML = "";
    localStorage.removeItem("canvas");
    strokes = [];
}