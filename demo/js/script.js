(function() {

	$(document).ready(function() {
		$( "#slider" ).slider({
		  max: 8
		});
		$("#slider .ui-slider-handle").attr("data-after","1/9");
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
			var index = $(this).data('index');

			carousel.cycleActiveTo(index);
			$( "#slider" ).slider( "value", index );
			e.preventDefault();
		});

		$( "#slider" ).on( "slidechange", function( event, ui ) {
			var index=$( "#slider" ).slider( "value" );
			$("#slider .ui-slider-handle").attr("data-after",(index+1)+"/9");
			 if (event.originalEvent) {
            	carousel.cycleActiveTo(index);
        	}
        	
			
		} );
	});

})();