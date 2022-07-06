chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.create({
          url: 'install.html'
})
});