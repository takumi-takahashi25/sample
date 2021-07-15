'use strict';

const pageTopBack = document.querySelector('#top-back');
const headerNav = document.querySelector('.top-ham-area');
const headerNavMenu = document.querySelector('.top-js-menu');


pageTopBack.addEventListener('click', function () {
	window.scroll({
		top:0,
		behavior: "smooth"
	});
});

headerNav.addEventListener('click', function() {
	headerNav.classList.toggle('js-open');
	headerNav.classList.toggle('js-close');
	headerNavMenu.classList.toggle('js-open-menu');
	headerNavMenu.classList.toggle('js-close-menu');
});