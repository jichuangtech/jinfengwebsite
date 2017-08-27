$(document).ready(function($){ 
	           
    
	               
                   var urlFenlei="https://www.jichuangtech.site/clothshopserver//api/goodsCategories";
                   var dataFenlei={};
                   $.getJSON(urlFenlei,dataFenlei,function(res){

                     $.each(res,function(key,value){
                        $("#nav_ul").append('<li ><button  type="button" id="kind'+res[key].id+'">'+res[key].name+'</button></li>');
                        $("#kind1").trigger("click");


                        $("#kind"+res[key].id).click(function(){
                            $(this).parents("ul").find("button").css("background-color","#1abc9c");
                            $(this).css("background-color","#000");
                            $("#ss0").empty();

                            
                        var url_3submit="https://www.jichuangtech.site/clothshopserver/api/goods/pagination";
                        var data_3submit={catId:res[key].id,pageSize:2,pageIndex:1};

                        $.getJSON(url_3submit,data_3submit,function(respage){


                            $.each(respage.data,function(k1,v1){

                                var urlFenlei_pic="https://www.jichuangtech.site/clothshopserver//api/goodsCategories/picture/"+respage.data[k1].originalImg+"";
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
                            $("a[id^='page']").parent().remove();
                           for(var i=1;i<=respage.pageTotal;i++){
                           
                            $("#ppage").before('<li><a id="page'+i+'" href="#">'+i+'</a></li>');
                            }
                        })

                        for(var pdid=1;pdid<6;pdid++){
                            $("#page"+pdid).unbind('click');
                            $("#page"+pdid).click(function(){
                                $("#ss0").empty();
                                
                                var data_3submit={catId:res[key].id,pageSize:2,pageIndex:$(this).text()};
                                $.getJSON(url_3submit,data_3submit,function(pagei){
                                    $.each(pagei.data,function(k2,v2){

                                var urlFenlei_pic="https://www.jichuangtech.site/clothshopserver//api/goodsCategories/picture/"+pagei.data[k2].originalImg+"";
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
                            });//each


                                })//getjson

                            });//click2
                        }    //for
                        

                        });//click1

                        

                    });//each
                   });//getjson
                   
	   
		
	
			
		 

	 
	 
    });//jquery

    $(document).ready(function($){
         $("#hidenav").click(function(){



            $(this).animate({width:"0"},function(){
              $(this).hide();
            });
            $("#shownav").parent().nextAll().animate({width:"0"},function(){
              $("#shownav").parent().nextAll().hide(function(){
                $("#shownav").show(function(){
                  $("#shownav").animate({width:"100%"});

                });
              
               });
             })
           });
            
            
            

        
          $("#shownav").click(function(){
             $(this).animate({width:"0"},function(){
              $(this).hide(function(){
                $("#hidenav").show(function(){
                  $("#hidenav").animate({width:"100%"});
                });
                $("#shownav").parent().nextAll().show(function(){
                  $("#shownav").parent().nextAll().animate({width:"100%"});
                });

              });
             });

             
             
            
            
         });

});
	 //$("#ss0").empty();