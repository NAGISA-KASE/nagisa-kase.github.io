$(function(){

	// access&hoursへのページ内ジャンプをスクロールアニメーションにする
	$('#jump').click(function() {
		let position = $('#access-hours-section').offset().top;
		$('html, body').animate( {
			'scrollTop': position
		}, 'slow');
	})

	// スマホ用メニューモーダル
	$('#menu-icon').click(function() {
		if($('#menu-icon').hasClass('open')) {
			$('#menu-icon').removeClass('open');
			$('#menu-modal').slideUp();
		} else {
			$('#menu-icon').addClass('open');
			$('#menu-modal').slideDown();
		}
	});

	//features-boxのテキスト表示をhoverで切り替える
	$('.features-box').hover(
		function(){
			let text = $(this).find('p');
			$(text).fadeIn(500);
		},
		function(){
			let text = $(this).find('p');
			$(text).fadeOut(500);
		}
	);

// ↓ END ↓
});
