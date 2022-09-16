function counterBox() {
	var element = document.getElementById('counterBox')
	var value = element.innerHTML;
	++value;

	console.log(value)
	document.getElementById('counterBox').innerHTML=value;
}