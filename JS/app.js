$(document).ready(function() {
	setUp();
});

function setUp(){
	//particule js
	particlesJS.load('particles-js', 'assets/particles.json', function() {
	  console.log('callback - particles.js config loaded');
	});

	//compter metro
	var odometer = new Odometer({ el: $('.odometer')[0], value: 123, theme: 'train-station' });
	odometer.render();
}
