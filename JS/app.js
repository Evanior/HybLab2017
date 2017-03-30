
$(document).ready(function(){
	// Initialisation de Particles JS
	particlesJS.load('particles-js', 'assets/particles.json');

	// Affichage du titre de la popup d'introduction (Typed.js)
	$("#typed_title").typed({
		strings:["Qu'est ce que smart city ?"],
		typeSpeed:30,
		callback:function(){
			$('.typed-cursor').first().hide();
			typed_text();
		}
	});

	// Bouton passer (passe la popup d'introduction)
	$('.overlay .overlay_content .skip').click(function(event){
		event.preventDefault();
		$('.overlay').hide();
	});
});

// Fonction d'affichage du texte long d'introduction (Typed.js)
function typed_text(){
	$("#typed_text").typed({
		strings: ["Là, tu te demande sur quoi tu es tombé. On te dit “Smart City” tu vois des hoverboards et des chaussures qui se laçent toutes seules. On te dit “Ville intelligente”, tu trouve ça tout de suite un peu moins stylé. Mais nous on va te dire “Ville maline” et là tu penses présent, tu penses collaboratif, environnement, pratique, économique. Et si t’y pensais pas, maintenant c’est le cas ! Alors laisse-toi guider au fil du temps, et découvre comment en étant malin, ta ville le deviendra aussi !"],
		typeSpeed: 1,
		callback: function(){
			$('.typed-cursor').hide();
		}
	});
}

// Gestion de la date (ODOMETER) au survol d'un point
// au survol de n'importe quel élément ".point" QUI POSSEDE UNE ID -> on refresh l'odomètre (années)
//TODO changement de couleur? taille ? pour l'intractiviter
$('.point').hover(function(event){
	var annee = 0;
	switch(event.target.id){
		case "p1":
			annee = -312;
			break;
		case "p2":
			annee = 1954;
			break;
		case "p3":
			annee = 1986;
			break;
		case "p4":
			annee = 2000;
			break;
		case "p5":
			annee = 2012;
			break;
		case "p6":
			annee = 0;
			break;
		case "p7":
			annee = 0;
			break;
		case "p8":
			annee = 0;
			break;
		case "p9":
			annee = 0;
			break;
		case "p10":
			annee = 0;
			break;
		case "p11":
			annee = 0;
			break;
		case "p12":
			annee = 0;
			break;
	}
	$('.odometer').html(annee);
});

// Variable qui permet de savoir si on est zoomés ou pas (et donc d'activer le dézoom au clic à la place du zoom)
var areWeZoomed = false;
var animPola1;
var animPola2;
var animPola3;

$('.point').click(function(event){
	if(!areWeZoomed){
		$(this).removeClass('pulsating');
		zoom.to({
			element:document.querySelector('#' + event.target.id)
		});
		areWeZoomed = true;
	}
	$(this).toggleClass('selectedZoomTarget');
	new Promise(resolve => {
		animPola1 = setTimeout(() => {
			resolve($(this).find('.pola1').toggleClass('polaAnimer'));
		}, 1500);
	});
	new Promise(resolve => {
		animPola2 = setTimeout(() => {
			resolve($(this).find('.pola2').toggleClass('polaAnimer'));
		}, 3500);
	});
	new Promise(resolve => {
		animPola3 = setTimeout(() => {
			resolve($(this).find('.pola3').toggleClass('polaAnimer'));
		}, 7000);
	});
});

/* Gestion de la fonction de zoom arrière (unzoom) */
$("body *:not(body .point)").click(function(event){
	console.log("click");
	if(areWeZoomed){
		clearTimeout(animPola1);
		clearTimeout(animPola2);
		clearTimeout(animPola3);
		$('.pola1').removeClass('polaAnimer');
		$('.pola2').removeClass('polaAnimer');
		$('.pola3').removeClass('polaAnimer');
		zoom.out();
		areWeZoomed = false;
	}
});
