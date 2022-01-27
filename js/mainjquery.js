$(function(){
    //Ocultar
    $("#hidebtn").click(function() {
        $("#test1").hide(1500);
    });

    //Mostrar
    $("#showbtn").click(function() {
        $("#test1").show(1500);
    });

    //Cambiar tamaño
    $("#test2btn").click(function() {
        $("#tamaño").animate({fontSize:'2.4em',width:400,padding:24}, 2500);
    });

    //Ocultar con FadeOut
    $("#fadebtn").click(function() {
        $("#fade").fadeOut(2000);
    });
    
    //Mostrar con FadeIn
    $("#fadebtn").dblclick(function() {
        $("#fade").fadeIn(2000);
    });

    //Mover
    $("#movebtn").click(function(){
        $("#move").animate({opacity: "0.1", left: "+=400",fontSize:'1em',width: "200"}, 1200)
        .animate({opacity: "0.4", top: "+=160", height: "20", width: "80",fontSize:'0.5em'}, "slow")
        .animate({opacity: "1", left: "0", width: "260"}, "slow")
        .animate({top: "0",width: "260",fontSize:'1.2em'}, "fast")
        .slideUp()
        .slideDown(1800)
        return false;
    });
});