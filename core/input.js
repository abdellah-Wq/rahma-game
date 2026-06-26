const Input = {
x:0,
y:0,
shoot:false
};

window.addEventListener("touchmove",(e)=>{
let t=e.touches[0];
Input.x = (t.clientX-innerWidth/2)/60;
Input.y = (t.clientY-innerHeight/2)/60;
});

window.addEventListener("touchend",()=>{
Input.x=0;
Input.y=0;
});
