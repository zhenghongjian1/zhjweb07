//footer
function createFooter(){

	var html = "<section class=\"op\">\
    		<div class=\"c1 clearfix\">\
    			<div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5 t1\" id=\"phone\">\
					<a id=\"login\" href=\"waplogin.html\" target=\"_self\">登录</a>\
    			</div>\
    			<div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7 t2\">\
    				<a href=\"javascript:;\" >意见反馈</a>\
    			</div>\
    		</div>\
    	</section>\
    	<section class=\"footer-links\">\
		    <ul>\
			    <li><a href=\"javascript:;\">标准版</a></li>\
			    <li class=\"cur\"><a href=\"javascript:void(0);\">触屏版</a></li>\
				<li><a href=\"javascript:;\" >电脑版</a></li>\
			    <li><a href=\"javascript:;\">客户端</a></li>\
		    </ul>\
    	</section>\
    	<section class=\"address\"> Copyright&copy;1999-2018  中国移动  版权所有</section>";
		
	$("footer").html(html);
}
$(function(){
	createFooter();
})