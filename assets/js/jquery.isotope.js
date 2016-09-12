$(window).load(function(){
	var $grid = $('.grid').isotope({
		getSortData: {
			number:'.number parseInt'
		},
		sortBy: 'number',
		itemSelector: '.grid-item',
		filter: ':not(.noshow)',
		layoutMode: 'fitRows'
	});
});

var $grid = $('.grid').isotope({
	getSortData: {
		number:'.number parseInt'
	},
	sortBy: 'number',
	itemSelector: '.grid-item',
	filter: ':not(.noshow)',
	layoutMode: 'fitRows'
});

var filterValue ='*';

$('#isotope-filter li').on( 'click', function() {
	filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: (filterValue) });
	var clicked =$(this);
	var elements = document.getElementById('isotope-filter').children;
	var hit=false;
	for (var i = 0; i < elements.length; i++){
		if ($(elements[i]).attr('data-filter')!==filterValue){
			if(hit===false && (!$(elements[i]).hasClass('home-selector'))){
				$(elements[i]).addClass('border_selected');
			} else {
				$(elements[i]).removeClass('border_selected');
			}
		} else{
			if(!$(elements[i]).hasClass('home-selector')){
				$(clicked).addClass('border_selected');
			}
			hit=true;
		}
	}
});


$('div#projects div.grid-item').click(function(){
	var clicked = $(this);
	$.when($("#projects").fadeTo("fast", 0.00001)
							.promise()
                            .done(function() {
        var elements = document.getElementsByClassName('grid-item');
        for (var i = 0; i < elements.length; i++){
			if ($(elements[i]).hasClass('opened') && !$(elements[i]).is(clicked)){
				update(elements[i]);
			}
        }
		update(clicked);
		$grid.isotope('updateSortData').isotope();
		$grid.isotope({ filter: filterValue });
		setTimeout(function(){
			$("#projects").fadeTo("fast", 1);
		}, 50);
		function update(element){
			$(element).children("img").toggleClass('col-md-4 col-md-12');
			$(element).children("div").toggleClass('col-md-8 col-md-12');
			$(element)
				.toggleClass('opened closed')
				.toggleClass('col-md-12 col-sm-12')
				.toggleClass('col-md-3 col-sm-6');
			var num = $(element).children('.number').text();
			if(num==='5'){
				$(element).children('.number').text("4");
			} else if(num==='4'){
				$(element).children('.number').text("5");
			}
		}
    }));
});

//Menu Button
$('.menu-btn').click(function(){
	$('.responsive-menu').toggleClass('expand');
});

//blog center on scroll
function center() {
    $('html,body').animate({
		scrollTop: $(this).offset().top - ( $(window).height() - $(this).outerHeight(true) ) / 2}, 200);
}
