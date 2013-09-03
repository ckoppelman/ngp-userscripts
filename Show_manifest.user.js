// ==UserScript==
// @name        Show manifest
// @namespace   NGPVAN
// @description Display the version manifest on the login screen
// @include     http*://localhost/Security/SelectAccount*
// @include     http*://*.oberon.local/Security/SelectAccount*
// @include     http*://*.myngp.com/Security/SelectAccount*
// @include		http*://oberon.ngpsoftware.com/Security/SelectAccount*
// @version     1.0
// @grant    GM_addStyle
// ==/UserScript==
 
GM_xmlhttpRequest({
	method: 'GET',
	dataType: 'jsonp',
	url: 'http://localhost:82/Api/v2/Manifest',
	onload: function (response) {
		var manifest = JSON.parse(response.responseText);
		var newHTML = document.createElement('div'); 
		newHTML.innerHTML='<pre id="manifest">'
			+manifest.userName+' at '+(new Date(manifest.buildDateTime)).toLocaleString()+' on '+manifest.buildMachine
			+'\n'
			+manifest.local.branch+'/'+manifest.local.commit
			+'</pre>'; 
		document.body.appendChild(newHTML);
	}, 
});