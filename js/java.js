$(function () {
  $(document).scroll(function () {
	  var $nav = $(".navbar-fixed-top");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
  $(".movebutton").click(function()
    {window.scrollTo(0, $(".move").offset().top-30);})
});
