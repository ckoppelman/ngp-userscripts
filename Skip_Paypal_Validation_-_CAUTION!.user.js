// ==UserScript==
// @name        Skip Paypal Validation - CAUTION!
// @namespace   NGPVAN
// @description Skip Oberon Paypal Validation
// @include     https://*.myngp.com/Tenant/Create*
// @include     https://*.myngp.com/Tenant/Update*
// @include     http://*.myngp.com/Tenant/Create*
// @include     http://*.myngp.com/Tenant/Update*
// @author		ckoppelman
// @version     1.6.1
// ==/UserScript==

window.$(document).ready(function() {
	
	var addButton = function () {
		window.$(".paymentGatewayContainer :button[name^='PaymentGateway_']").parent().append("<button type='button' name='skipValidation'>Skip Validation</button>");
		return true;
	};
	
	window.$("#AddGateway").click(addButton);
	
	addButton();
	

	window.$(".paymentGatewayContainer").on("click", "[name='skipValidation']", function () {
		var $ = window.$;
		var ngp = window.ngp;
		
		var messages = ngp.tenant.update.paymentGateway.Messages;
		messages.TestSuccessful = "We have not necessarily verified this account as valid. Please look things over very carefully to ensure that these are the correct credentials.";
		
		messages.Changed += " Remember - We have not necessarily verified this account as valid.";
		
		
		var fakeButton = $(this);
		var button = fakeButton.prevAll(":button:visible");
		
        window.savingIndicator = new window.progressIndicator({ button: button, text: $('.indicatorText', window.$form).html() });
        var containingDivId = button[0].name.replace(".PrimaryAction", "");
        var paymentGateway = $('div[id="' + containingDivId + '"]');
		ngp.tenant.update.hidePaymentGatewayFields(paymentGateway);
		
		ngp.tenant.update.testPaymentGatewaySuccess(button);
		fakeButton.hide();
		ngp.FeedBack.update({DisplayMessageType: window.Constants.ResponseResultCode.Success});
		
		button.siblings(".hint").addClass("yellowbox");
		return false;
	});
});