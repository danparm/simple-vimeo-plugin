$(function () {
	$('.modalTrigger').on('click', function () {
		// master modal container
		var $modalContainer = $('#modalContainer'),
			// find modal trigger's video id data tag and title
			$videoId = $(this).attr('data-video-id'),
			$videoTitle = $(this).attr('data-video-title'),
			// vimeo player base url
			vimeoPlayer = 'http://player.vimeo.com/video/';
		// replace iframe src with proper vimeo video id
		$modalContainer.find('iframe').attr('src', vimeoPlayer + $videoId);
		// add video title
		$modalContainer.find('#myModalLabel').text($videoTitle);
		// open ze modal
		$modalContainer.modal('toggle');
	});
	$('.modal-header .close').on('click', function () {
		// find iframce source and label and reset
		var $thisParentModal = $(this).parents('.modal');
		// the reset
		$thisParentModal.find('iframe').attr('src', '');
		$thisParentModal.find('#myModalLabel').text('');
	});
});
	
