$(window).load(function(){
	var page = document.getElementsByTagName("html")[0]

	var innerPage = page.innerHTML;

	var fixedPage = innerPage.split('---').join('');
	var fixedPage = fixedPage.split('permalink: /404.html').join('');

	page.innerHTML = fixedPage
	$('#scene').parallax();
});