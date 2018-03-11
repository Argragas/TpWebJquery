var tab = ["image/adc.png","image/sgc.png","image/sous-marin.png","image/avion.png"];
var currentimg;

function getPlayer() {
	currentimg = tab[Math.floor(Math.random() * Math.floor(4))];
	$('#imgJoueur').attr('src',currentimg);
	$("#imgJoueur").animate({		right: '500px', height: '600px',width: '300px'});
	$("#lienMenu").show();
}

function genererLien(){

	url = "page/game.html?joueur=" + "../"+ currentimg; 
	$("#lienMenu").attr('href',url);
	console.log(currentimg);

}
