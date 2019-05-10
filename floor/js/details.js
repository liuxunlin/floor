; (function () {
	$("header").load("libs/public1.html");
	$("footer").load("libs/public2.html");
	
	var oSbox = document.querySelector("#sc381642");
	var oBbox = document.querySelector("#bc381642");
	var oBimg = document.getElementById("sim642");
	console.log(oSbox)
	oSbox.addEventListener("mouseover", function () {
		oBbox.style.display = "block";
		oSbox.addEventListener("mousemove", function (eve) {
			var e = eve || window.event
			var l = e.offsetX - oSbox.offsetLeft;
			var t = e.offsetY - oSbox.offsetTop;
			if (l < 0) l = 0;
			if (t < 0) t = 0;
			if (l > oSbox.offsetWidth) {
				l = oSbox.offsetWidth
			}
			if (t > oSbox.offsetHeight) {
				t = oSbox.offsetHeight;
			}
			var x = l / oSbox.offsetWidth;
			var y = t / oSbox.offsetHeight;
			oBimg.style.left = -(oBimg.offsetWidth - oBbox.offsetWidth) * x + "px";
			oBimg.style.top = -(oBimg.offsetHeight - oBbox.offsetHeight) * y + "px";

		})
	})
	oSbox.addEventListener("mouseout", function () {
		// oPbox.style.display = "none"
		oBbox.style.display = "none"
	})

	 var  ali = document.querySelectorAll("#goodsItems li")
	 console.log(ali)
	for (var i = 0; i < ali.length; i++) {
	  var im = ali[i].children;
	  ali[i].onclick = function (ele) {
		  $("#sim381642").attr("src",$(this).find("img").attr("mimg"));
		  $("#sim642").attr("src",$(this).find("img").attr("bimg"));
	  }
	}
})()