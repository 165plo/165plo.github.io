(function() {
   // your page initialization code here
   // the DOM will be available here
   var para = document.createElement("p");
	var node = document.createTextNode("This is new.");
	para.appendChild(node);

	var element = document.getElementById("div1");
element.appendChild(para);

})();
