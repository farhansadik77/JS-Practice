// JS Example
function showDate() {
	document.getElementById('time').innerHTML=Date();
}
function showText() {
	document.getElementById('text').innerHTML="Hello World!";
}
function showText_2() {
	document.getElementById('text_2').style.fontSize="36px";
}
function hideText() {
	document.getElementById('text_3').style.display="none";
}
function bulbOn() {
	document.getElementById('img').src="images/bulbon.gif";
}
function bulbOff() {
	document.getElementById('img').src="images/bulboff.gif";
}
function happyEmoji() {
	document.getElementById('img_2').src="images/happy.png";
}
function sadEmoji() {
	document.getElementById('img_2').src="images/sad.png";
}
window.alert('WELCOME!');