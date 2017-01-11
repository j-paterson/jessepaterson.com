function openNav() {
    document.getElementById("sidenav").style.width = "200px";
	$("#navlinks").fadeIn("slow");
    $("#logo").fadeOut("fast");
    document.getElementById("bars").style.display = "none";
    $("#X").fadeIn("slow");
    document.getElementById("navbtn").style.left = "125px";
    document.getElementById("navbtn").setAttribute( "onClick", "javascript: closeNav();");
    document.getElementById("sidenav").removeAttribute( "onClick");
    $("#dimmer").fadeIn("slow");
}

function closeNav() {
    document.getElementById("sidenav").style.width = "5em";
    document.getElementById("main").style.marginLeft= "5em";
    document.getElementById("navbtn").style.left = "0px";
    document.getElementById("navbtn").setAttribute( "onClick", "javascript: openNav();");
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
        $(".overlay").fadeOut();
        $("#dimmer").fadeOut('fast');
    });
    $("#dimmer").click(function(){
        $(".overlay").fadeOut();
        $("#dimmer").fadeOut('fast');
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
    if(page!=""){
        if(page!="#!"){
            $('#dimmer').fadeIn();
            $(page + '.overlay').fadeIn();
        }
    }
}

/* Code to prevent scrolling during popups */
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}