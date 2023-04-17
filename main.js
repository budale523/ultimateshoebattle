//-----JS for Price Range slider-----

$(function() {
	$( "#slider-range" ).slider({
	  range: true,
	  min: 3000,
	  max: 10000,
	  values: [ 3000, 10000 ],
	  slide: function( event, ui ) {
		$( "#amount" ).val( "₱" + ui.values[ 0 ] + " - ₱" + ui.values[ 1 ] );
	  }
	});
	$( "#amount" ).val( "₱" + $( "#slider-range" ).slider( "values", 0 ) +
	  " - $" + $( "#slider-range" ).slider( "values", 1 ) );
});