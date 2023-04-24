chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "getTabUrl") {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var url = tabs[0].url;
        console.log("Tab URL: " + url);
        // call the Python code here with the url parameter
        sendResponse({ url: url });
      });
    }
    return true;
  });
  