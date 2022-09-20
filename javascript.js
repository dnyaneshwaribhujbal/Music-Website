var MySong = document.getElementById("MySong");
var icon = document.getElementById("icon");
icon.onclick = function(){
   if(MySong.paused){
    MySong.play();
    icon.src ="pause.png";
   }else{
 MySong.pause();
    icon.src ="play.png";
}
}