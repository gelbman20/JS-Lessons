var button = document.getElementById('btn');

button.onclick = function () {
	var inputValue = document.getElementById('inp1').value;

	alert(Math.pow(inputValue, 2));
};