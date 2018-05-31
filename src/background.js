chrome.tabs.onUpdated.addListener((tabId, info, tab) => {
  console.log('One of my tabs updated: ', info, tab, tabId);
  setTimeout(() => {
    // ...let's simulate an AJAX request...
    // ...now let's pretend out data arrived...
    chrome.tabs.sendMessage(tabId, {
      cmd: 'showApp',
      kind: 'fancy',
      page: {
        elements: ['element1'],
        element1: {
          display: 'absolute',
          type: 'dummy',
          top: 100,
          left: 100,
          width: 100,
          height: 100,
        },
      },
    });
    console.log('Message sent !');
  }, 1000);
  if (info.url) { // <-- Not all `info` objects contain a `url` field
    //     (Also, if a tab is refreshed, the URL is not changed,
    //      so you will never get and `info` object with a `url` field)
    console.log('...pretending to make an AJAX request...');
    const pageURL = info.url;
  }
});
