$(document).ready(function(){
  setUp();
  $('#p1').hover(function(){
    $('.split-flap').flapper().val('-312').change();
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
  //initialize split-flap
  $('#display').flapper().val();

	//particule js
	particlesJS.load('particles-js', 'assets/particles.json', function() {
	  console.log('callback - particles.js config loaded');
	});

  // typed content overlay
  $("#typed_title").typed({strings: ["Qu'est ce que la smart city ?"],
    typeSpeed: 30, callback: function(){$('.typed-cursor').first().hide();typed_text();}
  });

  // button skip overlay
  $('.overlay .overlay_content .skip').click(function(event){
    event.preventDefault();
    $('.overlay').hide();
  });
};
