function calculate(){

let pagesText = document.getElementById("pages").value;
let frames = document.getElementById("frames").value;

let pages = pagesText.split(" ");

let memory = [];
let faults = 0;
let hits = 0;

let output = "";

for(let i=0;i<pages.length;i++){

let page = pages[i];

if(memory.includes(page)){
hits++;
output += "Page Hit → [" + memory.join(" ") + "] <br>";
}
else{

faults++;

if(memory.length < frames){
memory.push(page);
}
else{

let farthest = -1;
let index = 0;

for(let j=0;j<memory.length;j++){

let future = pages.slice(i+1).indexOf(memory[j]);

if(future == -1){
index = j;
break;
}

if(future > farthest){
farthest = future;
index = j;
}

}

memory[index] = page;

}

output += "Page Fault → [" + memory.join(" ") + "] <br>";

}

}

let total = pages.length;

let hitPercent = (hits/total*100).toFixed(2);
let faultPercent = (faults/total*100).toFixed(2);

document.getElementById("result").innerHTML = output;

document.getElementById("stats").innerHTML =
"Hits: "+hits+" ("+hitPercent+"%) <br> Faults: "+faults+" ("+faultPercent+"%)";

}