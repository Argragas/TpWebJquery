
//variable globale du script
var tab = ["../image/adc.png","../image/sgc.png","../image/sous-marin.png","../image/avion.png","../image/sgc_css.png","../image/adc_br.png","../image/soldat.png","../image/pompier.png"];

//Permet de recupérer le nom de l'image du joueur donné dans l'url.
function getParam(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);
	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}

//retourne une image aléatoire parmis celle dans le tableau tab.
function getImg(){
	x = tab[Math.floor(Math.random() * Math.floor(6))];
	//l'image ne peux etre celle du joueur
	if (x ==  $('#joueur').attr('src')) {
		getImg();
	} else {
		return x;
	}
}

//fonction propre au fonctionnement du jeu
$(function() {
	  var joueur = getParam('joueur');
	   $('#joueur').attr('src',joueur);
      var ok = 1;
      var box = '#joueur',
      drag = $(".drag"),
      drop = $(".drop");
  
        //gère les déplacement des images.
      function deplace(){
    	 var vitesse = Math.floor((3000-1500)*Math.random())+1500;
        //déplace l'image ennemi
        $('#vr').animate({top: '800'}, vitesse, 'linear', function(){
        //génération de l'emplacement de départ de l'image ennemi.
          var vrX = Math.floor(Math.random()*700);
          var vrY = 0;
          $('#vr').attr('src',getImg);
          $('#vr').css('top',vrY);
          $('#vr').css('left',vrX);
       
          ok = 1;
        });         
      };
	   
	  //Gestion des touche du clavier pour le déplacement de l'image joueur.
	  
	  //touche <- déplacement vers la gauche.
      $(document).keydown(function(e){
        if (e.which == 39)
        {
          vjX = parseInt($('#joueur').css('left'));
          if (vjX < 750)
          $('#joueur').css('left', vjX+30);
        }
        
        //touche -> déplacement vers la droit.
        if (e.which == 37)
        {
          vjX = parseInt($('#joueur').css('left'));
          if (vjX > 30)
            $('#joueur').css('left', vjX-30);
        }
      });

     //Gestion des collision. Utilisation du plugin Collides.
      function collision()
      {
          var collides = drop.overlaps(box);
          //Si il y a collision
          $(box)[collides.hits.length ? $(function() {
            //déplacement de l'image ennemi hors champs.
        	  $('#vr').css('top',1000);
              $('#vr').css('left',1000);
              //Si le joueur touche un element ennemi il gagne des points
              if($('#vr').attr('src').split("_")[0] == $('#joueur').attr('src').split(".png")[0]){
                  $('#puissance').text( parseInt($('#puissance').text()) + 1)  
              }else{
                //sinon son compteur de collision augmente.
                  $('#info').text( parseInt($('#info').text()) + 1)  
              }
                //appel de la fonction deplace pour qu'une nouvelle image soit générée.        	  
        	  deplace();
        	  //Si pas de collision appel de la fonction deplace pour qu'une nouvelle image soit générée.        	  
          }) : $(function() {deplace()}) ];

          ok = 0;
      }
      
      deplace();
      setInterval(collision,10);

    });