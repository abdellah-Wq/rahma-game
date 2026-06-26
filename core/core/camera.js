const Camera = {
x:0,
y:0
};

Camera.update = (target)=>{
Camera.x = target.x - innerWidth/2;
Camera.y = target.y - innerHeight/2;
};
