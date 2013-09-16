// ==UserScript==
// @name        Skip Paypal Validation - CAUTION!
// @namespace   NGPVAN
// @description Skip Oberon Paypal Validation
// @include     https://*.myngp.com/Tenant/Create*
// @include     https://*.myngp.com/Tenant/Update*
// @include     http://*.myngp.com/Tenant/Create*
// @include     http://*.myngp.com/Tenant/Update*
// @version     1
// ==/UserScript==

window.$(document).ready(function() {
	window.$(".paymentGatewayContainer :button[name^='PaymentGateway_']").parent(":visible").append("<button type='button' name='skipValidation'>Skip Validation</button>");
	
	window.ngp.tenant.update.paymentGateway.Messages.TestSuccessful = "We cannot verify this account against the payment gateway. Please look things over very carefully to ensure that these are the correct credentials.";

	window.$("[name='skipValidation']").click(function() {
		var $ = window.$;
		var ngp = window.ngp;
		
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