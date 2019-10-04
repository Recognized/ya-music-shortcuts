chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.query({}, function(tabs){
        for (let i = 0; i < tabs.length; i++) {
            chrome.tabs.sendMessage(tabs[i].id, command);
        }
    });
});
