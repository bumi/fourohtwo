var fourohtwo = 402;
var title = "Paymentrequest 402";

function paymentNot() {
	browser.notifications.create({
  		"type": "basic",
  		"iconUrl": browser.extension.getURL("icons/BitcoinLN.jpg"),
  		"title": title,
  		"message": "Do you want to pay ...? -> Open the Plugin ;)",
	});
}

function paycheck(request) {
	if (request.statusCode == fourohtwo) {
		console.log("Request Value: " + request.statusCode + " URL: " + request.url);
		paymentNot();
	}
}

browser.webRequest.onHeadersReceived.addListener(
  paycheck,
  {urls:  ["<all_urls>"]}, /*Here we can change the urls we want to check.*/
  ["blocking"]
);

browser.notifications.onClicked.addListener(function handleClick(notificationID) {
	console.log("NotificationID: " + notificationID)
	browser.browserAction.openPopup("default_popup");
});