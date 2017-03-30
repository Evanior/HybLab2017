
$(document).ready(function(){
	// Initialisation de Particles JS
	particlesJS.load('particles-js', 'assets/particles.json');

	// Affichage du titre de la popup d'introduction (Typed.js)
	$("#typed_title").typed({
		strings:["Qu'est ce que la smart city ?"],
		typeSpeed:30,
		callback:function(){
			$('.typed-cursor').hide();
		}
	});

	// Bouton passer (passe la popup d'introduction)
	$('.overlay .overlay_content .skip').click(function(event){
		event.preventDefault();
		$('.overlay').hide();
	});
});

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
// gestion du sons text
$('.inPoint #playAntiquite').click(function(event){
	event.preventDefault();
	if($('.inPoint #playAntiquite>i').hasClass("fa-play")){
		soundAntiquite.play();
		$('.inPoint #playAntiquite >i').removeClass("fa-play");
		$('.inPoint #playAntiquite >i').addClass("fa-pause");
	}
	else{
		$('.inPoint #playAntiquite >i').removeClass("fa-pause");
		$('.inPoint #playAntiquite >i').addClass("fa-play");
		soundAntiquite.pause();
	}
	event.stopPropagation();
});

$('.inPoint #playVauban').click(function(event){
	event.preventDefault();
	if($('.inPoint #playVauban>i').hasClass("fa-play")){
		soundVauban.play();
		$('.inPoint #playVauban >i').removeClass("fa-play");
		$('.inPoint #playVauban >i').addClass("fa-pause");
	}
	else{
		$('.inPoint #playVauban >i').removeClass("fa-pause");
		$('.inPoint #playVauban >i').addClass("fa-play");
		soundVauban.pause();
	}
	event.stopPropagation();
});

$('.inPoint #playPanneauSolaire').click(function(event){
	event.preventDefault();
	if($('.inPoint #playPanneauSolaire>i').hasClass("fa-play")){
		soundPanneauSol.play();
		$('.inPoint #playPanneauSolaire >i').removeClass("fa-play");
		$('.inPoint #playPanneauSolaire >i').addClass("fa-pause");
	}
	else{
		$('.inPoint #playPanneauSolaire >i').removeClass("fa-pause");
		$('.inPoint #playPanneauSolaire >i').addClass("fa-play");
		soundPanneauSol.pause();
	}
	event.stopPropagation();
});

$('.inPoint #playMurVegetaux').click(function(event){
	event.preventDefault();
	if($('.inPoint #playMurVegetaux>i').hasClass("fa-play")){
		soundMurVege.play();
		$('.inPoint #playMurVegetaux >i').removeClass("fa-play");
		$('.inPoint #playMurVegetaux >i').addClass("fa-pause");
	}
	else{
		$('.inPoint #playMurVegetaux >i').removeClass("fa-pause");
		$('.inPoint #playMurVegetaux >i').addClass("fa-play");
		soundMurVege.pause();
	}
	event.stopPropagation();
});

$('.inPoint #playCollabHumain').click(function(event){
	event.preventDefault();
	if($('.inPoint #playCollabHumain>i').hasClass("fa-play")){
		soundCollabHumain.play();
		$('.inPoint #playCollabHumain >i').removeClass("fa-play");
		$('.inPoint #playCollabHumain >i').addClass("fa-pause");
	}
	else{
		$('.inPoint #playCollabHumain >i').removeClass("fa-pause");
		$('.inPoint #playCollabHumain >i').addClass("fa-play");
		soundCollabHumain.pause();
	}
	event.stopPropagation();
});

$('.inPoint #playCollabTech').click(function(event){
	event.preventDefault();
	if($('.inPoint #playCollabTech>i').hasClass("fa-play")){
		soundCollabTech.play();
		$('.inPoint #playCollabTech >i').removeClass("fa-play");
		$('.inPoint #playCollabTech >i').addClass("fa-pause");
	}
	else{
		$('.inPoint #playCollabTech >i').removeClass("fa-pause");
		$('.inPoint #playCollabTech >i').addClass("fa-play");
		soundCollabTech.pause();
	}
	event.stopPropagation();
});

$('.inPoint #playFermeUrbaine').click(function(event){
	event.preventDefault();
	if($('.inPoint #playFermeUrbaine>i').hasClass("fa-play")){
		soundFerme.play();
		$('.inPoint #playFermeUrbaine >i').removeClass("fa-play");
		$('.inPoint #playFermeUrbaine >i').addClass("fa-pause");
	}
	else{
		$('.inPoint #playFermeUrbaine >i').removeClass("fa-pause");
		$('.inPoint #playFermeUrbaine >i').addClass("fa-play");
		soundFerme.pause();
	}
	event.stopPropagation();
});

$('.inPoint #playSingapour').click(function(event){
	event.preventDefault();
	if($('.inPoint #playSingapour>i').hasClass("fa-play")){
		soundSingapour.play();
		$('.inPoint #playSingapour >i').removeClass("fa-play");
		$('.inPoint #playSingapour >i').addClass("fa-pause");
	}
	else{
		$('.inPoint #playSingapour >i').removeClass("fa-pause");
		$('.inPoint #playSingapour >i').addClass("fa-play");
		soundSingapour.pause();
	}
	event.stopPropagation();
});

$('.inPoint #playWifiLib').click(function(event){
	event.preventDefault();
	if($('.inPoint #playWifiLib>i').hasClass("fa-play")){
		soundWifiLib.play();
		$('.inPoint #playWifiLib >i').removeClass("fa-play");
		$('.inPoint #playWifiLib >i').addClass("fa-pause");
	}
	else{
		$('.inPoint #playWifiLib >i').removeClass("fa-pause");
		$('.inPoint #playWifiLib >i').addClass("fa-play");
		soundWifiLib.pause();
	}
	event.stopPropagation();
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
	$(this).addClass('selectedZoomTarget');
	new Promise(resolve => {
		animPola1 = setTimeout(() => {
			resolve($(this).find('.pola1').addClass('polaAnimer'));
		}, 1500);
	});
	new Promise(resolve => {
		animPola2 = setTimeout(() => {
			resolve($(this).find('.pola2').addClass('polaAnimer'));
		}, 2500);
	});
	new Promise(resolve => {
		animPola3 = setTimeout(() => {
			resolve($(this).find('.pola3, .play').addClass('polaAnimer'));
		}, 750);
	});
	event.stopPropagation();
});

/* Gestion de la fonction de zoom arrière (unzoom) */
$("body").click(function(event){
	if($(event.target).hasClass('.point') && $(event.target).hasClass('.play') && $(event.target).hasClass('.inPoint') && $(event.target).hasClass('.pola')){
		return false;
	}
	if(areWeZoomed){
		clearTimeout(animPola1);
		clearTimeout(animPola2);
		clearTimeout(animPola3);
		$('.pola1').removeClass('polaAnimer');
		$('.pola2').removeClass('polaAnimer');
		$('.pola3').removeClass('polaAnimer');
		$('.zoomTarget').removeClass('selectedZoomTarget');
		$('.play').removeClass('polaAnimer');
		zoom.out();
		areWeZoomed = false;
	}
});

$('#credits').click(function(){
	window.open('assets/credits.pdf');
});
