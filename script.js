let music;

$(document).ready(function (){
    music = new Howl({
        src:["audio/muzon.mp3"],
        loop: true,
        volume: 0.45
    });

});

$("#player>img").click(function (e) { 
    if(e.target.id != "isPlaying")
    music.play();
    e.target.id = "isPlaying"
    
});