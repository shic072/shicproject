var reclis = $('.rec-content ul>li');

reclis.on('mouseover',function(event){
	var li = event.currentTarget;
	reclis.removeClass("todayCurr");
	$(li).addClass("todayCurr");
})

var gameUl = $('.game-list>ul');
var gameLeft = $('.game-btn .game-left');
var gameRight = $('.game-btn .game-right');
var gameindx = 0;
gameLeft.on('click',function(event){
	gameindx = gameindx - 1;

	if (gameindx < 0) {
		gameindx = gameUl.length - 1;
	}
	gameUl.removeClass('game-list-show');
	$(gameUl[gameindx]).addClass('game-list-show');
})
gameRight.on('click',function(event){
	gameindx = gameindx + 1;
	if (gameindx > gameUl.length - 1) {
		gameindx = 0;
	}
	gameUl.removeClass('game-list-show');
	$(gameUl[gameindx]).addClass('game-list-show');
})

var hot_left = $('.liBox-lis_left');
var hot_right = $('.liBox-lis_right');
var move = $('.liBox_lis_box>ul')[0];
hot_right.on('click',function(){
	var left = move.style.left;
	if ( left >= 0) {

		left = left - 82 +'px';
	}
	
})