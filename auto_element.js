var html = '<a href="index.html"><h3>Home</h3></a>';

var section1 = ['Home', 'Java', 'CSS']//write one-word link names in this list
html += '<h3>Demo:</h3>';
for (i = 0; i<section1.length; i++){
	html += '<a class="navlink" href="index.html"><div class="navtext" style="background-color:hotpink;margin-top:10px;">Home</div></a>'
}


document.getElementById("templaterr-sidebar").innerHTML = html;

//multi-word links, external links, or links wher elink text doesn't match page name, use
//html += '<div class="boxlink"><a href="https://youtu.be/dQw4w9WgXcQ">LINKTEXT</a></div>'


//add images and anything else you want
//html += '<a href="https://templaterr.neocities.org/">
//	<img src="https://templaterr.neocities.org/templaterr1.png"></a>'
			