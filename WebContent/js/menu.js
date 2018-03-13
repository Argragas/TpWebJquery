//variable globale du script
var tab = ["image/adc.png","image/sgc.png","image/marin.png","image/avion.png",,"image/soldat.jpg","image/pompier.jpg"];
var currentimg;

//La fonction tire aléatoirement une image depuis le tableau tab et l'affiche dans la balise img imgJoueur.
function getPlayerAleatoire() {
	currentimg = tab[Math.floor(Math.random() * Math.floor(7))];
	$('#imgJoueur').attr('src',currentimg);
	$("#imgJoueur").animate({		right: '500px', height: '600px',width: '300px'});
	$("#lienMenu").show();
}

//Affiche les differentes images de joueurs dans des div puis affiche ces div dans affichageJoueurs.
//TODO coder la fonction ! ^^ .... ne pas oublier d'ajouter un onClick sur l'image pour pouvoir générer le lien.
function afficherLesJoueurs(){
    alert("TODO");
   
}


//Fonction générant un lien hypertexte avec un paramètre joueur et sa valeur correspondante à l'image choisie par la fonction
//getPlayerAleatoire()
function genererLien(){
	url = "page/game.html?joueur=" + "../"+ currentimg; 
	$("#lienMenu").attr('href',url);
}
