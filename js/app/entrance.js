document.getElementsByTagName('html')[0].style.overflow = 'hidden';

//var loader = Stashy.Loader('#entrance--window');
//loader.on("absolute", "200px", "#fff", "prepend");

var accordion,
	entranceInterval = setInterval(function () {
	    if (typeof accordion === 'undefined' || !accordion) {
	        accordion = document.getElementById('addons');
	        return;
	    }

	    if (hasScrollBar()) {
	        document.getElementsByTagName('html')[0].style.overflow = 'visible';
	        document.getElementById('entrance--window').removeAttribute('id');
	        
	        clearInterval(entranceInterval);
			document.getElementById('loader').remove();
	        //loader.off();
			
	    }

document.getElementsByTagName('html')[0].style.overflow = 'visible';
	        document.getElementById('entrance--window').removeAttribute('id');
	        clearInterval(entranceInterval);
			document.getElementById('loader').remove();
	        //loader.off();
	}, 3000);

function hasScrollBar() {
    return accordion.scrollHeight > accordion.clientHeight;
};