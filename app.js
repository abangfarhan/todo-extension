document.getElementById('heading').innerHTML = localStorage['title'] || 'To-Do List';
document.getElementById('content').innerHTML = localStorage['text'] || 'Do something';
// the right value is the default value

setInterval(function(){
	// save texts on localstorage
	localStorage['title'] = document.getElementById('heading').innerHTML;
	localStorage['text'] = document.getElementById('content').innerHTML;
}, 1000);