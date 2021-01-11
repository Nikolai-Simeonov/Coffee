window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("fixed-top", window.scrollY > 20);
})

$(function() {
	AOS.init({
		duration: 600,
	});
  });





