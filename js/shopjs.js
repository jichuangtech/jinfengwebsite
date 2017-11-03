$(document).ready(function($){ 
	           
    
	               
                   var urlFenlei="https://www.jichuangtech.site/clothshopserver//api/goodsCategories";
                   var dataFenlei={};
                   $.getJSON(urlFenlei,dataFenlei,function(res){

                     $.each(res,function(key,value){
                        $("#nav_ul").append('<li ><button  type="button" id="kind'+res[key].id+'">'+res[key].name+'</button></li>');
                       
                         

                        $("#kind"+res[key].id).click(function(){
                            /*$(this).parents("ul").find("button").css("background","transparent");*/
                            $(this).parents("ul").find("button").css("color","#2a78b7");
                            /*$(this).parents("ul").find("button").removeClass("accctive");*/
                            /*$(this).css("background","#000");*/
                            /*$(this).addClass("accctive");*/ 
                            /*$(this).css("color","#fff");*/
                            $("#ss0").empty();

                            
                        var url_3submit="https://www.jichuangtech.site/clothshopserver/api/goods/pagination";
                        var data_3submit={catId:res[key].id,pageSize:2,pageIndex:1};

                        $.getJSON(url_3submit,data_3submit,function(respage){


                            $.each(respage.data,function(k1,v1){

                                var urlFenlei_pic="https://www.jichuangtech.site/clothshopserver//api/goodsCategories/picture/"+respage.data[k1].originalImg+"";
                                if(!respage.data[k1].originalImg)urlFenlei_pic="img/noproduct.png";
                               $("#ss0").append('<div class="col-md-3 col-sm-6"><div class="single-shop-product"><div class="product-upper">'+
                        '<img src="'+urlFenlei_pic+'" alt=""></div>'+
                        '<h2><a href="">'+respage.data[k1].goodsSn+'</a></h2>'+
                        '<div class="product-carousel-price">'+
                            '<ins>'+respage.data[k1].goodsName+'</ins> <del>$999.00</del>'+
                        '</div>'+  
                        
                                              
                    '</div>'+
                '</div>'); 
                            })

                            $("a[id^='page']").parent().remove();
                           for(var i=1;i<=respage.pageTotal;i++){
                           
                            $("#ppage").before('<li><a id="page'+i+'" href="#">'+i+'</a></li>');
                            }
                        })
                          setTimeout(function () {    
                        for(var pdid=1;pdid<6;pdid++){
                            $("#page"+pdid).unbind('click');
                            $("#page"+pdid).click(function(){
                                $("#ss0").empty();
                                
                                var data_3submit={catId:res[key].id,pageSize:2,pageIndex:$(this).text()};
                                $.getJSON(url_3submit,data_3submit,function(pagei){
                                    $.each(pagei.data,function(k2,v2){

                                var urlFenlei_pic="https://www.jichuangtech.site/clothshopserver//api/goodsCategories/picture/"+pagei.data[k2].originalImg+"";
                                if(!pagei.data[k2].originalImg)urlFenlei_pic="img/noproduct.png";
                               $("#ss0").append('<div class="col-md-3 col-sm-6"><div class="single-shop-product"><div class="product-upper">'+
                        '<img src="'+urlFenlei_pic+'" alt=""></div>'+
                        '<h2><a href="">'+pagei.data[k2].goodsSn+'</a></h2>'+
                        '<div class="product-carousel-price">'+
                            '<ins>'+pagei.data[k2].goodsName+'</ins> <del>$999.00</del>'+
                        '</div>'+                         
                    '</div>'+
                '</div>'); 
                            });//each


                                })//getjson

                            });//click2
                        } }, 500);    //for
                        
                          
                        });//click1

                        

                    });//each
 $("#kind1").trigger("click");
                   });//getjson

                   
	   
		
	
			
		 

	  
	 
    });//jquery

    $(document).ready(function($){
         $("#hidenav").click(function(){
          var cfHid=[
          function(){
            $("#shownav").parent().nextAll().find("button").animate({width:"0"});
            $("#hidenav").animate({width:"0"},aniCB);},
          function(){
             $("#shownav").parent().nextAll().find("button").hide();
            $("#hidenav").hide(aniCB);},
          function(){$("#shownav").show(0,aniCB);},
          function(){$("#shownav").animate({width:"3vh"},aniCB);}
          
          ]
           var aniCB=function() {
          $(document).dequeue("myAnimation");
           }
            $(document).queue("myAnimation",cfHid);
            aniCB();



           });
            
            
            

        
          $("#shownav").click(function(){
            var cfShow=[
            function(){$("#shownav").animate({width:"0"},aniCF);},
            function(){$("#shownav").hide(aniCF);},
            function(){
            $("#shownav").parent().nextAll().find("button").show(0);
            $("#hidenav").show(0,aniCF);
          },
            function(){
              $("#shownav").parent().nextAll().find("button").animate({width:"9vh"});
              $("#hidenav").animate({width:"9vh"},aniCF);}

            ]
           var aniCF=function(){
            $(document).dequeue("cfAnimation");
           };
           $(document).queue("cfAnimation",cfShow);
           aniCF();


             
         });

          

         
          var ssheight=$("#ss0").height();
          
          if(ssheight==0){
            $("#ss0").css({"height":"600px"});
          };//动态ss0高度




});
	 //$("#ss0").empty();