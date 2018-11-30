$(function () {
  $(document).scroll(function () {
	  var $nav = $(".navbar-fixed-top");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
  $(".movebutton").click(function()
    {window.scrollTo(0, $(".move").offset().top-150);})
  $(".movebutton2").click(function()
      {window.scrollTo(0, $(".move2").offset().top-150);})
  $(".movebutton3").click(function()
          {window.scrollTo(0, $(".move3").offset().top-150);})
});
