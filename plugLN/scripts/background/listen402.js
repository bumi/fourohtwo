var fourohtwo = 402;

function paycheck(request) {
	if (request.statusCode == fourohtwo) {
		console.log("Request Value: " + request.statusCode + " URL: " + request.url);
		browser.browserAction.openPopup();
	}
}

browser.webRequest.onHeadersReceived.addListener(
  paycheck,
  {urls:  ["<all_urls>"]}, /*Here we can change the urls we want to check.*/
  ["blocking"]
);
