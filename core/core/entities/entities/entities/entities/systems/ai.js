function AI(){
Enemies.forEach(e=>{
let dx=Player.x-e.x;
let dy=Player.y-e.y;
let d=Math.hypot(dx,dy);

if(d<150){
e.x -= dy/d;
e.y += dx/d;
}
});
}
