
$(document).ready(function () {
    setInterval(function(){
        // Время нового года
        let newYear = new Date("1 January 2021 00:00:00");
        // Нынешнее время
        let now = new Date();
        // Разность дат
        let diff = newYear - now;
    
        // Проверяем что таймер не истёк
        if(diff > 0){
            let days = Math.floor( diff/(24*60*60*1000) );
            let hours = Math.floor( (diff%(24*60*60*1000)) / (60*60*1000) );
            let minutes = Math.floor( (diff%(60*60*1000)) / (60*1000));
            let seconds = Math.floor( (diff%(60*1000)) / 1000);
    
            $(".seconds").text(seconds);
            $(".minutes").text(minutes + " :");
            $(".hours").text(hours + " :");
            $(".days").text(days + " :");
        }
        else{
            $("#countdown p, #countdownMobile p").text("Новый Год Наступил!")
            $("#countdown, #countdownMobile").fadeOut(2000, function(){
                $(this).remove();
                $(".envlope-wrapper").fadeIn(1000).removeClass("d-none")
                $(".envlope-wrapperMobile").fadeIn(1000).removeClass("d-none")
            });
        }
    }, 1000)
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

})
// Открываем и закрываем открытку
$(".envlope-wrapper").click(function (e) { 
    $("#envelope").toggleClass("open");
    $("#envelope").toggleClass("close");
});
$(".envlope-wrapperMobile").click(function (e) { 
    $("#envelopeMobile").toggleClass("open");
    $("#envelopeMobile").toggleClass("close");
    
});