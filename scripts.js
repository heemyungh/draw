
// default canvas is empty
if (!localStorage.getItem('canvas')) {
    localStorage.setItem('canvas', "");
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#svg").innerHTML = localStorage.getItem("canvas");
    document.querySelector("#clear").onclick = clear;
    setInterval(save, 60000);
});

function save() {
    localStorage.setItem("canvas", document.querySelector("#svg").innerHTML);
}

function clear() {
    document.querySelector("#svg").innerHTML = "";
    localStorage.removeItem("canvas");
}