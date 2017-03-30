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

	// A REVOIR ABSOLUMENT (principe super mais mise en application incorrecte)
	// SetTimeOut bloque totalement le thread d'affichage ! A ne jamais utiliser !
	$('.point').click(function(){
		$('.pola1').addClass('polaAnimer');
		$('.pola2').addClass('polaAnimer');
		$('.pola3').addClass('polaAnimer');
	});

	// Vérifier que le zoomContainer existe toujours, sinon placer ça dans le document clic si areWeZoomed === false
	$('.zoomContainer').click(function(){
		$('.pola1').removeClass('polaAnimer');
		$('.pola2').removeClass('polaAnimer');
		$('.pola3').removeClass('polaAnimer');
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
// PS @Tim, @Dimi : elle est globale, on peut donc l'appeler partout
var areWeZoomed = false;

// Au clic sur n'importe quel élément classe ".point" QUI POSSEDE UNE ID -> on zoom
$('.point').click(function(event){
	// TODO : on devrait supprimer le halo lumineux ici je pense, histoire qu'on voit les points déjà visités
	$('#' + event.target.id).removeClass('pulsating');
	zoom.to({
		element:document.querySelector('#' + event.target.id)
	});
	areWeZoomed = true;
});

/* Gestion de la fonction de zoom arrière (unzoom) */
$(document).click(function(event){
	if(!areWeZoomed){
		zoom.out();
		areWeZoomed = false;
	}
});
