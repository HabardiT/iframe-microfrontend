receive_message = (e) => {
    console.log("received message from " + e.origin + ": " + JSON.stringify(e.data));
    delete e.data.target;
    setDetails(e.data);
};
window.addEventListener("message", receive_message, false);

setDetails = (obj) => {
    $("#name").text(obj.name);
    $("#id").text(obj.id);
    $("#description").text(obj.description);
};
