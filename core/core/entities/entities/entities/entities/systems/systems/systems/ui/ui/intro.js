const intro=document.getElementById("intro");

const story=[
"GTA WEB PRO MAX",
"",
"In a city controlled by chaos...",
"laws are dead...",
"and silence is louder than guns...",
"",
"Her name is RAHMA.",
"",
"She was not born to survive...",
"she was born to dominate.",
"",
"Every bullet she fires...",
"writes a new law.",
"",
"Welcome to her world."
];

let i=0;

function type(){
if(i>=story.length){
intro.style.display="none";
return;
}

intro.innerText += story[i] + "\n";
i++;
setTimeout(type,800);
}

type();
