
$(document).ready(function () {
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
        $(".seconds").text(secondstrue);
        $(".minutes").text(minutestrue + " :");
        $(".hours").text(hourstrue + " :");
        $(".days").text(days + " :");


    },1000)
}); 
// Если нажали на ноту, играет музыка
// Список музыки
let music1 = new Howl({
    src: ["audio/1.mp3"],
    loop: true,
    volume: 0.5
});
let music2 = new Howl({
    src: ["audio/2.mp3"],
    loop: true,
    volume: 0.5
});
let music3 = new Howl({
    src: ["audio/3.mp3"],
    loop: true,
    volume: 0.5
});
// Проигрыш музыки
$("#tree>img").click(function(e){ 
    let name = e.target.id;

    if(name == "toy1"){
        music2.stop();
        music3.stop();

        music1.play();
    }
    else if(name == "toy2"){
        music1.stop();
        music3.stop();

        music2.play();
    }
    else if(name == "toy3"){
        music2.stop();
        music1.stop();

        music3.play();
    }
});
$("#treeMobile>img").click(function(e){ 
    let name = e.target.id;

    if(name == "toy1"){
        music2.stop();
        music3.stop();

        music1.play();
    }
    else if(name == "toy2"){
        music1.stop();
        music3.stop();

        music2.play();
    }
    else if(name == "toy3"){
        music2.stop();
        music1.stop();

        music3.play();
    }
});
$("#tree>#treeStar").click(function (e) { 
    music1.stop()
    music2.stop()
    music3.stop()
    
    
});
$("#treeMobile>#treeStar").click(function (e) { 
    music1.stop()
    music2.stop()
    music3.stop()
    
    
});

$(".hat").click(function(e){ 
    $(e.currentTarget).addClass("hatBounce");
    setTimeout(function(){
        $(e.currentTarget).removeClass("hatBounce");
    }, 1500)
});

setInterval(function () {

    $(".hand-r").addClass("hand-rSwing");

    setTimeout(function(){
        $(".hand-r").removeClass("hand-rSwing");
    }, 1500)
}, 3500);

    
    