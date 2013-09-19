// ==UserScript==
// @name        Production Incident dashboard as project page
// @namespace   NGPVAN
// @description Always immediately redirect from the Production Incidents project page to its dashboard
// @include     https://ngpvan.atlassian.net/browse/PROD
// @run-at document-start
// @author		dplassmann
// @version     1.0
// ==/UserScript==


window.location.replace('https://ngpvan.atlassian.net/secure/Dashboard.jspa?selectPageId=10801')