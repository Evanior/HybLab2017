
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

// sound text
var soundAntiquite = new Howl({
      src: ['assets/audio/Antiquite.wav']});
var soundCollabHumain = new Howl({
      src: ['assets/audio/Appli_collab_humain.wav']});
var soundCollabTech = new Howl({
      src: ['assets/audio/Appli_collab_tech.wav']});
var soundFerme = new Howl({
      src: ['assets/audio/Fermes_urbaines.wav']});
var soundMurVege = new Howl({
      src: ['assets/audio/Mur_vegetal.wav']});
var soundPanneauSol = new Howl({
      src: ['assets/audio/Panneau_sol-pho.wav']});
var soundSingapour = new Howl({
      src: ['assets/audio/Singapour.wav']});
var soundVauban = new Howl({
      src: ['assets/audio/Vauban.wav']});
var soundWifiLib = new Howl({
      src: ['assets/audio/WifiLib.wav']});

var soundBruitagesClap = new Howl({
      src: ['assets/Bruitages/claphyblab.mp3']});
var soundBruitagesButton = new Howl({
      src: ['assets/Bruitages/buttonhyblab.mp3']});
var soundBruitagesDeZoom = new Howl({
      src: ['assets/Bruitages/hyplabdezoom.mp3']});
var soundBruitagesZoom = new Howl({
      src: ['assets/Bruitages/hyplabzoom.mp3']});

// Gestion de la date (ODOMETER) au survol d'un point
// au survol de n'importe quel élément ".point" QUI POSSEDE UNE ID -> on refresh l'odomètre (années)
var anneeEnCours = -2121;
var d = new Date();
var n = d.getTime();
function intervalSoundClap(annee){
	if(anneeEnCours != annee){
		d = new Date();
		var time2 = d.getTime();
		if(time2 -n >2000){
			soundBruitagesClap.play();
			n = time2;
		}
	}
};
//TODO changement de couleur? taille ? pour l'intractiviter
$('.point').hover(function(event){


	var annee = 0;
	switch(event.target.id){
		case "p1":
		annee = -312;
		intervalSoundClap(annee);
		anneeEnCours = annee;
			break;
		case "p2":
			annee = 1673;
			intervalSoundClap(annee);
			anneeEnCours = annee;
			break;
		case "p3":
			annee = 1954;
			intervalSoundClap(annee);
			anneeEnCours = annee;
			break;
		case "p4":
			annee = 1986;
			intervalSoundClap(annee);
			anneeEnCours = annee;
			break;
		case "p5":
			annee = 2000;
			intervalSoundClap(annee);
			anneeEnCours = annee;
			break;
		case "p6":
			annee = 2008;
			intervalSoundClap(annee);
			anneeEnCours = annee;
			break;
		case "p7":
			annee = 2010;
			intervalSoundClap(annee);
			anneeEnCours = annee;
			break;
		case "p8":
			annee = 2012;
			intervalSoundClap(annee);
			anneeEnCours = annee;
			break;
		case "p9":
			annee = 2013;
			intervalSoundClap(annee);
			anneeEnCours = annee;
			break;
		case "p10":
			annee = 2030;
			intervalSoundClap(annee);
			anneeEnCours = annee;
			break;
		case "p11":
			annee = 2050;
			intervalSoundClap(annee);
			anneeEnCours = annee;
			break;
		case "p12":
			annee = 0;
			intervalSoundClap(annee);
			anneeEnCours = annee;
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
	soundBruitagesZoom.play();
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
		}, 2500);
	});
	new Promise(resolve => {
		animPola3 = setTimeout(() => {
			resolve($(this).find('.pola3').toggleClass('polaAnimer'));
		}, 750);
	});
});

/* Gestion de la fonction de zoom arrière (unzoom) */
$("body *:not(body .point)").click(function(event){
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
