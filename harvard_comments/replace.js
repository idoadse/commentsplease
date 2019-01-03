function addComments() {
    var elems = document.getElementsByClassName("thread-preview-body");
	for (var i=0; i<elems.length; i++) {
		var title = document.getElementsByClassName("thread-preview-body")[i].style["white-space"]="normal"
	}
}

setInterval(addComments, 1000)