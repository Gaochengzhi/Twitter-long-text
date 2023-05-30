chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'loading') {
        if (tab.status === 'complete') {
            // Page is fully loaded (including initial load)
            chrome.tabs.sendMessage(tabId, {
                message: 'urlChanged',
                url: tab.url,
                initialLoad: true
            });
        } else {
            // Page is still loading
            chrome.tabs.sendMessage(tabId, {
                message: 'urlChanged',
                url: tab.url,
                initialLoad: false
            });
        }
    }
});
