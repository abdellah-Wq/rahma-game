function drawHUD(){
document.getElementById("hud").innerHTML=`
<b>GTA WEB PRO MAX</b><br>
HP: ${Player.hp.toFixed(0)}<br>
Ammo: ${Player.ammo}<br>
Wanted: ${Player.wanted.toFixed(1)} ★
`;
}
