let music;

$(document).ready(function (){
    music = new Howl({
        src:["audio/muzon1.mp3","audio/muzon2.mp3","audio/muzon3.mp3"],
        loop: true,
        volume: 0.45
    });

});

$("#tree>img").click(function (e) { 
    music.stop
    let name = e.target.id;
    if(name == "toy1"){
       //music.fade(0.45,0,1000, music)
       //music.stop()
        music.play(1);
}
    else if(name == "toy2"){
       //music.fade(0.45,0,1000, music)
       //music.stop()
        music.play(2);
    }
    else if(name == "toy3"){
        //music.fade(0.45,0,1000, music)
        //music.stop()
        music.play(3);
    }
});


// Интервал
let timer = setInterval(function(){
    // Время нового года
    let newYear = new Date("1 January 2021 00:00:00");
    // Нынешнее время
    let now = new Date();
    //Разность дат
    let diff = newYear - now;
    console.log(diff)

    let seconds = Math.floor(diff/1000);
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);
    let days = Math.floor(hours/24);
    hourstrue = hours % 24;
    if (hourstrue <10)
        hourstrue='0'+hourstrue
    minutestrue = minutes % 60;
    if (minutestrue <10)
        minutestrue='0'+minutestrue
    secondstrue = seconds % 60;
    if (secondstrue <10)
        secondstrue='0'+secondstrue
    console.log(days, hours, minutes, seconds)
    $("#seconds").text(secondstrue);
    $("#minutes").text(minutestrue + " :");
    $("#hours").text(hourstrue + " :");
    $("#days").text(days + " :");


},1000)
    