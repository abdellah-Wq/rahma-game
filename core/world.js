const World = {
width:5000,
height:5000,
walls:[]
};

for(let i=0;i<150;i++){
World.walls.push({
x:Math.random()*World.width,
y:Math.random()*World.height,
w:100,
h:100
});
}
