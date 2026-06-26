const intro=document.getElementById("intro");

window.gameStarted = false;

const story=[
"GTA WEB PRO MAX",
"",
"A city where law collapsed...",
"and chaos became normal...",
"",
"Her name is RAHMA.",
"",
"She does not survive the city...",
"She owns it.",
"",
"Welcome."
];

let i=0;

function next(){
if(i>=story.length){
intro.style.display="none";
window.gameStarted=true;
return;
}

intro.innerText += story[i] + "\n";
i++;

setTimeout(next,700);
}

next();
