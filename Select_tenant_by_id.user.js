// ==UserScript==
// @name        Select tenant by id
// @namespace   NGPVAN
// @description Click a tenant by its id
// @include     https://*.myngp.com/Security/SelectAccount
// @include     https://*.oberon.local/Security/SelectAccount
// @version     1.0
// @author    	ckoppelman
// ==/UserScript==

var tenantId = prompt("Enter tenant id:", "2");

if (tenantId) {
	document.getElementById("id").value = tenantId;
	document.forms[0].submit();
}