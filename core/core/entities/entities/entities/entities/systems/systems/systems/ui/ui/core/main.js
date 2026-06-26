function update(){

Player.update();

updateEnemies();
updatePolice();
AI();
combat();
updateWanted();

Camera.update(Player);
drawHUD();
}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.save();
ctx.translate(-Camera.x,-Camera.y);

/* world */
World.walls.forEach(w=>{
ctx.fillStyle="#1a2233";
ctx.fillRect(w.x,w.y,w.w,w.h);
});

drawVehicles(ctx);
Player.draw(ctx);
drawEnemies(ctx);
drawPolice(ctx);

ctx.restore();
}

function loop(){
update();
draw();
requestAnimationFrame(loop);
}
loop();
