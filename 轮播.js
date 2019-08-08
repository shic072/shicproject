// <script>
	var imgs = $(".swiperimg>img");
	var sblis = $(".swiperBox ul>li");
	var index = 0;
	var left = $('.swiperBox .left');
	var right = $('.swiperBox .right');

		left.on('click',function(event){
			index = index - 1;

			if (index < 0) {
				index = imgs.length - 1;
			}
			sblis.removeClass("curr");
			$(sblis[index]).addClass('curr');

			imgs.fadeOut("fast");
			$(imgs[index]).fadeIn("slow");
		})

	right.on('click',function(event){
		index = index + 1;

		if (index > imgs.length - 1) {
			index = 0;
		}
		sblis.removeClass("curr");
		$(sblis[index]).addClass('curr');

		imgs.fadeOut("fast");
		$(imgs[index]).fadeIn("slow");
	})

	sblis.on('click',function(event){
		var li = event.target;
		index = $(li).data('index');

		sblis.removeClass("curr");
		$(li).addClass('curr');

		imgs.fadeOut("fast");
		$(imgs[index]).fadeIn("slow");
	})
// </script>