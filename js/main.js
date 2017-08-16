   
jQuery(document).ready(function($){
    
    // jQuery sticky Menu
    
	$(".mainmenu-area").sticky({topSpacing:0});
    
    
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
    
    // Bootstrap ScrollPSY
    $('body').scrollspy({ 
        target: '.navbar-collapse',
        offset: 95
    }) 
	 
	 var jsonStu=[{"goodsName":"红布","goodsPrice":"123","goodsPicture":"img/product-1.jpg"},{"goodsName":"蓝布","goodsPrice":"123","goodsPicture":"img/product-2.jpg"},{"goodsName":"黄布","goodsPrice":"123","goodsPicture":"img/product-3.jpg"},{"goodsName":"绿布","goodsPrice":"123","goodsPicture":"img/product-4.jpg"},{"goodsName":"红布","goodsPrice":"123","goodsPicture":"img/product-1.jpg"},{"goodsName":"蓝布","goodsPrice":"123","goodsPicture":"img/product-2.jpg"},{"goodsName":"黄布","goodsPrice":"123","goodsPicture":"img/product-3.jpg"},{"goodsName":"绿布","goodsPrice":"123","goodsPicture":"img/product-4.jpg"},{"goodsName":"红布","goodsPrice":"123","goodsPicture":"img/product-1.jpg"},{"goodsName":"蓝布","goodsPrice":"123","goodsPicture":"img/product-2.jpg"},{"goodsName":"黄布","goodsPrice":"123","goodsPicture":"img/product-3.jpg"},{"goodsName":"绿布","goodsPrice":"123","goodsPicture":"img/product-4.jpg"}]; 
	 //注：使用$.getJSON(url,data,function(){})从服务端获取。这里先写死json.
	 var usejson=function(){
		 $.each(jsonStu,function(key,value){
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
                '</div>')
			 })
		 
	 };
	 usejson();
	
	 $("#red").on("click",function(){
		 
		 });
	 //$("#ss0").empty();
});

