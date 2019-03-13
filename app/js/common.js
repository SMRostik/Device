;(function() {

	var map_img = document.getElementById("map-img");
	var close = document.querySelector("#popup-map .popup__close");
	close.addEventListener("click", function(){
		document.querySelector(".popup").style.display = "none";
		document.querySelector("#popup-map").style.display = "none";
	});
	map_img.addEventListener("click", function(){
		document.querySelector(".popup").style.display = "flex";
		document.querySelector("#popup-map").style.display = "block";
	});

	var wu = document.getElementById("wu");
	var close_wu = document.querySelector("#popup-wu .popup__close");
	close_wu.addEventListener("click", function(){
		document.querySelector(".popup").style.display = "none";
		document.querySelector("#popup-wu").style.display = "none";
	});
	wu.addEventListener("click", function(){
		document.querySelector(".popup").style.display = "flex";
		document.querySelector("#popup-wu").style.display = "block";
	});

}());