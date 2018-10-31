/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var section = document.querySelector('form.showarticle'); 
var button = document.getElementById("showverhaalbutton");


var reveal = function () {
	section.classList.toggle('showarticleactive');
};

button.addEventListener('click', reveal);


