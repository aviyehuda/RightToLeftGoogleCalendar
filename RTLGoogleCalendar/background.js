// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {

  if (tab.url.indexOf('calendar') > -1) {
  
		 chrome.tabs.insertCSS(null, {code: '.ui-sch input { direction: rtl }'});
		 chrome.tabs.insertCSS(null, {code: '.ui-sch textarea { direction: rtl }'});
  }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);
