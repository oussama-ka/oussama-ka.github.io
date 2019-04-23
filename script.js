var object=$(".eyr");

if(object.length > 0){
    var offset = object.offset();

    function move(e){
        var center_X = (offset.left + 5) + (object.width() / 2);
        var center_Y = (offset.top) + (object.height() / 2);
        var mouse_X = e.pageX;
        var mouse_Y = e.pageY;

        var radius = Math.atan2(mouse_X - center_X, (-mouse_Y) - (-center_Y));
        var degree = (radius * (160 / Math.PI) * 1);

        object.css('transform','rotate('+degree+'deg)');
    }

    $("body").mousemove(move);
}

if ($("#testest1").is(":focus")) {
  $("#testest").css('border-bottom-width":','3px');
}

//anchor

$("#bout").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$("#disc").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#portf").offset().top
    }, 1000);
});

$("#potol").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#portf").offset().top
    }, 1000);
});

$("#cont").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#conta").offset().top
    }, 1000);
});

$("#top").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#header").offset().top
    }, 1000);
});
