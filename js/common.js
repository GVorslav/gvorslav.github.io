$(function() {

	// Search start
	$('.fa-search').click(function(){
	    $('.search-container, .search-input').toggleClass('active');
	    $('.search-input').focus();
	  });

	function hideSearch(){
		$('.search-container').removeClass('active');
		$('.search-input').removeClass('active');
	}

	$(document).on('click', function(e){
		if (!(
		($(e.target).parents('.search-container', '.search-input').length)
		||	($(e.target).hasClass('active')))
		) {
			hideSearch();
		}
	});
	// Search end

	$(document).ready(function(){
		$(".owl-carousel").owlCarousel({
			items:                4,
			loop:                 true,
			mouseDrag:            false,
			margin:               9,
			responsive : {
					0 : {
						items:                1.15,
						mouseDrag:            true,
						touchDrag:            true,
						autoplay:             true,
						autoplayTimeout:      6000,
					},
					480 : {
						items:                2.15,
						mouseDrag:            true,
						touchDrag:            true,
						autoplay:             true,
						autoplayTimeout:      6000,
					},
					992 : {

					}
			}

		});
	});

	//Burger btn start
	var menuButton = document.getElementById('menuButton');
			menuButton.addEventListener('click', function (e) {
			menuButton.classList.toggle('is-active');
			e.preventDefault();
	});
	//Burger btn end

	//Hide burger btn start
		$(document).on('click', function(e){
		if (!(
		($(e.target).parents('.menu-button').length)
		||	($(e.target).hasClass('is-active')))
		) {
			hideMenu();
		}
	});

	function hideMenu(){
		$('.menu-button').removeClass('is-active');
	}
	//Hide burger btn end

	//Mobile search start
	$(document).ready(function(){
		$('#msearch').on('click', function(event) {                    
			$('#search').addClass('open');
			$('#search > form > input[type="search"]').focus();
		});            
		$('#search, #search button.close').on('click keyup', function(event) {
			if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
				$(this).removeClass('open');
			}
		});            
	});
});
