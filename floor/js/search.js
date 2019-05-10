(function(){
	var olist = document.querySelector(".list")
    var ali = olist.children;
    var otxt = document.getElementById("txt");

    var onOff = true;

    var index = 0;
    otxt.onclick = function(eve){
		var e = eve || window.event;
		stopDefault(e)
        stopBubble(e)
        if(onOff){
            olist.style.display = "block";
            for(var j=0;j<ali.length;j++){
                ali[j].className = "";
            }
            ali[index].className = "active";
            onOff = false;
        }else{
            olist.style.display = "none";
            onOff = true;
        }
    }
    
    document.onclick = function(){
        olist.style.display = "none";
        onOff = true;
    }

    for(var i=0;i<ali.length;i++){
        ali[i].index = i;

        ali[i].onmouseover = function(){
            for(var j=0;j<ali.length;j++){
                ali[j].className = "";
            }
            this.className = "active";
        }
        ali[i].onclick = function(){
            otxt.value = this.innerHTML;
            index = this.index;
        }
    }
// 阻止事件冒泡
function stopBubble(e){
    if(e.stopPropagation){
        e.stopPropagation()
    }else{
        e.cancelBubble = true;
    }
}

// 阻止默认行为
function stopDefault(e){
    if(e.preventDefault){
        e.preventDefault()
    }else{
        e.returnValue = false;
    }
}

})()