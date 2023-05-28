
// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages
// chrome.tabs.onUpdated.addListener(
//     function (tabId, changeInfo, tab) {
//         // read changeInfo data and do something with it
//         // like send the new url to contentscripts.js
//         if (changeInfo.url) {
//             chrome.tabs.sendMessage(tabId, {
//                 message: 'hello!',
//                 url: changeInfo.url
//             })
//         }
//     }
// );

// background.js
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
