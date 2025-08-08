// JavaScript Document
PrintButton1 = new Image
PrintButton2 = new Image
logo1 = new Image
logo2 = new Image

if (document.images) {
	PrintButton1.src = "images/print1.jpg"
	PrintButton2.src = "images/print2.jpg"
	logo1.src = "images/logo1.jpg"
	logo2.src = "images/logo2.jpg"
}


		var imgArray = new Array(
			'CoupleBike3Lg.jpg',
			'CoupleCampingLg.jpg',
			'CoupleHikingLg.jpg',
			'ScubaCoupleLg.jpg'
			

		);


		var titleArray = new Array(
			'Biking Couple',
			'Camping Dream',
			'Hiking Couple',
			'Deep Sea Diving'
			
		);
			
		var imgPath = "Images/fullsize/";
		
		function swapImage(imgID) {

			var theImage = document.getElementById('theImage');
			var textDiv = document.getElementById('bottomText');

			var newImg;
			var textTitle;

			newImg = imgArray[imgID];
			theImage.src = imgPath + newImg;

			textTitle=titleArray[imgID];

      			textDiv.innerHTML = textTitle;
		}
			
		function preloadImages() {		
			for(var i = 0; i < imgArray.length; i++) {
				var tmpImg = new Image;
				tmpImg.src = imgPath + imgArray[i];
			}
		}
		
