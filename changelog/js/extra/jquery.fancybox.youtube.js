jQuery(document).ready(function() {
	$(".youtube-video").click(function() {
		$.fancybox({
			'padding' : 4,
			'autoScale'	: false,
			'transitionIn' : 'none',
			'transitionOut' : 'none',
			'title' : this.title,
			'width' : 640,
			'height' : 385,
			'href' : this.href,
			'href' : this.href.replace(new RegExp("watch\\?v=","i"),"v/"),
			'type' : "iframe"
		});
	return false;
	});
});