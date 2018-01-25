$(document).ready(function () {
    $("#evernote, #warner, #findlaw, #livenation, #nhl, #bethesda").click(function () {
        slide($(this));
    });

    //    var time = 5000;
    //    var play = setInterval(slideShow,time);
    //    $("#section").hover(
    //        function(){
    //            clearInterval(play);
    //        },function(){
    //            play = setInterval(slideShow, time);
    //        }
    //    );
    $("#fButton").click(function () {
        if ($("#featuresDropDown").is(":visible")) {
            $("#featuresDropDown").hide();
        } else {
            $("#servicesDropDown").hide();
            $("#supportDropDown").hide();
            $("#featuresDropDown").show();
        }
    });
    $("#seButton").click(function () {
        if ($("#servicesDropDown").is(":visible")) {
            $("#servicesDropDown").hide();
        } else {
            $("#servicesDropDown").show();
            $("#supportDropDown").hide();
            $("#featuresDropDown").hide();
        }
    });
    $("#sButton").click(function () {
        if ($("#supportDropDown").is(":visible")) {
            $("#supportDropDown").hide();
        } else {
            $("#servicesDropDown").hide();
            $("#supportDropDown").show();
            $("#featuresDropDown").hide();
        }
    });
    $("#file").click(function (){
        $("input[type='file']").trigger("click");
    });
    $("input[type='file']").change(function(){
        var file = $("input[type='file']").val().split("\\");
        var length = file.length;
        $("#file").text(file[length-1]);
        $("#removeFile").show();
    });
    $("#removeFile").click(function(){
        $("#file").text("Attach a file");
        $("input[type='file']").val("");
        $("#removeFile").hide();
    });
    $("#question").click(function(){
        if($("#contactPopup").css("display") == "none" ){
            $("#contactPopup").show();
            $(this).attr("src", "images/icon_close.png");
        }
        else{
            $("#contactPopup").hide();
            $(this).attr("src", "images/question-icon.png");
        }

    });
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

