

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Scroll top button




$(document).ready(function(){
	// hide #back-top first
	$("#scroll-top").hide();
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#scroll-top').fadeIn();
			} else {
				$('#scroll-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#scroll-top i').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
		});
	});

});