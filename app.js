const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

var $image = $("<img>");
var $caption = $("<p></p>");
var $overlay = $('<div id="overlay"></div>');

$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);

$( "body" ).append($overlay);
//1; Capture the click event on a link to the iamge 
$("#imageGallery a").click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr("href");
