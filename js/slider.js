// $(document).ready(function(){

// });

$('.slider').slick({
    dots: true,
    arrows: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 2,
  adaptiveHeight: true,
  responsive: [
	  {
		breakpoint: 767,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 3,
		  dots: true,
      arrows: false
		}},
		{
      breakpoint: 601,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  dots: true,
      arrows: false
		}
	  }
	  
	]
});
$(document).ready(function(){
$('.header_burger').click(function(event){
	$('.header_burger, .header_menu').toggleClass('active');
  });


$('.card-columns').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 2,
	arrows: false,
	dots: false,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
	  {
		breakpoint: 767,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2,
		  dots: true,
      arrows: true
		}},
		{
      breakpoint: 601,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  dots: true,
      arrows: true
		}
	  }
	  
	]
  });


});

