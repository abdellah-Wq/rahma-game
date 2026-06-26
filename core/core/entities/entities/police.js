const Police = [];

function spawnPolice(){
Police.push({
x:rand(0,World.width),
y:rand(0,World.height),
r:18,
speed:2.2
});
}

for(let i=0;i<10;i++)spawnPolice();

function updatePolice(){
Police.forEach(p=>{
let dx=Player.x-p.x;
let dy=Player.y-p.y;
let d=Math.hypot(dx,dy);

if(Player.wanted>0){
p.x += dx/d * p.speed;
p.y += dy/d * p.speed;
}
});
}

function drawPolice(ctx){
Police.forEach(p=>{
ctx.fillStyle="blue";
ctx.fillRect(p.x,p.y,p.r,p.r);
});
}
