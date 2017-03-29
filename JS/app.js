$(document).ready(function(){
  setUp();
  $('.overlay .overlay_content .skip').click(function(event){
    console.log('test');
    event.preventDefault();
    $('.overlay').hide();
  });
});

function typed_text(){
  $("#typed_text").typed({
    strings: ["Là tu te demande sur quoi tu es tombé, on te dit “Smart City” tu vois des hoverboards et des chaussures qui se lacent toutes seules. On te dit “Ville intelligente” tu trouve ça tout de suite un peu moins stylé. Mais nous on va te dire “Ville maline” et là tu pense présent, tu pense collaboratif, environnement, pratique, économique. Et si t’y pensais pas, maintenant c’est le cas ! Alors laisse toi guider au fil du temps et découvre comment en étant malin ta ville le deviendra aussi !"],
    typeSpeed: 1, callback: function(){
      $('.typed-cursor').hide();}
  });
}
function setUp(){
	//particule js
	particlesJS.load('particles-js', 'assets/particles.json', function() {
	  console.log('callback - particles.js config loaded');
	});

	//compter metro
	var odometer = new Odometer({ el: $('.odometer')[0], value: 123, theme: 'train-station' });
	odometer.render();

  // typed content overlay
  $("#typed_title").typed({strings: ["Qu'est ce que smart city ?"],
    typeSpeed: 30, callback: function(){$('.typed-cursor').first().hide();typed_text();}
  });
};
