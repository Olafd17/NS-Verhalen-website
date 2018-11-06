/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var notification = document.querySelector('.notification'); 
var download = document.getElementById("okDownload");


var reveal = function () {
	notification.classList.toggle('notificationactive');
};

download.addEventListener('click', reveal);