var imgs_column = $('.img_box>a');
var lis_column  = $('.btn_box>a');
var timer_column  = null;
var index_column  = 0;

function play(){
		starAutoPlay();

		lis_column.on("mouseover",function () {
			stopAutoPlay();
		})
		lis_column.on("mouseout",function () {
			starAutoPlay();
		})

		lis_column .on("click",function(event){
			var li_column  = event.target;
			// var index = 0;
			var index_column  = $(li_column).data('index');
			// $.each(lis,function(indx,item){
			// 	if (li==item) {
			// 		index = indx;
			// 	}
			// });
			$(li_column).siblings().removeClass("curr");
			$(li_column).addClass('curr');
	
			$(imgs_column[index_column]).siblings().fadeOut("fast");
	
			$(imgs_column[index_column]).fadeIn("slow");
		})
	
}

function starAutoPlay() {
	// body...
	timer_column  = setInterval(function () {
		index_column ++;
		if (index_column  > imgs_column.length - 1) {
			index_column  = 0;
		}

		$(lis_column[index_column]).siblings().removeClass("curr");
		$(lis_column[index_column]).addClass('curr');
	
		$(imgs_column[index_column]).siblings().fadeOut("fast");
	
		$(imgs_column[index_column]).fadeIn("slow");
	},2000) 
}
function stopAutoPlay(){
	if (timer_column ) {
		clearInterval(timer_column);
	}
}
window.play();