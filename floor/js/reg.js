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
	   for(var i=0;i<arr.length;i++){
		   arr[i].split("=")[0];
		   ke.push(arr[i].split("=")[0])
	   }
	   if(ke.indexOf(user.value) != -1 && user.value == "" ||  pass.value == ""){
				po.innerHTML="用户名重复请重新注册"
				user.value="";
				pass.value="";
		}else{
		   setCookie(user.value,pass.value,{
			  expires:7,
			  path:/floor/,
		     })
			po.innerHTML="注册成功,三秒钟之后去登录页面"
			setTimeout(() => {
					location.href = "login.html";
			}, 3000);
		}
}


})();