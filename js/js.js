// JavaScript Document
function compare(sprovice){
		var arrayObj = new Array('安徽','北京','重庆','福建','甘肃','广东','广西','贵州','河北','河南','黑龙江','湖北','湖南','海南','吉林','江苏','江西','辽宁','内蒙古','宁夏','青海','山东','山西','陕西','上海','四川','天津','西藏','新疆','云南','浙江');　 
		var arraylij = new Array('http://ah.offcn.com/html/2012/07/17116.html','http://bj.offcn.com/zg/13bjzxhd/exchange.html','http://cq.offcn.com/zg/2015cqqq/','http://fj.offcn.com/zg/fjqq/','http://gs.offcn.com/zg/gsqq/','http://gd.offcn.com/zg/gdqq/','http://gx.offcn.com/zg/qq/','http://gz.offcn.com/zg/14qqhz/','http://hb.offcn.com/zg/hbqqpt/','http://he.offcn.com/zg/qq/','http://hlj.offcn.com/zg/qqhz/','http://hu.offcn.com/zg/hbqq/','http://hn.offcn.com/zg/zxjlpt/','http://hi.offcn.com/zg/qq/','http://jl.offcn.com/zg/qqpt/','http://js.offcn.com/zg/2013jstudy/index.html','http://jx.offcn.com/zg/jxxxq/','http://ln.offcn.com/zg/ln_zt/2014ln_sk/2014-jlpthz/index.html','http://nm.offcn.com/zg/nmqq/','http://nx.offcn.com/zg/qq/','http://qh.offcn.com/html/2013/06/11766.html','http://sd.offcn.com/zg/z029qq/index.html','http://sx.offcn.com/zg/2014qqhd/','http://sa.offcn.com/zg/2014saqq/','http://sh.offcn.com/zg/shzxhd/exchange.html','http://sc.offcn.com/zg/scqqhz/','http://tj.offcn.com/zg/tjqq/','http://www.offcn.com/zg/2014qqhz/#','http://xj.offcn.com/html/2013/03/11554.html','http://yn.offcn.com/zg/ynqqpt/','http://zj.offcn.com/zg/qq/')
		for(i in arrayObj){
			if(sprovice == arrayObj[i]){
				return arraylij[i];
			}
		}
	}
$(function(){
	$('.side_nav_top').click(function(){
		$('html,body').animate({scrollTop:0},500)  
		  
	  })	
	
	$('.cont-list2-addR span').each(function(x){
		$(this).mouseover(function(){
			$('.cont-list2-addR span').removeClass('hover')
			$(this).addClass('hover').siblings('span').removeClass('hover')
			$('.cont-list2-add table').eq(x).show().siblings('table').hide()
		})
		
		})
		
		$('.cont-exam-addR span').each(function(x){
		$(this).mouseover(function(){
			$('.cont-exam-list2 span').removeClass('active')
			$(this).addClass('active').siblings('span').removeClass('active')
			$('.cont-exam-list2 table').eq(x).show().siblings('table').hide()
		})
		
		})
		/*suns*/
		$('.sUl1 li').each(function(x) {
		$(this).mouseover(function(){
			$('.sUl1 li p').eq(x).show();
			
		}).mouseout(function(){
			
			$('.sUl1 li p').eq(x).hide();
			
		})
        
    });
	   
	   
	   /*郭效果*/
	   	$(".zg_cn .hd li").each(function(c) {
        $(this).hover(function(){
		$(".zg_cn .hd li").removeClass("on");
		$(this).addClass("on");
		$(".zg_cn .bd").hide();
		$(".zg_cn .bd:eq("+c+")").show();
	   })
       })
	   
	  /*获取年份*/
	   var day = new Date()
	   var year = day.getFullYear()
	   document.getElementById('year').innerHTML = year;
	    
	   
	
	
})
