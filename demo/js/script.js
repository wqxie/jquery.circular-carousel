(function() {

	$(document).ready(function() {
		$( "#slider" ).slider({
		  max: 8
		});
		var options = {
			ovalWidth: 400,
			ovalHeight: 0,
			offsetX: 100,
			offsetY: 360,
			angle: 0,
			activeItem: 0,
			duration: 350,
			className: 'item'
		}

		var carousel = $('.carousel').CircularCarousel(options);

		/* Fires when an item is about to start it's activate animation */
		carousel.on('itemBeforeActive', function(e, item) {
			// $(item).css('box-shadow', '0 0 20px blue');
		});

		/* Fires after an item finishes it's activate animation */
		carousel.on('itemActive', function(e, item) {
			// $(item).css('box-shadow', '0 0 20px green');
			// var index = $(".carousel .item.active").index('li');
			// console.log(index);
			// $( "#slider" ).slider( "value", index );
		});

		/* Fires when an active item starts it's de-activate animation */
		carousel.on('itemBeforeDeactivate', function(e, item) {
			// $(item).css('box-shadow', '0 0 20px yellow');
		});

		/* Fires after an active item has finished it's de-activate animation */
		carousel.on('itemAfterDeactivate', function(e, item) {
			// $(item).css('box-shadow', '');
		});


		/* Manaully click an item anywhere in the carousel */
		$('.carousel .item').click(function(e) {
			var index = $(this).index('li');
			carousel.cycleActiveTo(index);
			$( "#slider" ).slider( "value", index );
			console.log(index);
			e.preventDefault();
		});
		
		$("input#num").on("change",function(){
			var index = parseInt($(this).val());
			carousel.cycleActiveTo(index);
		});

		$( "#slider" ).on( "slidechange", function( event, ui ) {
			var index=$( "#slider" ).slider( "value" );
			carousel.cycleActiveTo(index);
		} );
	});

})();