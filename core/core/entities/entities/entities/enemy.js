const Enemies = [];

function spawnEnemy(){
Enemies.push({
x:rand(0,World.width),
y:rand(0,World.height),
r:16,
hp:30
});
}

for(let i=0;i<30;i++)spawnEnemy();

function updateEnemies(){
Enemies.forEach(e=>{
let dx=Player.x-e.x;
let dy=Player.y-e.y;
let d=Math.hypot(dx,dy);

e.x += dx/d * 1.4;
e.y += dy/d * 1.4;

if(d<25){
Player.hp -= 0.4;
Player.wanted += 0.01;
}
});
}

function drawEnemies(ctx){
Enemies.forEach(e=>{
ctx.fillStyle="red";
ctx.fillRect(e.x,e.y,e.r,e.r);
});
}
