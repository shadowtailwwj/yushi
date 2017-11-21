$(document).ready(function(){
	window.setTimeout(function(){
		$(".loading").fadeOut(500)
	},400);
	
	if($("#slideBox").length)
	TouchSlide({ 
		slideCell:"#slideBox",
		titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
		mainCell:".bd ul", 
		effect:"leftLoop", 
		autoPage:true,//自动分页
		autoPlay:true //自动播放
	});
	if($("#vipfunc").length)
	TouchSlide({ 
		slideCell:"#vipfunc",
		titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
		mainCell:".bd ul", 
		effect:"leftLoop", 
		delayTime: 800,
		interTime: 4000,
		autoPage:true,//自动分页
		autoPlay:true //自动播放
	});
	
	$(".banner").huxiFn({})
	function animteehFn(){
		var oHeight = document.documentElement.clientHeight || document.body.clientHeight;
		var oWidth = document.documentElement.clientWidth || document.body.clientWidth;
		var sc = $(window).scrollTop();
		$(".animteeh").each(function(){
			if(sc+ oHeight > $(this).offset().top+150 ){
				$(this).addClass("active")
			}
		});
		$(window).scroll(function(){
			var oWidth = document.documentElement.clientWidth || document.body.clientWidth;
			oHeight = document.documentElement.clientHeight || document.body.clientHeight;
			sc = $(window).scrollTop();
			$(".animteeh").each(function(){
				if(sc+ oHeight > $(this).offset().top+150 ){
					$(this).addClass("active")
				}
			});
			$(".secton").each(function(){
				if(sc+ oHeight > $(this).offset().top+150 ){
					$(this).addClass("active")
				}
			})
			if(oWidth<610){
				$(".anlilunt li").each(function(){
					if(sc+ oHeight > $(this).offset().top+150 ){
						$(this).addClass("active")
					}
				})
			}
			
			
		});
		
	}
	animteehFn();
	
	
	function getPos(e){
		var oEvent = e || event;
		return {x: oEvent.clientX + document.documentElement.scrollLeft || document.body.scrollLeft, 
		y: oEvent.clientY +document.documentElement.scrollTop || document.body.scrollTop};
	}
	function mousnFn(){
		var oWidth = document.documentElement.clientWidth || document.body.clientWidth;
		var oHeight = document.documentElement.clientHeight || document.body.clientHeight;
		var pos1;
		var pos2;
		var r = {};
		$(".ceshitu").mouseenter(function(e){
			pos1 = getPos(e);
		});
		$(".ceshitu").mousemove(function(e){
			pos2 = getPos(e);
			var pX = (pos2.x/oWidth - 0.5)*20 || 10;
			var pY = (pos2.y/oHeight - 0.5)*20 || 10;
			console.log("x = " + pX + "--- y=" + pY)
			var n = "rotateX(" + pY + "deg) rotateY(" + pX + "deg) ",
				r = {
					"-webkit-transform": n,
					"-moz-transform": n,
					"-ms-transform": n,
					"-o-transform": n,
					transform: n
				};
				$(".ceshitu").css(r)
		});
		
	}
	//mousnFn();
	
	
	$(".conwqie li").hover(function(){
		$(this).addClass("cur").siblings().removeClass();
		var x = $(this).index();
		$(".conqitem").eq(x).slideDown(200).siblings(".conqitem").slideUp(200);
	},function(){
		
	});
	
	$(".conwqiewa").hover(function(){
		
	},function(){
		$(".conqitem").slideUp(200);
		$(".conwqie li").removeClass("cur")
	});
	
	$(".produtlist li").hover(function(){
		$(this).addClass("cur").siblings().removeClass();
		var x = $(this).index();
		$(".bmqie").eq(x).stop().slideDown(200).siblings(".bmqie").stop().slideUp(200);
	});
	$(".cont2").hover(function(){
		
	},function(){
		$(".bmqie").stop().slideUp(200);
		$(".produtlist li").removeClass("cur")
	});
	
	$("a[href='#aboutqie']").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		var x = $(this).index();
		$(".baotqinr").eq(x).show().siblings(".baotqinr").hide();
	});
	
	$(".tanhist li a").click(function(){
		var tan = $(this).attr("href");
		$(".tancuce").hide();
		$(".tancuce[datex='"+tan+"']").show();
	});
	$(".closetan").click(function(){
		$(this).parents(".tancuce").hide();
	});
	
	/* $(".viofunlst li a").hover(function(){
		$(this).find(".qinwmzs").stop().slideDown(200);
	},function(){
		$(this).find(".qinwmzs").stop().slideUp(200);
	}) */
	
	$(".dengclose").click(function(){
		$(this).parents(".dengtan").removeClass("cur");
	});
	$("[href='#tanbtn1']").click(function(){
		$(".dengtan1").addClass("cur");
	});
	$("[href='#tanbtn2']").click(function(){
		$(".dengtan2").addClass("cur");
	});
})