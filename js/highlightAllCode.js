var languages = {
	javascript: /\b(function|return|var|if|else)\b/g,
	java: /\b(int|if|return|throw|new|boolean)\b/g
};

function highlightAllCode() {
	//gets what is in the tag pre and stores it in pres
	var pres = document.body.getElementsByTagName("pre");
	//iterate through the length of pres
	for (var i = 0; i < pres.length; i++) {
	//git pre that is in pres position i
		var pre = pres[i];
	        //git lang the atributres of the data language
	        var lang = pre.getAttribute("data-language");
	        //checks to see if it is special and in need of highlighitng
	        	if (languages.hasOwnProperty(lang))
	                //runs the highlight function to highlight the keyword
	                highlightCode(pre, languages[lang]);
	}
}
