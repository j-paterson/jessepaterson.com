$("#sidenav #navbtn #logo").click(function(e) {
   e.stopPropagation();
});

function openNav() {
    document.getElementById("sidenav").style.width = "200px";
	$("#navlinks").fadeIn("slow");
    $("#logo").fadeOut("fast");
    document.getElementById("bars").style.display = "none";
    $("#X").fadeIn("slow");
    document.getElementById("navbtn").style.left = "125px";
    //document.getElementById("navbtn").setAttribute( "onClick", "javascript: closeNav();");
    document.getElementById("sidenav").removeAttribute( "onClick");
    $("#dimmer").fadeIn("slow");
}

function closeNav() {
    document.getElementById("sidenav").style.width = "5em";
    document.getElementById("main").style.marginLeft= "5em";
    document.getElementById("navbtn").style.left = "0px";
    //document.getElementById("navbtn").setAttribute( "onClick", "javascript: openNav();");
    $("#logo").fadeIn("slow");
    $("#bars").fadeIn("slow");
    document.getElementById("X").style.display = "none";
    $("#navlinks").fadeOut("fast");
    $("#dimmer").fadeOut("fast", function() {
        document.getElementById("sidenav").setAttribute( "onClick", "javascript: openNav();");
    });
}

function scrollTo(hash) {
    $(document.body).animate({
    'scrollTop':   $(hash).offset().top
    }, 500);
}

$(document).ready(function() {
    $(".exit").click(function(){
        var iframe = $('.current').find('iframe');
        $('.current').removeClass('current');
        var src = $(iframe).attr('src');      
        $(iframe).attr('src', '').attr('src', src);
        $(".overlay").fadeOut();
        $("#dimmer").fadeOut('fast');
        $("body").removeClass("noscroll");
    });
    $("#dimmer").click(function(){
        var iframe = $('.current').find('iframe');
        $('.current').removeClass('current');
        var src = $(iframe).attr('src');      
        $(iframe).attr('src', '').attr('src', src);
        $(".overlay").fadeOut();
        $("#dimmer").fadeOut('fast');
        $("body").removeClass("noscroll");
    });
    $('.navlink').click(function(){
        closeNav();
    });
});

/* Loading Modal Elements */

$(window).on('load', function() {
    loadPage();
});

$(window).bind('hashchange', loadPage);

function loadPage(){
    // Update  variables on page load
    page = window.location.hash.toLowerCase();
    id=page.replace("#", "");
    if(page!==""){
        if(page!="#!" && page!="#about" && page!="#skills" && page!="#experience" && page!="#projects"){
            $('#dimmer').fadeIn();
            $(page + '.overlay').fadeIn();
            $(page + '.overlay').addClass('current');
            $("body").addClass("noscroll");
        }
    }
}



