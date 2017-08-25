   
jQuery(document).ready(function($){
     
    // jQuery sticky Menu
    
	
    
    
    $('.product-carousel').owlCarousel({
        loop:true,
        nav:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
            }
        }
    });  
    
    $('.related-products-carousel').owlCarousel({
        loop:true,
        nav:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:2,
            },
            1200:{
                items:3,
            }
        }
    });  

    
    $('.brand-list').owlCarousel({
        loop:true,
        nav:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    });    
    
    
    // Bootstrap Mobile Menu fix
    $(".navbar-nav li a").click(function(){
        $(".navbar-collapse").removeClass('in');
    });    
    
    // jQuery Scroll effect
    $('.navbar-nav li a, .scroll-to-up').bind('click', function(event) {
        var $anchor = $(this);
        var headerH = $('.header-area').outerHeight();
        $('html, body').stop().animate({
            scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });    
    	
    // Bootstrap ScrollPSY       //这段加进去导致后面的js（动态添加的商品）全部失效。
    /*$('body').scrollspy({ 
        target: '.navbar-collapse',
        offset: 95
    });*/ 
	
	
});
/*var urlFenlei_pic="http://www.jichuangtech.site/clothshopserver//api/goodsCategories/picture/"+res[key].image+"";
                            $("#ss0").append('<div class="col-md-3 col-sm-6"><div class="single-shop-product"><div class="product-upper">'+
                        '<img src="'+urlFenlei_pic+'" alt=""></div>'+
                        '<h2><a href="">'+res[key].id+'</a></h2>'+
                        '<div class="product-carousel-price">'+
                            '<ins>'+res[key].name+'</ins> <del>$999.00</del>'+
                        '</div>'+  
                        
                        '<div class="product-option-shop">'+
 '<a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>'
                        +'</div>'+                       
                    '</div>'+
                '</div>');*/
    
 
	$(document).ready(function($){ 
	           
    
	                var jsonStu=[{"goodsName":"红布","goodsPrice":"123","goodsPicture":"img/product-1.jpg"},{"goodsName":"蓝布","goodsPrice":"123","goodsPicture":"img/product-1.jpg"},{"goodsName":"黄布","goodsPrice":"123","goodsPicture":"img/product-1.jpg"},{"goodsName":"绿布","goodsPrice":"123","goodsPicture":"img/product-1.jpg"},{"goodsName":"红布","goodsPrice":"123","goodsPicture":"img/product-1.jpg"},{"goodsName":"蓝布","goodsPrice":"123","goodsPicture":"img/product-1.jpg"},{"goodsName":"黄布","goodsPrice":"123","goodsPicture":"img/product-1.jpg"},{"goodsName":"绿布","goodsPrice":"123","goodsPicture":"img/product-1.jpg"},{"goodsName":"红布","goodsPrice":"123","goodsPicture":"img/product-1.jpg"},{"goodsName":"蓝布","goodsPrice":"123","goodsPicture":"img/product-1.jpg"},{"goodsName":"黄布","goodsPrice":"123","goodsPicture":"img/product-1.jpg"},{"goodsName":"绿布","goodsPrice":"123","goodsPicture":"img/product-1.jpg"}]; 
					var jsonStuRed=[{"goodsName":"红布","goodsPrice":"123","goodsPicture":"img/product-2.jpg"},{"goodsName":"红布","goodsPrice":"123","goodsPicture":"img/product-2.jpg"},{"goodsName":"红布","goodsPrice":"123","goodsPicture":"img/product-2.jpg"},{"goodsName":"红布","goodsPrice":"123","goodsPicture":"img/product-2.jpg"},{"goodsName":"红布","goodsPrice":"123","goodsPicture":"img/product-2.jpg"},{"goodsName":"红布","goodsPrice":"123","goodsPicture":"img/product-2.jpg"},{"goodsName":"红布","goodsPrice":"123","goodsPicture":"img/product-2.jpg"},{"goodsName":"红布","goodsPrice":"123","goodsPicture":"img/product-2.jpg"},{"goodsName":"红布","goodsPrice":"123","goodsPicture":"img/product-2.jpg"},{"goodsName":"红布","goodsPrice":"123","goodsPicture":"img/product-2.jpg"},{"goodsName":"红布","goodsPrice":"123","goodsPicture":"img/product-2.jpg"},{"goodsName":"红布","goodsPrice":"123","goodsPicture":"img/product-2.jpg"}];
					var jsonStuYellow=[{"goodsName":"黄布","goodsPrice":"123","goodsPicture":"img/product-3.jpg"},{"goodsName":"黄布","goodsPrice":"123","goodsPicture":"img/product-3.jpg"},{"goodsName":"黄布","goodsPrice":"123","goodsPicture":"img/product-3.jpg"},{"goodsName":"黄布","goodsPrice":"123","goodsPicture":"img/product-3.jpg"},{"goodsName":"黄布","goodsPrice":"123","goodsPicture":"img/product-3.jpg"},{"goodsName":"黄布","goodsPrice":"123","goodsPicture":"img/product-3.jpg"},{"goodsName":"黄布","goodsPrice":"123","goodsPicture":"img/product-3.jpg"},{"goodsName":"黄布","goodsPrice":"123","goodsPicture":"img/product-3.jpg"},{"goodsName":"黄布","goodsPrice":"123","goodsPicture":"img/product-3.jpg"},{"goodsName":"黄布","goodsPrice":"123","goodsPicture":"img/product-3.jpg"},{"goodsName":"黄布","goodsPrice":"123","goodsPicture":"img/product-3.jpg"},{"goodsName":"黄布","goodsPrice":"123","goodsPicture":"img/product-3.jpg"}];
					
	 //注：使用$.getJSON(url,data,function(){})从服务端获取。这里先写死json.
                   var urlFenlei="http://www.jichuangtech.site/clothshopserver//api/goodsCategories";
                   var dataFenlei={};
                   $.getJSON(urlFenlei,dataFenlei,function(res){

                     $.each(res,function(key,value){
                        $("#nav_ul").append('<li ><button  type="button" id="kind'+res[key].id+'">'+res[key].name+'</button></li>');


                        $("#kind"+res[key].id).click(function(){
                            $(this).parents("ul").find("button").css("background-color","#1abc9c");
                            $(this).css("background-color","#000");
                            $("#ss0").empty();

                            
                        var url_3submit="http://www.jichuangtech.site/clothshopserver/api/goods/pagination";
                        var data_3submit={catId:res[key].id,pageSize:2,pageIndex:1};

                        $.getJSON(url_3submit,data_3submit,function(respage){


                            $.each(respage.data,function(k1,v1){

                                var urlFenlei_pic="http://www.jichuangtech.site/clothshopserver//api/goodsCategories/picture/"+respage.data[k1].originalImg+"";
                               $("#ss0").append('<div class="col-md-3 col-sm-6"><div class="single-shop-product"><div class="product-upper">'+
                        '<img src="'+urlFenlei_pic+'" alt=""></div>'+
                        '<h2><a href="">'+respage.data[k1].goodsSn+'</a></h2>'+
                        '<div class="product-carousel-price">'+
                            '<ins>'+respage.data[k1].goodsName+'</ins> <del>$999.00</del>'+
                        '</div>'+  
                        
                        '<div class="product-option-shop">'+
 '<a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>'
                        +'</div>'+                       
                    '</div>'+
                '</div>'); 
                            })
                        })

                        for(var pdid=1;pdid<6;pdid++){
                            $("#page"+pdid).unbind('click');
                            $("#page"+pdid).click(function(){
                                $("#ss0").empty();
                                
                                var data_3submit={catId:res[key].id,pageSize:2,pageIndex:$(this).text()};
                                $.getJSON(url_3submit,data_3submit,function(pagei){
                                    $.each(pagei.data,function(k2,v2){

                                var urlFenlei_pic="http://www.jichuangtech.site/clothshopserver//api/goodsCategories/picture/"+pagei.data[k2].originalImg+"";
                               $("#ss0").append('<div class="col-md-3 col-sm-6"><div class="single-shop-product"><div class="product-upper">'+
                        '<img src="'+urlFenlei_pic+'" alt=""></div>'+
                        '<h2><a href="">'+pagei.data[k2].goodsSn+'</a></h2>'+
                        '<div class="product-carousel-price">'+
                            '<ins>'+pagei.data[k2].goodsName+'</ins> <del>$999.00</del>'+
                        '</div>'+  
                        
                        '<div class="product-option-shop">'+
 '<a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>'
                        +'</div>'+                       
                    '</div>'+
                '</div>'); 
                            });


                                })

                            });
                        }
                        

                        });

                        

                    });
                   });
                   
	   
		var ujson=function(jsonStu){ $.each(jsonStu,function(key,value){
                       $("#ss0").append('<div class="col-md-3 col-sm-6"><div class="single-shop-product"><div class="product-upper">'+
                        '<img src="'+value.goodsPicture+'" alt=""></div>'+
                        '<h2><a href="">'+value.goodsPrice+'</a></h2>'+
                        '<div class="product-carousel-price">'+
                            '<ins>'+value.goodsName+'</ins> <del>$999.00</del>'+
                        '</div>'+  
                        
                        '<div class="product-option-shop">'+
 '<a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>'
                        +'</div>'+                       
                    '</div>'+
                '</div>');
			
			 });};
	 ujson(jsonStu);
	
			
		 

	 
	  var ssd=function(){$("#ss0").empty()};
	  
	
	$("#page10").click(function(){
        $("#ss0").empty();
		ujson(jsonStuRed);
	
});
    $("#yellow").click(function(){
        $("#ss0").empty();
		ujson(jsonStuYellow);
	
});
    });

    $(document).ready(function($){
         $("#hidenav").click(function(){
            $(".rightnav").find("button").animate({width:'0'});
            $("#shownav").animate({width:'100%'});

         });
          $("#shownav").click(function(){
             $(this).animate({width:'0'});
             $("#hidenav").animate({width:'9vh'});
            $(this).parent().nextAll().find("button").animate({width:'9vh'});
         });


    });
$(document).ajaxError(function(){
            alert("某接口无效!");
});
	 //$("#ss0").empty();
	 
	
	