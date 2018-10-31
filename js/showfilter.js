/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var section = document.querySelector('form.showfilter'); 
var button = document.getElementById("showfilterbutton");


var reveal = function () {
	section.classList.toggle('showfilteractive');
};

button.addEventListener('click', reveal);


