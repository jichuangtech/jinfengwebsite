$(document).ready(function() {

      var navi=$(".mainmenu-area");
	 
      $('#main_html').load('index.html');
	  
	  
	  $("#goshop").click(function(){
		  $('#main_html').load('shop.html');
		  navi.find("li").removeClass('active');
		  $(this).parents("li").addClass('active');
		});
	  $("#goindex").click(function(){
	      $('#main_html').load('index.html');
		  navi.find("li").removeClass('active');
		  $(this).parents("li").addClass('active');
		 
	  });
	  
	  
	  /*$("#footer_html").click(function(){
		  $(".navbar-collapse").css("display","none");
		  })*/
	
	  
  
	  
	});// JavaScript Document