const Vehicles = [];

function spawnCar(){
Vehicles.push({
x:rand(0,World.width),
y:rand(0,World.height),
w:40,
h:20,
speed:0
});
}

for(let i=0;i<15;i++)spawnCar();

function drawVehicles(ctx){
Vehicles.forEach(v=>{
ctx.fillStyle="gray";
ctx.fillRect(v.x,v.y,v.w,v.h);
});
}
