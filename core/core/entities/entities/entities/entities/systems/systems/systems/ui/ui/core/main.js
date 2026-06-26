function update(){
if(window.gameStarted === false) return;

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

/* WORLD GRID (VISIBLE FIX) */
ctx.fillStyle="#0f1722";
ctx.fillRect(0,0,World.width,World.height);

/* WALLS */
World.walls.forEach(w=>{
ctx.fillStyle="#1a2233";
ctx.fillRect(w.x,w.y,w.w,w.h);
});

/* ENTITIES */
Player.draw(ctx);
drawEnemies(ctx);
drawPolice(ctx);
drawVehicles(ctx);

ctx.restore();
}

function loop(){
update();
draw();
requestAnimationFrame(loop);
}

loop();
