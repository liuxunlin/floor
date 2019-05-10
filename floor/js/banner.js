;(function(){
	// ------tnav----------
	$(".dis").mouseover(function(){
		$(this).find(".tnav").stop().hide().stop().show();
	})
    $(".dis").mouseout(function(){
		$(this).find(".tnav").stop().hide()
	})

	//  --------轮播图--------------------

	var list=$(".banner").find("a");
	var index=3;
	var iPrev=list.length-1;
	$(".banner").children("ul").find("li").on("click",function(){
		if($(this).index() > index){
			listMove($(this).index(),1)
		}
		if($(this).index() < index){
			listMove($(this).index(),-1)
		}
		index = $(this).index();
		$(this).css({
			background:"#f60"
		}).siblings().css({
			background:""
		})
	})
	listMove = function(iNow,type){
		list.eq(index).css({
			left:0
		}).stop().animate({
			left:-list.eq(0).width() * type
		},1000)
		list.eq(iNow).css({
			left:list.eq(0).width() * type
		}).stop().animate({
			left:0
		},1000)
	}
	function rightClick(){
		if(index == list.length-1){
	       index = 0;
			   iPrev = list.length-1;
		}else{
			    index++;
			    iPrev = index - 1
		}
		$(".banner").children("ul").find("li").eq(index).css({
			background:"#f60"
		}).siblings().css({
			background:""
		})
		btnMove(1)
	}
	btnMove = function(type){
		list.eq(iPrev).css({
			left:0
		}).stop().animate({
			left:-list.eq(0).width() * type
		},1000)
		  list.eq(index).css({
			left:list.eq(0).width() * type
		}).stop().animate({
			left:0
		},1000)
	}
	timer = setInterval(() => {
		rightClick()
	},3000);
	$(".banner").hover(function(){
		clearInterval(timer)
	},function(){
		timer = setInterval(() => {
			rightClick()
		},3000);
	})	

	//--------回到顶部------------
	$(window).scroll(function () {
		if ($(window).scrollTop()>$(window).height()) {
				 $(".backtop").css({"display":"block"})
			}else{
				$(".backtop").css({"display":"none"})
			}
		})
		$(document).ready(function(){
			$(".backtop").click(function(){
					$('html,body').animate({scrollTop:0},'slow');
			});
		});
}
)();