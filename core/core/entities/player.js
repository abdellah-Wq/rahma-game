const Player = {
x:1000,
y:1000,
r:18,
hp:100,
ammo:30,
dir:0,
speed:3.5,
wanted:0
};

Player.update = function(){
this.x += Input.x * this.speed;
this.y += Input.y * this.speed;

this.dir = Math.atan2(Input.y,Input.x);
};

Player.draw = function(ctx){
ctx.save();
ctx.translate(this.x,this.y);
ctx.rotate(this.dir);

ctx.fillStyle="#00e5ff";
ctx.beginPath();
ctx.arc(0,0,this.r,0,Math.PI*2);
ctx.fill();

/* weapon */
ctx.fillStyle="white";
ctx.fillRect(10,-3,22,6);

ctx.restore();
};
