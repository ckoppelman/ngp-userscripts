// ==UserScript==
// @name        Show manifest
// @namespace   NGPVAN
// @description Display the version manifest on the login screen
// @include     http*://localhost/Security/SelectAccount*
// @include     http*://*.oberon.local/Security/SelectAccount*
// @include     http*://*.myngp.com/Security/SelectAccount*
// @include     http*://oberon.ngpsoftware.com/Security/SelectAccount*
// @version     1.2
// @grant    GM_xmlhttpRequest
// ==/UserScript==

var urlMap = {
    'localhost' : 'http://localhost:82/Api',
    'www2.myngp.com' : 'https://api.myngp.com',
    'www3.myngp.com' : 'https://api3.myngp.com',
    'www4.myngp.com' : 'https://api4.myngp.com',
};

var $apiRoot;

if (urlMap[location.host]){
	$apiRoot = urlMap[location.host]
} else {
	$apiRoot = 'http://'+location.host+':82'
}

var $url = $apiRoot+'/v2/Manifest';

GM_xmlhttpRequest({
    method: 'GET',
    dataType: 'json',
    url: $url,
    onload: function (response) {
        var manifest = JSON.parse(response.responseText);
        var newHTML = document.createElement('div'); 
        newHTML.innerHTML='<table id="manifest">'
            +'<tr><th>Commit</th><td>'+manifest.local.commit+'</td></tr>'
            +'<tr><th>User</th><td>'+manifest.userName+'</td></tr>'
            +'<tr><th>Date</th><td>'+(new Date(manifest.buildDateTime)).toLocaleString()+'</td></tr>'
            +'<tr><th>Machine</th><td>'+manifest.buildMachine+'</td></tr>'
            +(manifest.userName == 'TeamCityBuild' ? '' :'<tr><th>Branch</th><td>'+manifest.local.branch+'</td></tr>')
            +'</table>'; 
        document.body.appendChild(newHTML); 
	}
});