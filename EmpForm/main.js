function submit() {
    var name = $("#name").val();
    var id = $("#id").val();
    var description = $("#description").val();

    var obj = {
        name: name,
        id: id,
        description: description,
        target: "list",
    };
    window.parent.postMessage(obj, "*");
}
