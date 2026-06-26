function combat(){
Enemies.forEach((e,ei)=>{
if(dist(Player,e)<20){
Player.hp -= 0.5;
Player.wanted += 0.05;
}
});
}
