(function (){
	"use strict";

	var self, boxes, swipe, pointer, moveLeft, moveRight;

	$.extend($.fn, {
		box: function(){
			var args = arguments[0] || { boxes: [], swipe: false };
				self = $(this);

			console.log(self);

			// TODO: options should be stored with the main object so they are unique
			// per implementation. Object should also be stored with selectors defined. 
			boxes = args.boxes;
			swipe = args.swipe;
			pointer = 0;

			if(swipe == true){

				this.swipe({ swipeTime: 1000, swipeX: 50, left: moveLeft, right: moveRight });
			}

			this.initialize();
		},
		initialize: function(){
			if(boxes != null){
				var object = boxes[0];
				$(document.getElementById(object)).css('left', '50%');
			}
		},
		moveBox: function(direction){
			if(direction == 'left'){
				if(pointer > 0){
					pointer--;
					
					var objectP = boxes[pointer + 1],
						objectM = boxes[pointer];

					$(document.getElementById(objectP)).css('left', '100%');
					$(document.getElementById(objectM)).css('left', '50%');
					console.log(objectP, objectM);
				}
			}else if(direction == 'right' && boxes.length > 1){
				if(pointer < (boxes.length - 1)){
					pointer++;
					
					var objectP = boxes[pointer - 1],
						objectM = boxes[pointer];

					$(document.getElementById(objectP)).css('left', '0%');
					$(document.getElementById(objectM)).css('left', '50%');
					console.log(objectP, objectM);
				}
			}
		},
		moveRight: function(){
			this.moveBox('right');
		}
	});

	moveLeft = function(){
		self.moveBox('left');
	}

	moveRight = function(){
		self.moveBox('right');
	}
})();