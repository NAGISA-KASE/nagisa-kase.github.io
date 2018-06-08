$(function(){

	//features-boxのテキスト表示をhoverで切り替える
	$('.features-box').hover(
		function(){
			var text = $(this).find('p');
			$(text).fadeIn(500);
		},
		function(){
			var text = $(this).find('p');
			$(text).fadeOut(500);
		}
	);

// ↓ END ↓
});
