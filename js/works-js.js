$(document).ready(function(){
	function appendImg(portNum,workNums){
	for(var i=1;i<workNums+1;i++){
		var image=document.createElement("img");
		image.src="assets\\img\\work\\port"+portNum+"("+i+").jpg";
		var place=document.getElementById("content");
		place.appendChild(image);
	}
	}
	appendImg(1,5);
})