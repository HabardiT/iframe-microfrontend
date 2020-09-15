receive_message = (e) => {
    console.log("received message from " + e.origin + ": " + JSON.stringify(e.data));
    var targetIframe = document.getElementById(e.data.target);
    targetIframe.contentWindow.postMessage(e.data, "*");
};

window.addEventListener("message", receive_message, false);
