// ==UserScript==
// @name        Uncheck test button
// @namespace   NGPVAN
// @include     http://localhost/Security/SelectAccount*
// @include     http://*.oberon.local/Security/SelectAccount*
// @include     http://*.myngp.com/Security/SelectAccount*
// @include     https://localhost/Security/SelectAccount*
// @include     https://*.oberon.local/Security/SelectAccount*
// @include     https://*.myngp.com/Security/SelectAccount*
// @include		http://oberon.ngpsoftware.com/Security/SelectAccount*
// @version     1.0.4
// ==/UserScript==
 
document.forms[0]["testFilter"].click();