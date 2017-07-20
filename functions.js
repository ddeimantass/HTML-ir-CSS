$(document).ready(function () {
    $("#evernote, #warner, #findlaw, #livenation, #nhl, #bethesda").click(function () {
        slide($(this));
    });
    //    var play = setInterval(slideShow,1000);
    //    $("#section").hover(
    //        function(){
    //            clearInterval(play);
    //        },function(){
    //            play = setInterval(slideShow, 1000);
    //        }
    //    );
});

function slide(that) {
    $("#meniu ul li.active").removeClass("active");
    that.addClass("active");
    $("#karusele .container").addClass("hide");
    var id = that.attr("id");
    $("#" + id + "Container").removeClass("hide");
}

function slideShow() {
    switch ($("#meniu ul li.active").attr("id")) {
        case "evernote":
            $("#warner").trigger("click");
            break;
        case "warner":
            $("#findlaw").trigger("click");
            break;
        case "findlaw":
            $("#livenation").trigger("click");
            break;
        case "livenation":
            $("#nhl").trigger("click");
            break;
        case "nhl":
            $("#bethesda").trigger("click");
            break;
        case "bethesda":
            $("#evernote").trigger("click");
            break;
    }
}
