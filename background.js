// background.js
chrome.webRequest.onCompleted.addListener(
    function(details) {
      if (details.statusCode === 404) {
        chrome.tabs.update(details.tabId, {url: "https://www.izdirvane.com/persons"});
      }
    },
    { urls: ["<all_urls>"] },
    ['responseHeaders']
);