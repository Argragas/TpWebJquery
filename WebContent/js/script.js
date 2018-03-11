var tab = ["image/adc.png","image/sgc.png","image/sous-marin.png","image/avion.png","image/css.png","image/br.png"];


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


function getImg(){
	x = tab[Math.floor(Math.random() * Math.floor(6))];
	if (x ==  $('#joueur').attr('src')) {
		getImg();
	} else {
		return x;
	}
	
	
}

$(function() {
	  var joueur = getParam('joueur');
	   $('#joueur').attr('src',joueur);
      var ok = 1;
      var box = '#joueur',
      drag = $(".drag"),
      drop = $(".drop");
  
      function deplace()
      {
    	  
    	  var vitesse = Math.floor((3000-1500)*Math.random())+1500
        $('#vr').animate({top: '800'}, vitesse, 'linear', function(){
          var vrX = Math.floor(Math.random()*750);
          var vrY = 0;
          $('#vr').attr('src',getImg);
          $('#vr').css('top',vrY);
          $('#vr').css('left',vrX);
       
          ok = 1;
        });         
      };
	   
      $(document).keydown(function(e){
        if (e.which == 39)
        {
          vjX = parseInt($('#joueur').css('left'));
          if (vjX < 800)
          $('#joueur').css('left', vjX+30);
        }
        
        
        if (e.which == 37)
        {
          vjX = parseInt($('#joueur').css('left'));
          if (vjX > 30)
            $('#joueur').css('left', vjX-30);
        }
      });

      function collision()
      {
    	 
          var collides = drop.overlaps(box);
          $(box)[collides.hits.length ? $(function() {
        	  $('#vr').css('top',1000);
              $('#vr').css('left',1000);
              
        	  $('#info').text( parseInt($('#info').text()) + 1)
        	  
        	  deplace();
          }) : $(function() {deplace()}) ];

          ok = 0;
      }
      
      deplace();
      setInterval(collision,10);

    });