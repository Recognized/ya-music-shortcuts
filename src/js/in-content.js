function inject(code) {
    const th = document.getElementsByTagName("head")[0];
    const s = document.createElement("script");
    s.setAttribute("type", "text/javascript");
    s.innerText = code;
    th.appendChild(s);
    console.log("Injected " + code);
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log(message);
    if (message === "next-track") {
        inject("externalAPI.next();");
    } else if (message === "prev-track") {
        inject("externalAPI.prev();");
    } else if (message === "toggle-pause") {
        inject("externalAPI.togglePause();");
    }
});