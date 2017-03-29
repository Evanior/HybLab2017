$(document).ready(function() {
	setUp();
});

function setUp(){
	particlesJS.load('particles-js', 'assets/particles.json', function() {
	  console.log('callback - particles.js config loaded');
	});
}
