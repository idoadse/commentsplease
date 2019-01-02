function addTitles() {
	var elems = document.getElementsByClassName("forum-nav-thread-wrapper-1");
	for (var i=0; i<elems.length; i++) {
		var title = document.getElementsByClassName("forum-nav-thread-wrapper-1")[i].getElementsByClassName("forum-nav-thread-title")[0].innerText + ":  \n" + document.getElementsByClassName("forum-nav-thread-wrapper-1")[i].getElementsByClassName("thread-preview-body")[0].innerText
		elems[i].title = title
	}
}

setInterval(addTitles, 1000)