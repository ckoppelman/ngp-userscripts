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
		newHTML.innerHTML='<table id="manifest">'
			+'<tr><th>Commit</th><td>'+manifest.local.commit+'</td></tr>'
			+'<tr><th>User</th><td>'+manifest.userName+'</td></tr>'
			+'<tr><th>Date</th><td>'+(new Date(manifest.buildDateTime)).toLocaleString()+'</td></tr>'
			+'<tr><th>Machine</th><td>'+manifest.buildMachine+'</td></tr>'
			+'<tr><th>Branch</th><td>'+manifest.local.branch+'</td></tr>'
			+'</table>'; 
		document.body.appendChild(newHTML);
	}, 
});