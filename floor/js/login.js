;(function(){
	$("header").load("libs/public1.html");
	$("footer").load("libs/public2.html");
	var btn=document.getElementById("btn");
	var user=document.getElementById("user");
	var pass=document.getElementById("pass");
	var po=document.getElementById("point")
	btn.onclick=function(){
	   var arr = document.cookie.split("; ");
	   var ke=[];
	   var va=[];
	   for(var i=0;i<arr.length;i++){
		   arr[i].split("=")[0];
		   ke.push(arr[i].split("=")[0]);
		   va.push(arr[i].split("=")[1]);
	   }
	   if(ke.indexOf(user.value)==va.indexOf(pass.value) && ke.indexOf(user.value) != -1){
			   po.innerHTML ="登录成功，去首页挑选商品吧";
			   var timer=setTimeout(() => {
	 			location.href = "index.html";
					}, 1000);
	   }else{
			   po.innerHTML ="用户名密码错误,请重新输入"
			   user.value="";
	           pass.value="";
	   }

}


})();