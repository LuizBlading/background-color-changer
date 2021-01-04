let btn = document.querySelector("#btn");
let doc = document.documentElement;

let arrColors = ["#A020F0","#B22222","#7B68EE","#3CB371","FFFFFFF", "#000000"];

function changeColor(){
    let numSorted = Math.floor(Math.random() * 6);
    doc.style.backgroundColor = arrColors[numSorted]; 
}

btn.onclick = changeColor  
