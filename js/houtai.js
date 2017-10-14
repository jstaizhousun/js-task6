var navTitle = document.getElementsByClassName("nav-title");
var dropDown = document.getElementsByClassName("drop-down");
var list     = document.getElementsByClassName("list");
var li       = document.getElementsByClassName("drop-down-menu");
for(var i= 0; i<navTitle.length; i++){
	(function(i){
		navTitle[i].onclick = function() {
			var astyle = dropDown[i].style;
			astyle.display = astyle.display == "block" ? "none" : "block";
			list[i].style.transform = list[i].style.transform =="rotate(-90deg)"?"rotate(0deg)":"rotate(-90deg)"
		}
	})(i);
}
for (i= 0; i<li.length; i++){
	li[i].onclick = function(){
		for(var j=0; j<li.length; j++){
			li[j].style.background = "#232a3a";
		}
		this.style.background = "#7a7e88";
	}
}
