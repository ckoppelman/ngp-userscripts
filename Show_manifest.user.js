// ==UserScript==
// @name        Show manifest
// @namespace   NGPVAN
// @description Display the version manifest on the login screen
// @include     http*://localhost/Security/SelectAccount*
// @include     http*://*.oberon.local/Security/SelectAccount*
// @include     http*://*.myngp.com/Security/SelectAccount*
// @include     http*://oberon.ngpsoftware.com/Security/SelectAccount*
// @version     1.0
// @grant    GM_addStyle
// ==/UserScript==

var urlMap = {
    'localhost' : 'http://localhost:82/Api',
    'dev1.oberon.local' : 'http://dev1.oberon.local:82',
    'dev2.oberon.local' : 'http://dev2.oberon.local:82',
    'dev3.oberon.local' : 'http://dev3.oberon.local:82',
    'dev4.oberon.local' : 'http://dev4.oberon.local:82',
    'dev5.oberon.local' : 'http://dev5.oberon.local:82',
    'dev6.oberon.local' : 'http://dev6.oberon.local:82',
    'www2.myngp.com' : 'http://api2.myngp.com',
    'www3.myngp.com' : 'http://api3.myngp.com',
    'www4.myngp.com' : 'http://api4.myngp.com',
    'oberon.ngpsoftware.com' : 'oberon.ngpsoftware.com:82'
};

var $url = urlMap[location.host]+'/v2/Manifest';

GM_xmlhttpRequest({
    method: 'GET',
    dataType: 'jsonp',
    url: $url,
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