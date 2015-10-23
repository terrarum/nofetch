var queryInfo = {
    active: true,
    currentWindow: true
};

var url, append;

chrome.browserAction.onClicked.addListener(function(tab) {
    url = tab.url;
        
    // Check for existing `google_nofetch`.
    if (url.indexOf("google_nofetch") !== -1) return;

    // Check for existing ? in url.
    if (url.indexOf("?") === -1) {
        append = "?google_nofetch";
    }
    else {
        append = "&google_nofetch"
    }

    chrome.tabs.update(tab.id, {url: tab.url + append});
});
